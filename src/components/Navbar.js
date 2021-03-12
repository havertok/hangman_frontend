import React from 'react';
import { Link } from "react-router-dom";

function Navbar (props) {

    return (
        <div className = 'App-Nav'>
            <h1 className = 'App-Title'>H A N G M A N</h1>
            <div className = 'button-bar flex three'>
                <Link className='nav-button' to='/Home'>Home</Link>
                <Link className='nav-button' to='/Login'>Login/Register</Link>
                <Link className='nav-button' to='/Add'>Add New Puzzle</Link>
            </div>
        </div>
    )

}

// <button onClick={e => buttonFunct(e.target.value)} type='button' value='/Home'>Home</button>
// <button onClick={e => buttonFunct(e.target.value)} type='button' value='/Add'>New Puzzle</button>
// <button onClick={e => buttonFunct(e.target.value)} type='button 'value='/Login'>Login/Register</button>

export default Navbar;