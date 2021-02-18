import React, {useEffect, useState} from 'react';
import PuzzleGrid from './components/PuzzleGrid.js';

import './App.css';

function App() {
  /*constructor() {
    super();
    this.state = {
      puzzles: [],
    };
  }*/

  //React state hook
  const [puzzles, setPuzzles] = useState([]);

  //The function that will fetch from, for now, a local Json file
  const getData=()=>{
    fetch('testpuzzles.json', {headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }})
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(jsonResp){
      console.log(jsonResp);
      setPuzzles(jsonResp)
    });
  }

  //
  useEffect(()=>{
    getData()
  },[])

  /*componentDidMount() {
    this.setState({ puzzles : testpuzzles});
    console.log(this.state.puzzles.toString());
  }*/

  //setPuzzles(testpuzzles =>  testpuzzles);

  //const testpuzzles = testpuzzles;

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
