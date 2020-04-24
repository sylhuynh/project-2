/* eslint-disable no-unused-vars */

var routes = require("../../routes/html-routes");

// eslint-disable-next-line no-unused-vars
$.get("/destination", function(data) {
  console.log(data);
  $("#destination-name").append(data);
});
