import React, {useEffect, useState} from 'react';
import PuzzleGrid from './components/PuzzleGrid.js';
import { sendGetAllRequest } from './services/httpServ.js';
import './App.css';

function App() {

  const [isLoading, setLoading] = useState(true); //data needs to be fetched before render
  const [puzzles, setPuzzles] = useState([]);

  const testUrl = 'testpuzzles.json';
  const prodUrl = 'localhost:8080/puzzles'

  useEffect(() => {
    //I just wanted to play the loading animation for a bit, hence the timeout
    setTimeout (() => {
      sendGetAllRequest(testUrl).then((resp) => {
        setPuzzles(resp);
        setLoading(false);
      });
    }, 2000)
  }, []);

  if (isLoading || !puzzles){
    return (
      <div>
        <h2>Loading...</h2>
        <img style={{animation: `load-spin 3s linear infinite`}} src={'Cosmati_Loading_BIG.png'} alt="img"/>
      </div>
    )
  }

  return (
    <div>
      <div className = 'App'>
        <h1>H A N G M A N</h1>
      </div>
      <div>
        <PuzzleGrid props={puzzles}/>
      </div>
    </div>
  );
}

export default App;
