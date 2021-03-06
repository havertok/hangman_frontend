import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar.js';
import PuzzleGrid from './components/PuzzleGrid.js';
import { sendGetAllRequest } from './services/httpServ.js';
import './App.css';

function App() {

  const [isLoading, setLoading] = useState(true); //data needs to be fetched before render
  const [puzzles, setPuzzles] = useState([]);
  const [navState, setNavState] = useState('Home');//The default landing page is a grid of puzzles (i.e. home)

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

  function navClick(value) {
    setNavState(value); //returns navbuttons values: Home, New, Login
  };

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
      <div className ='flex' style={{'padding-left': '10px','justify-items': 'center', 'align-items': 'center'}}>
        <PuzzleGrid props={puzzles}/>
      </div>
    </div>
  );
}

export default App;
