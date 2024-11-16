"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// In-memory storage for buildings
let buildings = [];
let nextId = 1;
// GET / - Retrieve all buildings
router.get('/', (req, res) => {
    res.json(buildings);
});
// POST / - Create a new building
router.post('/', (req, res) => {
    const { name, temperature, location, status } = req.body;
    const newBuilding = {
        id: nextId++,
        name,
        temperature,
        location,
        status
    };
    buildings.push(newBuilding);
    res.status(201).json(newBuilding);
});
// PUT /:id - Update an existing building
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, temperature, location, status } = req.body;
    const buildingIndex = buildings.findIndex(b => b.id === id);
    if (buildingIndex === -1) {
        return res.status(404).json({ error: 'Building not found' });
    }
    buildings[buildingIndex] = Object.assign(Object.assign({}, buildings[buildingIndex]), { name, temperature, location, status });
    res.json(buildings[buildingIndex]);
});
// DELETE /:id - Delete a building
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const buildingIndex = buildings.findIndex(b => b.id === id);
    if (buildingIndex === -1) {
        return res.status(404).json({ error: 'Building not found' });
    }
    const deletedBuilding = buildings.splice(buildingIndex, 1);
    res.json(deletedBuilding[0]);
});
exports.default = router;
