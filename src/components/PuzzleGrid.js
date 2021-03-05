import React from 'react';
import PuzzleCard from './PuzzleCard';

const PuzzleGrid = ({props}) => {
    const cardComponent = props.map((data, i) => {
        return <PuzzleCard key={data.id} id={data.id} hiddenWord={data.hiddenWord} 
            guessesTaken={data.guessesTaken} guessedLetters={data.guessedLetters} />
    });

    return (
        <div className='flex grow two three-600 six-1200'>
            {cardComponent}
        </div>
    );
}

export default PuzzleGrid;