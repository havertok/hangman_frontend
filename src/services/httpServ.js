import axios from "axios";
import Interceptors from '../interceptors/Interceptors.js';

//I will also need a get for a single puzzle by ID, and a post to inform server that a puzzle
//has been lost (8 guesses means man has been hanged and the puzzle is ded) or solved

//Axios Get All
export const sendGetAllRequest = async (url) => {
  const prom = await axios.get(url + '/all')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
      console.log(error.message);
    })
    .finally(() => {
      console.log("sendAllGet Done");
    });
  return prom;
};

//Regular Fetch Update (post) to update a game (modifyOne is endpoint)
export const sendPostSinglePuzzle = async (url, puzzle) => {
  const requestOptions = {
    method: 'POST',
    headers :{ 'Content-Type': 'application/json' },
    body: JSON.stringify(puzzle)
  };
  fetch(url + '/modify', requestOptions)
    .then(resp => console.log('SENT POST; Response: ' + resp))
    .catch(err => console.log('POST ERROR: ' + err))
};

//Post to add a new Puzzle, puzzle obj here will NOT include things like ID and isSolved, server needs to do that
export const sendPostNewPuzzle = async (url, puzzle) => {
  //things
}

//userObj will map to our UserModelDTO in the backend {username:, password:, matchingPassword:, email:}
export const sendPostNewUser = async (url, userObj) => {
  const prom = await axios.post(url, userObj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
}

//We do a few things when logging in that we don't when registering
//Should return/call a function to rest user to /Home after login
export const sendPostLogin = async (url, userObj) => {
  // let config = {
  //   headers:{
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }
  const prom = await axios.post(url, userObj)
    .then((response) => {
      localStorage.setItem('authorization', response.data.token);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
}

//We can hit an external servie to grab the local users IP and set that as context (TODO-ish)
// .get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
//  console.log(data)
// })