import React from 'react';

//React will warn about guessedLetters not having a key; you need to explicitly use React.Fragment to add keys to fragments
//We don't really need a key for the guessed letters (not here anyway, this array won't be modified) but why not?
const PuzzleCard = ({ id, hiddenWord, guessesTaken, guessedLetters }) => {
  return (
    <div className = 'card pseudo button'>
        <div><img src='The_fool.jpeg'></img></div>
      <h1>ID: {id} </h1>
      <div>
        <h2>Word: {hiddenWord}</h2>
        <h4>Guesses Taken: {guessesTaken}</h4>
        <p>
            Guessed Letters:
            {guessedLetters.map((letter)=> <React.Fragment key={id.toString+letter}> {letter}  </React.Fragment>)}
        </p>
      </div>
    </div>
  );
}

export default PuzzleCard;