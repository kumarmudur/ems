import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { createDepartment } from '../services/departmentService';

const Department = () => {
    const [departmentName, setDepartmentName] = useState('');
    const [departmentDescription, setDepartmentDescription] = useState('');
    const navigator = useNavigate();
    const {id} = useParams();

    const handleDepartmentName = (event) => setDepartmentName(event.target.value);

    const handleDepartmentDescription = (event) => setDepartmentDescription(event.target.value);

    const saveDepartment = (event) => {
        event.preventDefault();
        const department = { departmentName, departmentDescription };
        console.log('Department', department);
        createDepartment(department).then(response => {
            console.log('response', response.data);
            navigator('/departments');
        }).catch(error => {
            console.log('error', error);
        });
    }

    const pageTitle = () => {
        return id ? 'Update Department' : 'Add Department';
    }

    return (
         <div className="container">
            <br />
            <div className="row mb-2">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">{pageTitle()}</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Department Name:</label>
                                <input 
                                    className="form-control" 
                                    name="departmentName"
                                    placeholder="Enter Department Name"
                                    type="text"
                                    value={departmentName} 
                                    onChange={handleDepartmentName}
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Department Description:</label>
                                <input 
                                    className="form-control" 
                                    name="departmentDescription"
                                    placeholder="Enter Department Description"
                                    type="text"
                                    value={departmentDescription} 
                                    onChange={handleDepartmentDescription}
                                />
                            </div>
                            <button className="btn btn-success" onClick={saveDepartment}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;