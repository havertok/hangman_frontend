import React, {useEffect, useState} from 'react';
import HangmanDisplay from './HangmanDisplay';
import httpServ from '../services/httpServ.js';

//This will handle a single game (modal maybe?) and allow input for guessing letters
//We need to call selectFunct on modal close to reset ID to -1
function SinglePuzzle({selectFunct, puzzle}){
    const [currentPuzzle, setCurrentPuzzle] = useState(puzzle);
    console.log('SinglePuzz: '+puzzle);
    if(puzzle) {console.log(puzzle.id); }

    function guessLetter(letter){
        console.log(letter);
    }

//<HangmanDisplay guessesTaken={puzzle.guessesTaken} guessedLetters={puzzle.guessedLetters} hiddenWord={puzzle.hiddenWord}/>

    if(!puzzle || puzzle.id < 0){
        return null;
    } else {
        return (
            <div className="backdrop">
                <div className="modal">
                    <div className='modal-pad' style={{padding: 10}}>
                    <h2>Guess a Letter!</h2>
                    <HangmanDisplay guessesTaken={puzzle.guessesTaken} guessedLetters={puzzle.guessedLetters} hiddenWord={puzzle.hiddenWord}/>
    
                    <div className="footer">
                        <button onClick={() => selectFunct(-1)}>
                        Close
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePuzzle;