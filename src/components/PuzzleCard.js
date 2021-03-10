import React from 'react';
import HangmanDisplay from './HangmanDisplay';

//React will warn about guessedLetters not having a key; you need to explicitly use React.Fragment to add keys to fragments
//We don't really need a key for the guessed letters (not here anyway, this array won't be modified) but why not?
//Also NO state is required here, We DO NOT use PuzzleCard to actually play a game, that is SinglePuzzle
const PuzzleCard = ({ id, hiddenWord, guessesTaken, guessedLetters, selectFunct }) => {

  //Just shut up about unique keys already
  function getKey(letter){
    let keyString = id.toString + letter;
  }

  return (
    <div className = 'card pseudo button' onClick={e => selectFunct(id)} >
        <HangmanDisplay guessesTaken={guessesTaken} guessedLetters={guessedLetters} hiddenWord={hiddenWord}/>
      <h1>ID: {id} </h1>
      <div>
        <h2>Word: {hiddenWord}</h2>
        <h4>Guesses Taken: {guessesTaken}</h4>
        <p>
            Guessed Letters:
            {guessedLetters.map((letter)=> <React.Fragment key={getKey(letter)}> {letter}  </React.Fragment>)}
        </p>
      </div>
    </div>
  );
}

export default PuzzleCard;