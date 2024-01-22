import axios from "axios";

import { EMPLOYEE_URL } from '../constants/api';

export const getAllEmployees = () => axios.get(EMPLOYEE_URL);

export const getEmployee = id => axios.get(`${EMPLOYEE_URL}/${id}`);

export const createEmployee = (payload) => axios.post(EMPLOYEE_URL, payload);

export const updateEmployee = (id, payload) => axios.put(`${EMPLOYEE_URL}/${id}`, payload);

export const deleteEmployee = id => axios.delete(`${EMPLOYEE_URL}/${id}`);
