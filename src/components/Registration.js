import React, {useEffect, useState} from 'react';
import useSignUpForm from '../hooks/useSignUpForm.js'
import { sendPostNewUser } from '../services/httpServ.js';

function Registration({handleRegistrationClose}){

    const submitForm = () =>{
        console.log(`User: ${inputs.username} generated!`)
        let prom = sendPostNewUser(registrationUrl, inputs);
    }

    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(submitForm);
    const registrationUrl = 'http://localhost:8080/register';

    function handleClose(){
        handleRegistrationClose();
    }

    return (

    <div className='backdrop'>
        <div className='modal'>
            <h1>Registraion Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' name='username' onChange={handleInputChange} value={inputs.username}></input>
                <label>Password</label>
                <input type='password' name='password' onChange={handleInputChange} value={inputs.password}></input>
                <label>Re-enter Password</label>
                <input type='password' name='matchingPassword' onChange={handleInputChange} value={inputs.matchingPassword}></input>
                <label>Email</label>
                <input type='text' name='email' onChange={handleInputChange} value={inputs.email}></input>
                <button type='submit'>Submit</button>
            </form>
            <div className="footer">
                <button onClick={() => handleClose()}> Close </button>
            </div>
        </div>
    </div>
    )
}

export default Registration;