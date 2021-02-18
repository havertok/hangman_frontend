import React from 'react';

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
            {guessedLetters.map((letter)=> <> {letter}, </>)}
        </p>
      </div>
    </div>
  );
}

export default PuzzleCard;