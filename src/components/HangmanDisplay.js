import React from 'react';

function HangmanDisplay({guessesTaken, guessedLetters, hiddenWord}) {

    const hangmanStyle = {
       overFlow: 'auto', background: '#000', width: '98%', color: '#00ff00', alignItems: 'center'
    }

    function getLetters(guessedLetters){
        let lettersArr = []; 
        let wordArr = hiddenWord.split('');

        wordArr.forEach(letter =>{
            if(guessedLetters.toString().includes(letter)){
                lettersArr.push(letter);
            } else {
                lettersArr.push('_');
            }
        });
        return (
            <div className='flex center'>
                {lettersArr.map(letter => <> {letter} </>)} 
                <br/>Guesses Left: {7 - guessesTaken}
            </div>
        );
    }
    
    function getHangman(num){
        //big ugly switch statement to return the art depenind on number off guesses taken
        //tabs are removed to keep the gallow (roughly) centered
        switch(num){
            case 0: 
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/     
              |      
              |      
              |      
              |
        ______|_______
        |            | `}</pre>;
            case 1:
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/      O
              |      
              |      
              |      
              |
        ______|_______
        |            |`}</pre>;         
            case 2:
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/      O
              |       |
              |       
              |      
              |
        ______|_______
        |            |`}</pre>;
            case 3:
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/      O
              |       |
              |       |
              |      
              |
        ______|_______
        |            |`}</pre>;
            case 4:
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/      O
              |      /|
              |       |
              |      
              |
        ______|_______
        |            |`}</pre>;
            case 5:
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/      O
              |      /|\\
              |       |
              |      
              |
        ______|_______
        |            |`}</pre>;
            case 6:
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/      O
              |      /|\\
              |       |
              |      /
              |
        ______|_______
        |            |`}</pre>;
            case 7:
                return <pre style={hangmanStyle}>{`
               _______
              | /     |
              |/      O
              |      /|\\
              |       |
              |      / \\
              |
        ______|_______
        | D  E  A  D |`}</pre>;
            default:
                return <pre style={hangmanStyle}>{`This should not happen!`}</pre>
        }
    }

    return (
        <div style={hangmanStyle}>
            {getHangman(guessesTaken)}
            {getLetters(guessedLetters)}
        </div>
    )
}

export default HangmanDisplay;