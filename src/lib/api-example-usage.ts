/**
 * Example usage of the API wrapper
 * This file shows how to use the api client in your components/services
 */

import api, { setAuthToken, clearAuthToken } from './api';

// ============================================
// Authentication Examples
// ============================================

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  
  // Store token if returned in response body
  if (response.data.token) {
    setAuthToken(response.data.token);
  }
  
  return response.data;
};

export const logout = () => {
  clearAuthToken();
  // Optionally call backend logout endpoint
  // await api.post('/auth/logout');
};

// ============================================
// Module/Resource Examples
// ============================================

export const getModules = async () => {
  const response = await api.get('/modules');
  return response.data;
};

export const getModuleById = async (id: string) => {
  const response = await api.get(`/modules/${id}`);
  return response.data;
};

export const createModule = async (data: { name: string; description: string }) => {
  const response = await api.post('/modules', data);
  return response.data;
};

export const updateModule = async (id: string, data: Partial<{ name: string; description: string }>) => {
  const response = await api.put(`/modules/${id}`, data);
  return response.data;
};

export const deleteModule = async (id: string) => {
  const response = await api.delete(`/modules/${id}`);
  return response.data;
};

// ============================================
// With React Query (recommended)
// ============================================

/*
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useModules = () => {
  return useQuery({
    queryKey: ['modules'],
    queryFn: getModules,
  });
};

export const useCreateModule = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createModule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] });
    },
  });
};
*/
