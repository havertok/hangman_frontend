import {useState} from 'react';

//Saw an article using a custom hook to handle a form, thought I'd try it out
const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});//empty object

    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault(); //prevents page refresh (mostly)
        callback(); //now we call the function we passed in (posting to backend)
      }
    }

    const handleInputChange= (event) => {
        event.persist(); //removes event from event pool; as react otherwise puts all events into a batch
        //event.target will refer to parts of our form; '...' auto spreads iterables
        setInputs(inputs => ({...inputs, [event.target.name]:[event.target.value]}));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useSignUpForm;