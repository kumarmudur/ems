import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllEmployees } from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
      getAllEmployees()
      .then(response => setEmployees(response.data))
      .catch(error => console.log(error));
    }, []);

    const addNewEmployee = () => {
        navigation('/add-employee');
    };

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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;