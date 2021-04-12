import React, {useEffect, useState} from 'react';
import {testAuthGet} from '../services/httpServ.js';

function AddNewPuzz(){
    const [response, setResponse] = useState();
    const [isLoading, setLoading] = useState(true); //data needs to be fetched before render

    useEffect(() => {
        testAuth();
    }, [])
    
    function testAuth(){
        setLoading(true);
        setTimeout(() => {
          testAuthGet('http://localhost:8080/testAuth').then((resp) => {
            setResponse(resp);
            setLoading(false);
          })
        }, 4000);
    }

    if (isLoading){
        return (
            <div className='Loading'>
                <h1>ADD PUZZLE PAGE</h1>
                <h2>Loading...</h2>
                <img style={{animation: `load-spin 3s linear infinite`}} src={'Cosmati_Loading_BIG.png'} alt="img"/>
            </div>
        )
      }

    return (
        <div>
            <h1>ADD PUZZLE PAGE</h1>
            {console.log(response)}
        </div>
    );
}

export default AddNewPuzz;