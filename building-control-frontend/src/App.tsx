import React, { useState } from 'react';
import BuildingList from './components/BuildingList';
import BuildingForm from './components/BuildingForm';
import EditBuildingForm from './components/EditBuildingForm';
import { Building } from './types/types';

const App: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [editingBuilding, setEditingBuilding] = useState<Building | null>(null);

  const addBuildingToList = (newBuilding: Building) => {
    setBuildings((prevBuildings) => [...prevBuildings, newBuilding]);
  };

  const updateBuildingInList = (updatedBuilding: Building) => {
    setBuildings((prevBuildings) =>
      prevBuildings.map((b) => (b.id === updatedBuilding.id ? updatedBuilding : b))
    );

    const handleBuildingAdded = (newBuilding: Building) => {
      setBuildings((prevBuildings) => [...prevBuildings, newBuilding]); // Add the new building with ID
    };
    
    setEditingBuilding(null);
  };

  return (
    <div>
      <h1>Building Control System</h1>
      <BuildingForm onBuildingAdded={addBuildingToList} />
      {editingBuilding ? (
        <EditBuildingForm
          building={editingBuilding}
          onBuildingUpdated={updateBuildingInList}
          onCancel={() => setEditingBuilding(null)}
        />
      ) : (
        <BuildingList buildings={buildings} setBuildings={setBuildings} onEdit={setEditingBuilding} />
      )}
    </div>
  );
};

export default App;
