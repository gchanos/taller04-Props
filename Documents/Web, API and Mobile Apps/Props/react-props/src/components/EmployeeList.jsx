import React from "react";
import Employee from "./Employee";

class EmployeeList extends React.Component {

    render() {
        const employees = [
            {
                name: 'Harley',
                position: 'Manager',
            },
            {
                name: 'Ronald',
                position: 'CEO',
            },
            {
                name: 'Josue',
                position: 'Salesman',
            },
        ];

        return (
            <table>
                <thead>
                    <tr>
                        <th>🧑 Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map( emp => (
                        <Employee name={emp.name} position={emp.position} />
                    ))}
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;