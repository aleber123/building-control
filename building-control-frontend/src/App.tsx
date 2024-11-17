import React, { useState, useEffect } from 'react';
import BuildingForm from './components/BuildingForm';
import BuildingList from './components/BuildingList';
import EditBuildingForm from './components/EditBuildingForm';
import { Building } from './types/types';
import { fetchBuildings } from './services/api';

const App: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [editingBuilding, setEditingBuilding] = useState<Building | null>(null);

  const loadBuildings = async () => {
    try {
      const fetchedBuildings = await fetchBuildings();
      setBuildings(fetchedBuildings);
    } catch (error) {
      console.error('Error fetching buildings:', error);
    }
  };

  useEffect(() => {
    loadBuildings();
  }, []); // Fetch buildings when component mounts

  const addBuildingToList = (newBuilding: Building) => {
    setBuildings((prevBuildings) => [...prevBuildings, newBuilding]);
    loadBuildings(); // Refresh the list after adding
  };

  const updateBuildingInList = (updatedBuilding: Building) => {
    setBuildings((prevBuildings) =>
      prevBuildings.map((b) => (b.id === updatedBuilding.id ? updatedBuilding : b))
    );
    setEditingBuilding(null);
    loadBuildings(); // Refresh the list after updating
  };

  return (
    <div className="app-container">
      <h1>Building Control System</h1>
      <BuildingForm onBuildingAdded={addBuildingToList} />
      {editingBuilding ? (
        <EditBuildingForm
          building={editingBuilding}
          onBuildingUpdated={updateBuildingInList}
          onCancel={() => setEditingBuilding(null)}
        />
      ) : (
        <BuildingList
          buildings={buildings}
          setBuildings={setBuildings}
          onEdit={setEditingBuilding}
        />
      )}
    </div>
  );
};

export default App;
