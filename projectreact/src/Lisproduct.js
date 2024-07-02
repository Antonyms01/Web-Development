import React from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
function ListEmployee() {
    const [employees, setEmployee] = useState([]);
    
    const chks=sessionStorage.getItem("key");
    let navigate = useNavigate();     
    useEffect(() => {
      if(chks==="")
     {
      navigate("/");
     }},[chks,navigate])

    useEffect(() => {
        fetch("https://localhost:7227/api/Emp")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div>
            <h4><Link to="/create">Create</Link></h4>
            <h2>Employees Data...</h2>
            <table> <thead>
                <tr>
                    <th>memberId</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>address</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map(emp =>(
                        <tr key={emp.memberId}>
                            <td>{emp.memberId}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.address}</td>

     <td> <a href={'/emp/' + emp.memberId}>display</a></td>
     
     <td> <a href={'/empup/' + emp.memberId}>Edit</a></td>
                            


<td> <a href={'/empdel/' + emp.memberId}>delete</a></td>
                        </tr>
                     ))
                    }
                </tbody> </table>
        </div>
    );
}
export default ListEmployee;

