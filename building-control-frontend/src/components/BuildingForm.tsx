import React, { useState } from 'react';
import { createBuilding } from '../services/api';
import { Building } from '../types/types';

interface BuildingFormProps {
  onBuildingAdded: (newBuilding: Building) => void;
}

const BuildingForm: React.FC<BuildingFormProps> = ({ onBuildingAdded }) => {
  const [name, setName] = useState('');
  const [temperature, setTemperature] = useState<number | ''>('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<'Active' | 'Inactive'>('Active'); // Default to 'Active'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBuilding = { name, temperature: Number(temperature), location, status };
    const savedBuilding = await createBuilding(newBuilding);
    onBuildingAdded(savedBuilding);
    setName('');
    setTemperature('');
    setLocation('');
    setStatus('Active'); // Reset to default
  };

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === 'Active' ? 'Inactive' : 'Active'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Building</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Temperature:
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.valueAsNumber)}
        />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
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
      <button type="submit" className="btn-primary">Add Building</button>
    </form>
  );
};

export default BuildingForm;
