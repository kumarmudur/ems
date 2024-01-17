import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { deleteDepartment, getAllDepartments } from '../services/departmentService';

const DepartmentList = () => {
    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllDepartmentsData();
    }, []);

    const getAllDepartmentsData = () => {
        getAllDepartments()
        .then(response => setDepartments(response.data))
        .catch(error => console.log(error));
    }

    const updateEmployee = id => {
        navigator(`/edit-department/${id}`);
    }

    const removeEmployee = id => {
        deleteDepartment(id).then(() => {
            getAllDepartmentsData();
        }).catch(error => console.log(error));
     }

    return (
        <div className="container">
            <h2 className="text-center">List of Departments</h2>
            <Link to="/add-department" className="btn btn-primary mb-2">Add Department</Link>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(({id, departmentName, departmentDescription}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{departmentName}</td>
                                <td>{departmentDescription}</td>
                                <td>
                                    <button 
                                        className="btn btn-info"
                                        onClick={() => updateEmployee(id)}
                                        >Update
                                    </button>
                                    <button 
                                       className="btn btn-danger"
                                       onClick={() => removeEmployee(id)}
                                       style={{marginLeft: '10px'}}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DepartmentList;