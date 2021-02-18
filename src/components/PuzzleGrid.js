import React from 'react';
import PuzzleCard from './PuzzleCard';

const PuzzleGrid = ({props}) => {
    const cardComponent = props.map((data, i) => {
        return <PuzzleCard key={props[i].id} id={props[i].id} hiddenWord={props[i].hiddenWord} guessesTaken={props[i].guessesTaken}
        guessedLetters={props[i].guessedLetters} />
    });

    return (
        <div className='flex grow two three-600 six-1200'>
            {cardComponent}
        </div>
    );
}

export default PuzzleGrid;