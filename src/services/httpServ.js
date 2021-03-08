import axios from "axios";

//I will also need a get for a single puzzle by ID, and a post to inform server that a puzzle
//has been lost (8 guesses means man has been hanged and the puzzle is ded) or solved

//Axios Get All
export const sendGetAllRequest = async (url) => {
  const prom = await axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log("sendAllGet Done");
    });
  return prom;
};

//Regular Fetch Update (post) to update a game


//Put to add a new puzzle