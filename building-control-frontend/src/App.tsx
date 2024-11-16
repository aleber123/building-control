import React, { useState } from 'react';
import BuildingForm from './components/BuildingForm';
import BuildingList from './components/BuildingList';
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
    setEditingBuilding(null);
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
          onEdit={setEditingBuilding} // Pass the required onEdit prop
        />
      )}
    </div>
  );
};

export default App;
