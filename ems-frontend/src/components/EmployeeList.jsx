import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteEmployee, getAllEmployees } from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployeesData();
    }, []);

    const getAllEmployeesData = () => {
        getAllEmployees()
        .then(response => setEmployees(response.data))
        .catch(error => console.log(error));
    }

    const addNewEmployee = () => {
        navigator('/add-employee');
    };

    const updateEmployee = id => {
        navigator(`/edit-employee/${id}`);
    }

    const removeEmployee = id => {
       deleteEmployee(id).then(() => {
           getAllEmployeesData();
       }).catch(error => console.log(error));
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Employee</h2>
            <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee FirsName</th>
                        <th>Employee LastName</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(({id, firstName, lastName, email}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
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

export default EmployeeList;