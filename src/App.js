import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar.js';
import PuzzleGrid from './components/PuzzleGrid.js';
import { sendGetAllRequest } from './services/httpServ.js';
import './App.css';
import SinglePuzzle from './components/SinglePuzzle.js';

function App() {

  const [isLoading, setLoading] = useState(true); //data needs to be fetched before render
  const [puzzles, setPuzzles] = useState([]);
  const [navState, setNavState] = useState('Home');//The default landing page is a grid of puzzles (i.e. home)
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);// no puzzle will have neg ID

  const testUrl = 'testpuzzles.json';
  const prodUrl = 'localhost:8080/puzzles'

  const gridContStyle = {paddingLeft: 10, justifyItems: 'center', alignItems: 'center',}

  useEffect(() => {
    //I just wanted to play the loading animation for a bit, hence the timeout
    setTimeout (() => {
      sendGetAllRequest(testUrl).then((resp) => {
        setPuzzles(resp);
        setLoading(false);
      });
    }, 2000)
  }, []);

  function navClick(value) {
    setNavState(value); //returns navbuttons values: Home, New, Login
  };

  //Gets the puzzle id and then uses getPuzz below to set actual puzzle object
  function puzzleIdSelect(value){
    getPuzzleFromState(value);
  };

  //Get's local copy of puzzle object
  function getPuzzleFromState(value){
    if(value < 0){
      setSelectedPuzzle(null);
      return null;
    }
    puzzles.forEach(puzz => {
      if(puzz.id == value){
        setSelectedPuzzle(puzz);
      }
    });
  }

  if (isLoading || !puzzles){
    return (
      <div>
        <Navbar buttonFunct={navClick} navVal = {navState}/>
        <div className='Loading'>
          <h2>Loading...</h2>
          <img style={{animation: `load-spin 3s linear infinite`}} src={'Cosmati_Loading_BIG.png'} alt="img"/>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar buttonFunct={navClick} navVal = {navState}/>
      <SinglePuzzle selectFunct={puzzleIdSelect} puzzle={selectedPuzzle}/>
      <div className ='flex' style={gridContStyle}>
        <PuzzleGrid selectFunct={puzzleIdSelect} props={puzzles}/>
      </div>
    </div>
  );
}

export default App;
