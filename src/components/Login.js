import React, {useEffect, useState} from 'react';
import useSignUpForm from '../hooks/useSignUpForm.js'
import { sendPostLogin, sendPostNewUser } from '../services/httpServ.js';

//If user checks register, then we post to backend and check if username exists already
function Login(){

    //Need to intialize function before it can be sent to custom hook
    const submitForm = () =>{
        console.log(`User: ${inputs.username} generated!`)
        let prom;
        if(register) {
            prom = sendPostNewUser(url, inputs);
        } else {
            prom = sendPostLogin(url, inputs);
            
        }
    }

    const[register, setRegister] = useState(false);
    const[userDetails, setUserDetails] = useState();
    const[url, setUrl] = useState();
    const[token, setToken] = useState(); //We will need to set token via contextAPI
    //Our custom hook provies state/event handling as well as state maintenence
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(submitForm);

    const registrationUrl = 'http://localhost:8080/register';
    const loginUrl = 'http://localhost:8080/authenticate'; //New controller (JwtAuthenticationController) for java web tokens

    useEffect(() => {
        setUserDetails({username: '', password: '', email: ''}); //default user is empty
        setUrl(loginUrl);
    }, []);

    useEffect(()=>{
        if(register){
            setUrl(registrationUrl);
        } else {
            setUrl(loginUrl); //we're going to have to map it on the backend anyway
        }
    }, [register]);

    return (
        <div className='generic-wrapper'>
            <h1>LOGIN PAGE</h1>
            <label>
            <input 
                type='checkbox'
                name='registerCheck'
                checked={register}
                onChange={e => setRegister(!register)}/>
                <span className='checkable'>Register?</span></label>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' name='username' onChange={handleInputChange} value={inputs.username}></input>
                <label>Password</label>
                <input type='password' name='password' onChange={handleInputChange} value={inputs.password}></input>
                {register == true &&
                    <div>
                        <label>Re-enter Password</label>
                        <input type='password' name='matchingPassword' onChange={handleInputChange} value={inputs.matchingPassword}></input>
                        <label>Email</label>
                        <input type='text' name='email' onChange={handleInputChange} value={inputs.email}></input>
                    </div>
                }
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;