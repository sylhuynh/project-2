// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/views/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/views/signup.html"));
  });

  // app.get("/wishlist", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/wishlist");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/views/wishlist.html"));
  // });

  // app.get("/visited", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/visited");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/views/visited.html"));
  // });

  app.get("/destination", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/destination.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/members.html"));
  });

  app.get("/wishlist", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/wishlist.html"));
  });

  app.get("/visited", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/visited.html"));
  });
};
