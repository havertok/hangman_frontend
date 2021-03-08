import React from 'react';
import HangmanDisplay from './HangmanDisplay';
import httpServ from '../services/httpServ.js';

//This will handle a single game (modal maybe?) and allow input for guessing letters
//We need to call selectFunct on modal close to reset ID to -1
function SinglePuzzle({selectFunct, puzzle}){

    function letter(){

    }

    if(!puzzle || puzzle.id < 0){
        return null;
    } else {
        return (
            <div className='modal'>
                <input id='modal_1' type='checkbox' />
                <header>
                    <h3>Guess a Letter!</h3>
                    <label for='modal_1' className='close'>&times;</label>
                </header>
                <HangmanDisplay guessesTaken={puzzle.guessesTaken} guessedLetters={puzzle.guessedLetters} hiddenWord={puzzle.hiddenWord}/>
            </div>
        );
    }
}

export default SinglePuzzle;