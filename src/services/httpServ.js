import axios from "axios";

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
  fetch(url + '/modifyOne', requestOptions)
    .then(resp => console.log('SENT POST; Response: ' + resp))
    .catch(err => console.log('POST ERROR: ' + err))
};

//Put to add a new puzzle