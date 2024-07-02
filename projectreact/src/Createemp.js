

import { useState} from "react";
import { useNavigate} from "react-router-dom"
export default function Createemp() {
    const [employee, setEmployee] = useState({});
     let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(val => ({ ...val, [name]: value }))
    }
    const handleSubmit = (event) => {

        let demo = JSON.stringify(employee);
      
        fetch("https://localhost:7227/api/Emp", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })

        event.preventDefault();

        navigate('/');      }

            return (
                    <form onSubmit={handleSubmit}>
                        <label>firstName:</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                        />
                        <br /><label>lastName:</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                        />
                        <br /><label>address:</label>
                        <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                        />
                        <br />   
                        <input type="submit" />
                    </form>
                );
            }
            