import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/departments';

export const getAllDepartments = () => axios.get(BASE_URL);
