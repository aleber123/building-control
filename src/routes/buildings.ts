import { Router, Request, Response } from 'express';
import connection from '../config/database';
import { FieldPacket, RowDataPacket } from 'mysql2'; // Import necessary types

const router = Router();

// GET / - Retrieve all buildings from MySQL
router.get('/', (req: Request, res: Response) => {
  connection.query('SELECT * FROM buildings', (err: unknown, results: RowDataPacket[]) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// POST / - Create a new building in MySQL
router.post('/', (req: Request, res: Response) => {
  const { name, temperature, location, status } = req.body;
  const query = 'INSERT INTO buildings (name, temperature, location, status) VALUES (?, ?, ?, ?)';

  connection.query(query, [name, temperature, location, status], (err: unknown, results: any) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({
      id: results.insertId,
      name,
      temperature,
      location,
      status,
    });
  });
});

// PUT /:id - Update an existing building in MySQL
router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, temperature, location, status } = req.body;
  const query = 'UPDATE buildings SET name = ?, temperature = ?, location = ?, status = ? WHERE id = ?';

  connection.query(query, [name, temperature, location, status, id], (err: unknown, results: any) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Building not found' });
    }
    res.json({ id, name, temperature, location, status });
  });
});

// DELETE /:id - Delete a building from MySQL
router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM buildings WHERE id = ?';

  connection.query(query, [id], (err: unknown, results: any) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Building not found' });
    }
    res.json({ message: `Building with id ${id} deleted` });
  });
});

// PATCH /:id/command - Update building status or temperature
router.patch('/:id/command', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { status, temperature } = req.body;

  // Build the query dynamically based on what is provided
  const updates: string[] = [];
  const values: any[] = [];

  if (status !== undefined) {
    updates.push('status = ?');
    values.push(status);
  }
  if (temperature !== undefined) {
    updates.push('temperature = ?');
    values.push(temperature);
  }
  values.push(id); // ID is always the last value

  const query = `UPDATE buildings SET ${updates.join(', ')} WHERE id = ?`;

  connection.query(query, values, (err: unknown, results: any) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Building not found' });
    }
    res.json({ message: `Building with id ${id} updated` });
  });
});


export default router;
