import React, {useEffect, useState} from 'react';
import useSignUpForm from '../hooks/useSignUpForm.js'
import { sendPostLogin } from '../services/httpServ.js';
import Registration from './Registration.js';

//If user checks register, then we post to backend and check if username exists already
function Login(){

    //Need to intialize function before it can be sent to custom hook
    const submitForm = () =>{
        console.log(`User: ${inputs.username} generated!`)
        let prom = sendPostLogin(loginUrl, inputs); 
    }

    const[register, setRegister] = useState(false);
    //Our custom hook provies state/event handling as well as state maintenence
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(submitForm);
    const loginUrl = 'http://localhost:8080/authenticate'; //New controller (JwtAuthenticationController) for java web tokens

    function handleRegisterButton(){
        setRegister(true)
    }

    function handleRegistrationClose() {
        setRegister(false);
    }

    return (
        <div className='generic-wrapper'>
            <h1>LOGIN PAGE</h1>
            { register ? <Registration handleRegistrationClose={handleRegistrationClose} /> : <></> }
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' name='username' onChange={handleInputChange} value={inputs.username}></input>
                <label>Password</label>
                <input type='password' name='password' onChange={handleInputChange} value={inputs.password}></input>
                <div className='button-div'>
                    <button type='submit'>Submit</button><button type='button' onClick={handleRegisterButton}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Login;