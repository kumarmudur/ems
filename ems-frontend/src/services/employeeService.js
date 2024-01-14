import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/employees';

export const getAllEmployees = () => axios.get(BASE_URL);

export const getEmployee = id => axios.get(`${BASE_URL}/${id}`);

export const createEmployee = (payload) => axios.post(BASE_URL, payload);

export const updateEmployee = (id, payload) => axios.put(`${BASE_URL}/${id}`, payload);

export const deleteEmployee = id => axios.delete(`${BASE_URL}/${id}`);
