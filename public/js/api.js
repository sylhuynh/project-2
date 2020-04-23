// const map;
// const service;
// const infowindow;

$("#search").on("click", function(event) {
  // preventing default behavior
  event.preventDefault();

  // store the user's search value as a variable
  var userInput = $(".uk-search")
    .val()
    .trim();
  console.log(userInput);
  placesAPI(userInput);
});

const apiKey = "AIzaSyANGfz6tIVubimQkl95WE1Po7V1VvCBR-E";
function placesAPI(userInput) {
  $.ajax({
    method: "GET",
    url:
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
      userInput +
      "&key=" +
      apiKey
  }).then(function(response) {
    console.log(response);
  });
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

// // function that communicated with google places API and queries for the city/region that the user entered
// function placesSearch(){
//     // takes user input from search bar and stores it as a variable
//     let userInput = $(".uk-search").val().trim();
//     infowindow = new google.maps.InfoWindow();

//     // adds an autocomplete feature to the search bar
//     var autocomplete = new google.maps.places.Autocomplete(userInput),{
//         types: ["regions", "cities"],
//     };
//     // these are the query parameters; it queries with the user input we just saved and returns the name/photos/place ID
//     let request = {
//         query: userInput,
//         fields: ["name", "photos", "place_id"]
//     }
//     let service = new google.maps.places.PlaceServices(map);
//     service.findPlaceFromQuery(request, function(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//             createMarker(results[i]);
//           }
//           map.setCenter(results[0].geometry.location);
//         }
//     }).then(function(response){
//       console.log(response)
//       });

// }
