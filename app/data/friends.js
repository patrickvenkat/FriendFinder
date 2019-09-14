// ===============================================================================
// DATA
// The array below will hold the response to each question for each person.
// ===============================================================================

var friendsArray = [
    {
      name: "Barbie",
      photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjw1-2wqdDkAhVVoFsKHRhOAEoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Ftoys-games-barbie-rainbow-lights-mermaid%2F31093114&psig=AOvVaw1lb20GnN0Rs_HvBI_jz8so&ust=1568550831211424",
      scores: [1,1,1,1,1,1,1,1,1,1],
    },
    {
      name: "Ken",
      photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiRjNeiqdDkAhWRKn0KHU1XB-kQjRx6BAgBEAQ&url=https%3A%2F%2Fbarbie.mattel.com%2Fshop%2Fen-us%2Fba%2Fmovies-videos%2Fbarbie-dolphin-magic-ken-doll-fbd71&psig=AOvVaw0UBDfJFV109eGIjV4AI2wf&ust=1568550803248068",
      scores: [2,2,1,1,1,1,1,1,1,1],
    },
    {
      name: "Douchebag",
      photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiE_ZCQqdDkAhUWJzQIHUlNCQ4QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2Fdont-be-a-douchebag-matthew-james%2F1123869164&psig=AOvVaw3k5np83GEiuFxDV2ljCtIo&ust=1568550767837734",
      scores: [3,3,1,1,1,1,1,1,1,1],
    },
    {
      name: "Diva",
      photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwizpZCsqNDkAhU1GTQIHV1fBREQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.halloweencostumes.com%2Fwomens-cruel-diva-costume.html&psig=AOvVaw1nE0OPFm_wg64imev9BvTT&ust=1568550530240571",
      scores: [4,4,1,1,1,1,1,1,1,1],
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  