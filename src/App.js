import React, {createContext, useEffect, useState}  from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import AddNewPuzz from './components/AddNewPuzz.js'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { UserProvider } from './context/UserContext.js'
import Interceptors from './interceptors/Interceptors.js';

function App(){

    const [navState, setNavState] = useState('/Home');//The default landing page is a grid of puzzles (i.e. home)
      //For redirect we MUST use exact path, otherwise nothing loads.
      const Routes = () => {

        return (
            <BrowserRouter>
                <Navbar navVal = {navState}/>
                <Switch>
                    <Route exact path='/'><Redirect to='/Home' /></Route>
                    <Route path='/Home' component={Home}/>
                    <Route path='/Login' component={Login}/>
                    <Route path='/Add' component={AddNewPuzz}/>
                    <Route component={noRoutePage}/>
                </Switch>
            </BrowserRouter>    
        );
      };

      return (
          <UserProvider>
              <Routes />
          </UserProvider>
      )
}

//If no route matches what we have return 404, not really worth it to put in it's own file
function noRoutePage(){
    return (
        <div style={{justifyContent: 'center'}}><h1>4_0_4</h1></div>
    );
}



export default App;