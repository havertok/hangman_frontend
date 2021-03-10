import React, {useEffect, useState} from 'react';
import HangmanDisplay from './HangmanDisplay';
import httpServ, { sendPostSinglePuzzle } from '../services/httpServ.js';

//This will handle a single game (modal maybe?) and allow input for guessing letters
//We need to call selectFunct on modal close to reset ID to -1
function SinglePuzzle({selectFunct, puzzle, postUrl}){
    const [currentPuzzle, setCurrentPuzzle] = useState(null);
    const [pickedLetter, setPickedLetter] = useState('');
    const [modPuzzVal, setModPuzzVal] = useState(-1);
    
    //useState is async, so react attempts a render of HangmanDisplay BEFORE currentPuzzle is set
    //This will allow that state to "fall" in against the if !currentPuzzle check below, rendering the modal when it is set
    useEffect(()=>{
        setCurrentPuzzle(puzzle);
    });

    function guessLetter(){
        addLetterToGuessedLetters(pickedLetter);
        setPickedLetter('');
        //this value is used in APP to force a reload of all puzzles from the server
        setModPuzzVal(-2); 
    }

    //We will alow duplicate guesses
    function addLetterToGuessedLetters(letter){
        if(puzzle.guessedLetters.includes(letter)){//We guessed this letter already, don't add it
            puzzle.guessesTaken++;
        } else if(puzzle.hiddenWord.includes(letter)){ //Correct guesses don't count against us
            puzzle.guessedLetters.push(letter);
        } else { //We haven't guessed it and it's not a match: push to letters array and increment guesses taken
            puzzle.guessesTaken++;
            puzzle.guessedLetters.push(letter);
        }
        setCurrentPuzzle(puzzle);
    }

    function handleClose(){
        //If we have guessed a letter and are now closing the Modal, push the new modified puzzle to server
        if(modPuzzVal == -2){
            sendPostSinglePuzzle(postUrl, currentPuzzle);
        }
        selectFunct(modPuzzVal);
    }

    if(!currentPuzzle || !puzzle || puzzle.id < 0){
        return null;
    } else if(currentPuzzle.guessesTaken >= 7){
        return (
            <div className="backdrop">
                <div className="modal">
                    <div className='modal-pad' style={{padding: 10}}>
                        <HangmanDisplay guessesTaken={currentPuzzle.guessesTaken} guessedLetters={currentPuzzle.guessedLetters} 
                                hiddenWord={currentPuzzle.hiddenWord}/> 
                        <div className="footer">
                            <button onClick={() => handleClose()}> Close </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="backdrop">
                <div className="modal">
                    <div className='modal-pad' style={{padding: 10}}>
                    <HangmanDisplay guessesTaken={currentPuzzle.guessesTaken} guessedLetters={currentPuzzle.guessedLetters} 
                                    hiddenWord={currentPuzzle.hiddenWord}/>
                    <p>
                        {/* React complains about the key here, but it's just an array to display stuff so we don't care really */}
                        Guessed Letters:{currentPuzzle.guessedLetters.map((letter)=> <React.Fragment key={currentPuzzle.id.toString()+letter}> {letter}  </React.Fragment>)}
                    </p>
                    <div>
                        <label htmlFor='guessLetter'>Guess a Letter!</label>
                        <input type='text' name='guessLetter' value={pickedLetter} onChange={e => setPickedLetter(e.target.value)}
                            maxLength = {1}/>
                        <button onClick={guessLetter}>Submit</button>
                    </div>
                    <div className="footer">
                        <button onClick={() => handleClose()}> Close </button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePuzzle;