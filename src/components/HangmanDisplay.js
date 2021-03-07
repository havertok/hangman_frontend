import React from 'react';

function HangmanDisplay({guessesTaken}) {

    const hangmanStyle = {
       overFlow: 'auto', background: '#000', width: '98%', color: '#00ff00'
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
                return <pre style={hangmanStyle}>{`This should not happen! num: `}</pre>
        }
    }

    return (
        <div>
            {getHangman(guessesTaken)}
        </div>
    )
}

export default HangmanDisplay;