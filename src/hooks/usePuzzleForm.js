import {useState} from 'react';

//Pretty much the sate as userSignUpForm, but for puzzles so I changed the name
const usePuzzleForm = (callback) => {
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
        //[event.target.value] resulted in sending an object in this form:  {var: [val]} which did not matach up to DTO wouldn't parse
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value }));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default usePuzzleForm;