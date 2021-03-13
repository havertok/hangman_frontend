import React, {useState} from 'react';
import httpServ from '../services/httpServ.js'

//If user checks register, then we post to backend and check if username exists already
function Login(){
    const[register, setRegister] = useState(false);
    const[token, setToken] = useState(); //We will need to set token via contextAPI

    return (
        <div className='generic-wrapper'v>
            <h1>LOGIN PAGE</h1>
            <label>
                <input 
                    type='checkbox'
                    name='registerCheck'
                    checked={register}
                    onChange={e => setRegister(!register)}/>
                    <span className='checkable'>Register?</span>
            </label>
            <form style={{maxWidth: '30em'}}>
                <label>
                    <span>Username:</span>
                    <input type='text'/>
                </label>
                <label>
                    <span>Password</span>
                    <input type='password'/>
                </label>
                <label>
                    <span>Email</span>
                    <input type='email'/>
                </label>
            </form>
        </div>
    );
}

export default Login;