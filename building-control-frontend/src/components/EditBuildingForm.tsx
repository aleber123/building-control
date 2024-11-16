import React, { useState } from 'react';
import { updateBuilding } from '../services/api';
import { Building } from '../types/types';

interface EditBuildingFormProps {
  building: Building;
  onBuildingUpdated: (updatedBuilding: Building) => void;
  onCancel: () => void;
}

const EditBuildingForm: React.FC<EditBuildingFormProps> = ({ building, onBuildingUpdated, onCancel }) => {
  const [name, setName] = useState(building.name);
  const [temperature, setTemperature] = useState(building.temperature);
  const [location, setLocation] = useState(building.location || '');
  const [status, setStatus] = useState(building.status || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBuilding = { ...building, name, temperature, location, status };
    await updateBuilding(building.id, updatedBuilding);
    onBuildingUpdated(updatedBuilding);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Building</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Temperature:
        <input type="number" value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Status:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditBuildingForm;
