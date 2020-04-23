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
// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyANGfz6tIVubimQkl95WE1Po7V1VvCBR-E&callback=initMap";
script.defer = true;
script.async = true;
// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};
// Append the 'script' element to 'head'
document.head.appendChild(script);