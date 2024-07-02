import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Employeeup() {

    const [employee, setEmployee] = useState({});

    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7227/api/Emp/" + id)
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
            }
            ).catch((e)=>console.log(e));
    }, [id]);

    const handleChange = (event) => {
        const name = event.target.name;

        const value = event.target.value;

        setEmployee(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);
         
        fetch("https://localhost:7227/api/Emp/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })

        event.preventDefault();
        navigate('/');
       
    }

    
        return (
                <form onSubmit={handleSubmit}>
                    <label>Id:</label>
                    <input
                        type="text"
                        name="memberId"
                        value={employee?.memberId ?? ""}
                        disabled={true}
                        onChange={handleChange}
                    />
                    <br />            <label>firstName:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={employee?.firstName ?? ""}
                        onChange={handleChange}
                    />
                    <br />            <label>lastName:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee?.lastName || ""}
                        onChange={handleChange}
                    />
                    <br />            <label>address:</label>
                    <input
                        type="text"
                        name="address"
                        value={employee?.address || ""}
                        onChange={handleChange}
                    />
                    <br />      
                               <input type="submit" />
                </form>
            );
        } export default Employeeup;
        
        
        
