const map;
const service;
const infowindow;

$("#search-button").on("click", function (event) {
    // preventing default behavior
    event.preventDefault();
    // invoking  places search on click
    placesSearch();
    

 
   
});


// function that communicated with google places API and queries for the city/region that the user entered
function placesSearch(){
    // takes user input from search bar and stores it as a variable
    let userInput = $("search-bar").val().trim();
    infowindow = new google.maps.InfoWindow();
    
    // adds an autocomplete feature to the search bar
    var autocomplete = new google.maps.places.Autocomplete(userInput),{
        types: ["regions", "cities"],
    };
    // these are the query parameters; it queries with the user input we just saved and returns the name/photos/place ID
    let request = {
        query: userInput,
        fields: ["name", "photos", "place_id"]
    }
    let service = new google.maps.places.PlaceServices(map);
    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
          map.setCenter(results[0].geometry.location);
        }
    }).then(function(response){
      console.log(response)
      });

}