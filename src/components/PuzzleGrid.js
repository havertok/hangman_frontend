import React from 'react';
import PuzzleCard from './PuzzleCard';

const PuzzleGrid = ({props, selectFunct}) => {
    const cardComponent = props.map((data, i) => {
        return <PuzzleCard key={data.id} id={data.id} hiddenWord={data.hiddenWord} 
            guessesTaken={data.guessesTaken} guessedLetters={data.guessedLetters} 
            selectFunct={selectFunct}/>
    });

    return (
        <div className='Puzzles-Grid flex grow two three-600'>
            {cardComponent}
        </div>
    );
}

export default PuzzleGrid;