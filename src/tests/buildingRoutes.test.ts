import request from 'supertest';
import app from '../index'; // Import your Express app from index.ts

describe('Building Routes', () => {
  
  // Test the GET /buildings endpoint
  it('should fetch all buildings', async () => {
    const response = await request(app).get('/buildings');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Assuming the response is an array
  });

  // Test the POST /buildings endpoint
  it('should create a new building', async () => {
    const newBuilding = {
      name: 'Test Building',
      temperature: 22.5,
      location: 'Main St',
      status: 'Active'
    };
    const response = await request(app)
      .post('/buildings')
      .send(newBuilding);
      
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newBuilding);
  });

  // Test the PUT /buildings/:id endpoint
  it('should update an existing building', async () => {
    const buildingToUpdate = {
      name: 'Updated Building',
      temperature: 24.0,
      location: 'Updated St',
      status: 'Inactive'
    };
    const response = await request(app)
      .put('/buildings/1') // Use a valid building ID here
      .send(buildingToUpdate);
    
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(buildingToUpdate);
  });

  // Test the DELETE /buildings/:id endpoint
  it('should delete an existing building', async () => {
    const response = await request(app).delete('/buildings/1'); // Use a valid building ID here
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', `Building with id 1 deleted`);
  });
});
