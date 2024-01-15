import { useState } from "react";

const DepartmentList = () => {
    const testData = [
        {
            "id": 1,
            "departmentName": "R&D",
            "departmentDescription": "Research and Development Department"
        },
        {
            "id": 2,
            "departmentName": "Platform",
            "departmentDescription": "Platform Department"
        },
        {
            "id": 3,
            "departmentName": "Finance",
            "departmentDescription": "Finance Department"
        }
    ]
    const [departments, setDepartments] = useState(testData);

    return (
        <div className="container">
            <h2 className="text-center">List of Departments</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Department Id</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(({id, departmentName, departmentDescription}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{departmentName}</td>
                                <td>{departmentDescription}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DepartmentList;