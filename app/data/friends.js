// ===============================================================================
// DATA
// The array below will hold the response to each question for each person.
// ===============================================================================

var friendsArray = [
    {
      name: "Barbie",
      photo: "https://placeimg.com/200/200/woman",
      scores: [1,1,1,1,1,1,1,1,1,1],
    },
    {
      name: "Ken",
      photo: "https://placeimg.com/200/200/man",
      scores: [2,2,1,1,1,1,1,1,1,1],
    },
    {
      name: "Douchebag",
      photo: "https://placeimg.com/200/200/man",
      scores: [3,3,1,1,1,1,1,1,1,1],
    },
    {
      name: "Diva",
      photo: "https://placeimg.com/200/200/woman",
      scores: [4,4,1,1,1,1,1,1,1,1],
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  