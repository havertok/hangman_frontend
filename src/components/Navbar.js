import React from 'react';

function Navbar (props) {

    const buttonFunct = props.buttonFunct;

    return (
        <div className = 'App-Nav'>
            <h1 className = 'App-Title'>H A N G M A N</h1>
            {/* Jsx needs braces to comment, anyway this h2 will be removed once I actualy implement the login/puzzle components */}
            <h2>{props.navVal}</h2> 
            <div className = 'button-bar center flex three'>
                <button onClick={e => buttonFunct(e.target.value)} type='button' value='Home'>Home</button>
                <button onClick={e => buttonFunct(e.target.value)} type='button' value='New'>New Puzzle</button>
                <button onClick={e => buttonFunct(e.target.value)} type='button 'value='Login'>Login</button>
            </div>
        </div>
    )

}

export default Navbar;