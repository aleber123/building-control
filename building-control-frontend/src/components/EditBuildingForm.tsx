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
  const [status, setStatus] = useState<'Active' | 'Inactive'>(building.status as 'Active' | 'Inactive');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBuilding = { ...building, name, temperature, location, status };
    await updateBuilding(building.id, updatedBuilding);
    onBuildingUpdated(updatedBuilding);
  };

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'Active' ? 'Inactive' : 'Active'));
  };

  return (
    <form className="edit-building-form" onSubmit={handleSubmit}>
      <h2>Edit Building</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Temperature:
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label>
        Status:
        <div className="switch-container">
          <div className="status-box">{status}</div>
          <div className="toggle-box">
            <label className="switch">
              <input
                type="checkbox"
                checked={status === 'Active'}
                onChange={toggleStatus}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </label>
      <div className="form-buttons">
        <button type="submit" className="btn-primary">Save Changes</button>
        <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditBuildingForm;
