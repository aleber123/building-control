import React, { useEffect } from 'react';
import { fetchBuildings, deleteBuilding } from '../services/api';
import { Building } from '../types/types';

interface BuildingListProps {
  buildings: Building[];
  setBuildings: React.Dispatch<React.SetStateAction<Building[]>>;
  onEdit: (building: Building) => void;
}

const BuildingList: React.FC<BuildingListProps> = ({ buildings, setBuildings, onEdit }) => {
  useEffect(() => {
    const loadBuildings = async () => {
      const data = await fetchBuildings();
      setBuildings(data);
    };
    loadBuildings();
  }, [setBuildings]);

  const handleDelete = async (id: number) => {
    await deleteBuilding(id);
    setBuildings(buildings.filter((building) => building.id !== id));
  };

  return (
    <div>
      <h2>Buildings</h2>
      <ul>
        {buildings.map((building) => (
          <li key={building.id}>
            <h3>{building.name}</h3>
            <p>Temperature: {building.temperature}°C</p>
            <p>Location: {building.location}</p>
            <p>Status: {building.status}</p>
            <button onClick={() => onEdit(building)}>Edit</button>
            <button onClick={() => handleDelete(building.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildingList;
