import { Router, Request, Response } from 'express';
import db from '../config/database';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const router = Router();

// GET / - Retrieve all buildings
router.get('/', async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM buildings');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching buildings:', err);
    res.status(500).json({ error: 'Database error', details: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const [rows] = await db.query('SELECT * FROM buildings WHERE id = ?', [id]);
    res.json(rows);
  } catch (err) {
    console.error('Error fetching building:', err);
    res.status(500).json({ error: 'Database error', details: err });
  }
});

// POST / - Create a new building
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, temperature, location, status } = req.body;
    console.log('Creating building with data:', { name, temperature, location, status });

    const [result] = await db.query<ResultSetHeader>(
      'INSERT INTO buildings (name, temperature, location, status) VALUES (?, ?, ?, ?)',
      [name, temperature, location, status]
    );

    console.log('Building created successfully:', result);

    res.status(201).json({
      id: result.insertId,
      name,
      temperature,
      location,
      status,
    });
  } catch (err) {
    console.error('Error creating building:', err);
    res.status(500).json({ error: 'Database error', details: err });
  }
});

// PUT /:id - Update a building
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { name, temperature, location, status } = req.body;

    const [result] = await db.query<ResultSetHeader>(
      'UPDATE buildings SET name = ?, temperature = ?, location = ?, status = ? WHERE id = ?',
      [name, temperature, location, status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Building not found' });
    }

    res.json({ id, name, temperature, location, status });
  } catch (err) {
    console.error('Error updating building:', err);
    res.status(500).json({ error: 'Database error', details: err });
  }
});

// DELETE /:id - Delete a building
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const [result] = await db.query<ResultSetHeader>(
      'DELETE FROM buildings WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Building not found' });
    }

    res.json({ message: `Building with id ${id} deleted` });
  } catch (err) {
    console.error('Error deleting building:', err);
    res.status(500).json({ error: 'Database error', details: err });
  }
});

// PATCH /:id/command - Update building status or temperature
router.patch('/:id/command', async (req: Request, res: Response) => {
  try {
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

    const [result] = await db.query<ResultSetHeader>(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Building not found' });
    }

    res.json({ message: `Building with id ${id} updated` });
  } catch (err) {
    console.error('Error updating building:', err);
    res.status(500).json({ error: 'Database error', details: err });
  }
});

export default router;
