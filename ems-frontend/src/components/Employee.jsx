import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getAllDepartments } from '../services/departmentService';
import { createEmployee, getEmployee, updateEmployee } from '../services/employeeService';

const Employee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [departments, setDepartments] = useState([]);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getAllDepartments().then(response => {
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        if (id) {
            getEmployee(id).then(response => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setDepartmentId(response.data.departmentId);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [id]);

    const handleFirstName = (event) => setFirstName(event.target.value);

    const handleLastName = (event) => setLastName(event.target.value);

    const handleEmail = (event) => setEmail(event.target.value);

    const saveEmployee = (event) => {
        event.preventDefault();
        console.log(errors);
        if (validateForm()) {
            const payload = { firstName, lastName, email, departmentId };
            if (id) {
                updateEmployee(id, payload).then(response => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => { 
                    console.log(error);
                });
            } else {
                createEmployee(payload).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.log(error);
                });
            }
           
        }
    }

    const validateForm = () => {
        let valid = true;
        const errorCopy = { ...errors};
        if (firstName.trim()) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = 'First name is required';
            valid = false;
        }
        if (lastName.trim()) {
            errorCopy.lastName = '';
        } else {
            errorCopy.lastName = 'Last name is required';
            valid = false;
        }
        if (email.trim()) {
            errorCopy.email = '';
        } else {
            errorCopy.email = 'Email is required';
            valid = false;
        }
        if (departmentId) {
            errorCopy.department = '';
        } else {
            errorCopy.department = 'Select Department';
            valid = false;
        }
        setErrors(errorCopy);
        return valid;
    };

    const pageTitle = () => {
        return id ? 'Update Employee' : 'Add Employee';
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
                                <label className="form-label">First Name:</label>
                                <input 
                                    className={`form-control ${errors.firstName ? 'is-invalid' : '' }`}
                                    name="firstName"
                                    placeholder="Enter Employee First Name"
                                    type="text"
                                    value={firstName}
                                    onChange={handleFirstName}
                                />
                                { errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input 
                                    className={`form-control ${errors.lastName ? 'is-invalid' : '' }`}
                                    name="lastName"
                                    placeholder="Enter Employee Last Name"
                                    type="text"
                                    value={lastName}
                                    onChange={handleLastName}
                                />
                                { errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input 
                                    className={`form-control ${errors.email ? 'is-invalid' : '' }`}
                                    name="email"
                                    placeholder="Enter Employee Email"
                                    type="text"
                                    value={email}
                                    onChange={handleEmail}
                                />
                                { errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Select Department:</label>
                                <select 
                                    className={`form-control ${errors.department ? 'is-invalid' : '' }`}
                                    value={departmentId}
                                    onChange={(event) => setDepartmentId(event.target.value)}
                                >
                                    <option value="Select Department">Select Department</option>
                                    {
                                        departments.map(department => (
                                            <option key={department.id} value={department.id}>{department.departmentName}</option>
                                        ))
                                    }
                                </select>
                                { errors.department && <div className="invalid-feedback">{errors.department}</div>}
                            </div>
                            <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;