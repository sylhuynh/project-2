const db = require("../models");

// Routes
module.exports = app => {
  app.get("/api/wishlists", (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.Wishlist.findAll({
      where: query
    }).then(dbWishlist => {
      res.json(dbWishlist);
    });
  });

  app.post("/api/wishlists", (req, res) => {
    db.Wishlist.create(req.body).then(dbWishlist => {
      res.json(dbWishlist);
    });
  });

  app.delete("/api/wishlists/:id", (req, res) => {
    db.Wishlist.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbWishlist => {
      res.json(dbWishlist);
    });
  });

  app.put("/api/wishlists", (req, res) => {
    db.Wishlist.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(dbWishlist => {
      res.json(dbWishlist);
    });
  });
};
//test
