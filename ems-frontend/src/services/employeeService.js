import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/employees';

export const getAllEmployees = () => axios.get(BASE_URL);

export const createEmployee = (payload) => axios.post(BASE_URL, payload);

export const getEmployee = (id) => axios.get(`${BASE_URL}/${id}`);
