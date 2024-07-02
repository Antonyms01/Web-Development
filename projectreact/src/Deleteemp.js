import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
export function Employeedel() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    const navigate= useNavigate();
    useEffect(() => {
        fetch("https://localhost:7227/api/Emp/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    const handeldel = (event) => {
        fetch("https://localhost:7227/api/Emp/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result)
            }); 
 event.preventDefault();
            navigate('/');
    }

        return (
                <div>
                    <h1 style={{ color:'red' }}>Are you sure</h1>
                    <label>Id:</label>
                    {employee.memberId}<br />
                    <label>firstName:</label>
                    {employee.firstName}<br />
                    <label>lastName:</label>
                    {employee.lastName}<br />
                    <label>address:</label>
                    {employee.address}
                    <form onSubmit={handeldel}>
                        <input type="submit" />
                    </form>
                </div>
            );
        }
        export default Employeedel;
        
        