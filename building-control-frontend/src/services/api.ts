import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'  // Update this URL if your backend is hosted elsewhere
});

export const fetchBuildings = async () => {
  const response = await api.get('/buildings');
  return response.data;
};

export const createBuilding = async (building: any) => {
  const response = await api.post('/buildings', building);
  return response.data;
};

export const updateBuilding = async (id: number, building: any) => {
  const response = await api.put(`/buildings/${id}`, building);
  return response.data;
};

export const deleteBuilding = async (id: number) => {
  const response = await api.delete(`/buildings/${id}`);
  return response.data;
};
