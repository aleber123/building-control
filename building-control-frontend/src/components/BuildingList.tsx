import React, { useState } from 'react';
import { updateBuilding, deleteBuilding } from '../services/api';
import { Building } from '../types/types';

interface BuildingListProps {
  buildings: Building[];
  setBuildings: React.Dispatch<React.SetStateAction<Building[]>>;
  onEdit: (building: Building) => void;
}

const BuildingList: React.FC<BuildingListProps> = ({ buildings, setBuildings, onEdit }) => {
  const [temperatureInputs, setTemperatureInputs] = useState<Record<number, number>>({});

  const handleDelete = async (id: number) => {
    await deleteBuilding(id);
    setBuildings(buildings.filter((building) => building.id !== id));
  };

  const handleTemperatureUpdate = async (building: Building) => {
    const newTemperature = temperatureInputs[building.id] || building.temperature;
    const updatedBuilding = { ...building, temperature: newTemperature };
    await updateBuilding(building.id, updatedBuilding);
    setBuildings(buildings.map((b) => (b.id === building.id ? updatedBuilding : b)));
    setTemperatureInputs((prev) => ({ ...prev, [building.id]: newTemperature }));
  };

  const handleStatusToggle = async (building: Building) => {
    const updatedStatus = building.status === 'Active' ? 'Inactive' : 'Active';
    const updatedBuilding = { ...building, status: updatedStatus };
    await updateBuilding(building.id, updatedBuilding);
    setBuildings(buildings.map((b) => (b.id === building.id ? updatedBuilding : b)));
  };

  return (
    <div className="building-list">
      {buildings.map((building) => (
        <div key={building.id} className="building-card">
          <h3>{building.name}</h3>
          <p>Location: {building.location}</p>
          <p>Current Temperature: {building.temperature}°C</p>
          <div className="temperature-controls">
            <input
              type="number"
              value={temperatureInputs[building.id] ?? building.temperature}
              onChange={(e) =>
                setTemperatureInputs((prev) => ({
                  ...prev,
                  [building.id]: Number(e.target.value),
                }))
              }
              placeholder="New Temperature"
            />
            <button
              className="btn-update"
              onClick={() => handleTemperatureUpdate(building)}
            >
              Set Temp
            </button>
          </div>
          <div className="switch-container">
            <div className="status-box">{building.status}</div>
            <div className="toggle-box">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={building.status === 'Active'}
                  onChange={() => handleStatusToggle(building)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="button-group">
            <button className="btn-primary" onClick={() => onEdit(building)}>
              Edit
            </button>
            <button className="btn-secondary" onClick={() => handleDelete(building.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildingList;
