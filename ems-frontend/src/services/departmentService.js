import axios from "axios";

import { DEPARTMENT_URL } from '../constants/api';

export const getAllDepartments = () => axios.get(DEPARTMENT_URL);

export const getDepartment = id => axios.get(`${DEPARTMENT_URL}/${id}`);

export const createDepartment = (payload) => axios.post(DEPARTMENT_URL, payload);

export const updateDepartment = (id, payload) => axios.put(`${DEPARTMENT_URL}/${id}`, payload);

export const deleteDepartment = id => axios.delete(`${DEPARTMENT_URL}/${id}`);