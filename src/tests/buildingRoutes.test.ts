import request from 'supertest';
import app from '../index';
import connection from '../config/database';

describe('Building Routes', () => {
  let createdBuildingId: number;

  // Set up the database state before each test
  beforeEach(async () => {
    // Clear all data
    await connection.promise().query('DELETE FROM buildings');

    // Insert a test building
    const [result]: any = await connection.promise().query(
      'INSERT INTO buildings (name, temperature, location, status) VALUES (?, ?, ?, ?)',
      ['Initial Test Building', 22.5, 'Initial Location', 'Active']
    );
    createdBuildingId = result.insertId;
  });

  // Close the database connection after all tests
  afterAll(async () => {
    await connection.promise().end();
  });

  it('should fetch all buildings', async () => {
    const response = await request(app).get('/buildings');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new building', async () => {
    const newBuilding = {
      name: 'New Test Building',
      temperature: 24.5,
      location: 'Test Location',
      status: 'Active',
    };

    const response = await request(app)
      .post('/buildings')
      .send(newBuilding);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newBuilding);
  });

  it('should update an existing building', async () => {
    const updatedBuilding = {
      name: 'Updated Test Building',
      temperature: 26.0,
      location: 'Updated Location',
      status: 'Inactive',
    };

    const response = await request(app)
      .put(`/buildings/${createdBuildingId}`)
      .send(updatedBuilding);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedBuilding);
  });

  it('should delete an existing building', async () => {
    const response = await request(app).delete(`/buildings/${createdBuildingId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      'message',
      `Building with id ${createdBuildingId} deleted`
    );
  });
});
