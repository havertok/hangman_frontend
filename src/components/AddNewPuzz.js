import React, {useEffect, useState} from 'react';
import {testAuthGet} from '../services/httpServ.js';
import usePuzzleForm from '../hooks/usePuzzleForm.js';
import {sendPostSinglePuzzle} from '../services/httpServ.js';

function AddNewPuzz(){

    const submitForm = () =>{
        console.log(`Puzzle ${inputs.hiddenWord} generated!`)
        let prom = sendPostSinglePuzzle(addPuzzleUrl, inputs); 
    }

    const [response, setResponse] = useState();
    const [isLoading, setLoading] = useState(true); //data needs to be fetched before render
    const {inputs, handleInputChange, handleSubmit} = usePuzzleForm(submitForm);
    const addPuzzleUrl = 'http://localhost:8080/puzzles/add'

    useEffect(() => {
        testAuth();
    }, [])
    
    function testAuth(){
        setLoading(true);
        setTimeout(() => {
          testAuthGet('http://localhost:8080/puzzles/testAuth').then((resp) => {
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
    //Eventually the backend should check the submitted word against a dictionary (planning on flask/python) and return
    //a bool or message to indicate the status of the new puzzle (e.g. if the same word exists and is not solved then
    //the add fails since it's a duplicate)
    return (
        <div>
            <h1 className='flex'>ADD PUZZLE PAGE</h1>
            <form onSubmit={handleSubmit}>
                <label>HiddenWord</label>
                <input type='text' name='hiddenWord' onChange={handleInputChange} value={inputs.hiddenWord}></input>
                <div className='button-div'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddNewPuzz;