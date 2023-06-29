import React from 'react'
import { useState } from 'react'
import { useTheme } from './ThemeContext'
import FormInput from './FormInput';
import "./forminput.css";

export default function Reservation() {
    const darkTheme = useTheme()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC' ,
        color: darkTheme ? '#CCC' : '#333',
    }

    const [values, setValues] = useState({
        username:"",
        email:"",
        number:"",
        date:"",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Name",
            errorMessage: "Username should be 3-16 characters and shouldn't any special character",
            label: "Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be  a  valid email address!",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "number",
            type: "text",
            placeholder: "Phone Number",
            errorMessage: "It should be a valid phone number",
            label: "Phone Number",
            pattern:"^[0-9]{9}$",
            required: true

        },
        {
            id: 4,
            name: "date",
            type: "date",
            placeholder: "Pick Date",
            errorMessage: "",
            label: "Pick Date",
            required: true
        }
    ]
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }

    const onChange = (e)=>{
        setValues({...values,[e.target.name]: e.target.value})
    }
    console.log(values);
    return (
        <div style={themeStyles}>
            <h1>Make an appointment</h1>
            <form onSubmit={handleSubmit} >
                {inputs.map((input)=>(
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button className="form-button">Submit</button>
            </form>
            <hr />
        </div>
            )
}