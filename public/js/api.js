// Create the script tag, set the appropriate attributes
var script = document.createElement("script");

script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyANGfz6tIVubimQkl95WE1Po7V1VvCBR-E&callback=initMap&libraries=places";
script.defer = true;
script.async = true;
// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};
// Append the 'script' element to 'head'
document.head.appendChild(script);

// eslint-disable-next-line no-unused-vars
function createMarker(place) {
  new google.maps.Marker({
    position: place.geometry.location,
    map: map
  });
}
