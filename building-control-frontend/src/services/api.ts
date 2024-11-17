import axios from 'axios';
import { Building } from '../types/types';

const api = axios.create({
  baseURL: 'http://localhost:3001'  // Update this URL if your backend is hosted elsewhere
});

export const fetchBuildings = async (): Promise<Building[]> => {
  const response = await api.get<Building[]>('/buildings');
  return response.data;
};

export const createBuilding = async (building: Omit<Building, 'id'>): Promise<Building> => {
  const response = await api.post<Building>('/buildings', building);
  return response.data;
};

export const updateBuilding = async (id: number, building: Partial<Building>): Promise<Building> => {
  const response = await api.put<Building>(`/buildings/${id}`, building);
  return response.data;
};

export const deleteBuilding = async (id: number): Promise<void> => {
  await api.delete(`/buildings/${id}`);
};
