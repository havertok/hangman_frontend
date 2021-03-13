import React, { Component, createContext } from 'react';

const UserContext = createContext();

class UserProvider extends Component {

    //default state, will change if user logs in
    state = { name: 'Visitor', allowedGuesses: 12 };

    writeState = (input) => {
        this.setState((prev) => ({input}))
    }

    setUser = (user) => {
        this.setState({name: user})
    }

    //Every time a user guesses a letter we subtract one from his available guesses
    subtractGuess = () => {
        let temp = this.state.allowedGuesses;
        temp--;
        this.setState({allowedGuesses: temp});
    }

    //If user wins a puzzle, they get some guesses back
    //TODO this just does not set the state, the function gets called, temp is the right value, even used a callback
    // to log the valu eof allowedGuesses and it just won't set it.  subtractGuess works fine,
    replenishGuesses = () => {
        let temp  = this.state.allowedGuesses;
        temp = (temp + 8);
        this.setState({allowedGuesses: temp});
    }

    render() {
        const { children } = this.props;
        const { user } = this.state;
        const { allowedGuesses } = this.state;
        const { writeState } = this;
        const { setUser } = this;
        const { subtractGuess } = this;
        const { replenishGuesses } = this;
    
        return (
          <UserContext.Provider
            value={{
              user,
              allowedGuesses,
              writeState,
              setUser,
              subtractGuess,
              replenishGuesses
            }}
          >
            {children}
          </UserContext.Provider>
        )
      }
}

export { UserProvider };

export default UserContext;