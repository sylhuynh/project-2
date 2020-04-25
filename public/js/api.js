/* eslint-disable no-unused-vars */
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

$("#search").on("click", function(event) {
  // preventing default behavior
  event.preventDefault();
  // store the user's search value as a variable
  var userInput = $(".uk-search-input")
    .val()
    .trim();
  findDestination(userInput);
});

$(".learn-more").on("click", function(event) {
  // preventing default behavior
  event.preventDefault();
  // store the user's search value as a variable
  var userInput = $(this).data("query");
  findDestination(userInput);
});

function initMap() {
  var sydney = new google.maps.LatLng(-33.867, 151.195);

  map = new google.maps.Map(document.getElementById("map"), {
    center: sydney,
    zoom: 15
  });
}

function findDestination(search) {
  var request = {
    query: search,
    fields: ["name", "geometry", "place_id"]
  };
  var service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      getSearchDetails(results[0]);
    }
  });
}
function getSearchDetails(searchResults) {
  const searchPlaceID = searchResults.place_id;
  var request = {
    placeId: searchPlaceID,
    fields: ["name", "formatted_address", "place_id", "geometry", "photos"]
  };

  service = new google.maps.places.PlacesService(map);
  service.getDetails(request, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var photos = place.photos;
      if (!photos) {
        return;
      }
      var photoURL = photos[0].getUrl({ maxWidth: 500, maxHeight: 500 });
      $("#destination-image").html(
        $("<img>")
          .attr("src", photoURL)
          .addClass("uk-position-center-left uk-margin-large-left")
      );
      $("#city").text(place.name);
      addVisited(place.name);
      addWishlist(place.name);
    }
  });
}
function addVisited(destination) {
  $(".add-visited").on("click", function(event) {
    event.preventDefault();
    const newVisited = {
      destination: destination,
      visitedStatus: true
    };
    console.log(newVisited);

    $.post("/api/visited", newVisited).then(function(data) {
      console.log(data);
      alert("adding new city to visited");
    });
  });
}

function addWishlist(destination) {
  $(".add-wishlist").on("click", function(event) {
    event.preventDefault();
    const newWishlist = {
      destination: destination,
      wishlistStatus: true
    };
    // $(".add-wishlist").toggleClass("deepskyblue");
    // $(".add-wishlist").attr("class", "deepskyblue");
    $(".add-wishlist").attr("style", "color:deepskyblue");

    console.log(newWishlist);

    $.post("/api/wishlist", newWishlist).then(function(data) {
      console.log(data);
      alert("adding new city to wishlist");
    });
  });
}

$("#search").hide();

$("#san-diego-visited").on("click", function(event) {
  event.preventDefault();
  $("#san-diego-visited").toggleClass("deepskyblue");
});

$("#san-diego-wishlist").on("click", function(event) {
  event.preventDefault();
  $("#san-diego-wishlist").toggleClass("deepskyblue");
});

$("#tokyo-visited").on("click", function(event) {
  event.preventDefault();
  $("#tokyo-visited").toggleClass("deepskyblue");
});

$("#tokyo-wishlist").on("click", function(event) {
  event.preventDefault();
  $("#tokyo-wishlist").toggleClass("deepskyblue");
});

$("#dubai-visited").on("click", function(event) {
  event.preventDefault();
  $("#dubai-visited").toggleClass("deepskyblue");
});

$("#dubai-wishlist").on("click", function(event) {
  event.preventDefault();
  $("#dubai-wishlist").toggleClass("deepskyblue");
});

$("#paris-visited").on("click", function(event) {
  event.preventDefault();
  $("#paris-visited").toggleClass("deepskyblue");
});

$("#paris-wishlist").on("click", function(event) {
  event.preventDefault();
  $("#paris-wishlist").toggleClass("deepskyblue");
});

$("#toronto-visited").on("click", function(event) {
  event.preventDefault();
  $("#toronto-visited").toggleClass("deepskyblue");
});

$("#toronto-wishlist").on("click", function(event) {
  event.preventDefault();
  $("#toronto-wishlist").toggleClass("deepskyblue");
});
