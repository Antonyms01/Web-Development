import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("https://localhost:7227/api/emp/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        
        <div><label>memberId:</label>
            {employee.memberId}<br />
            <label>fistName:</label>
            {employee.firstName}<br />
            <label>lastName:</label>
            {employee.lastName}<br />
              <label>address:</label>
            {employee.address}
        </div>
    );
}
export default Employee;

