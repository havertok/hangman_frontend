import axios from "axios";

//I will also need a get for a single puzzle by ID, and a post to inform server that a puzzle
//has been lost (8 guesses means man has been hanged and the puzzle is ded) or solved

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

// export const sendGetAllRequest = (url) => {
//     fetch('url', {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ id: '123', name : 'qweq' })
//         // body data type must match "Content-Type" header
//       })
//       .then(response => response.json())
//       .then(data => this.setState({ name: data.name, id: data.id }))
// }
