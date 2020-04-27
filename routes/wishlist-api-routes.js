const db = require("../models");

// Routes
module.exports = app => {
  app.get("/api/wishlists", (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.Wishlist.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(dbWishlist => {
      res.json(dbWishlist);
    });
  });

  app.post("/api/wishlist", (req, res) => {
    if (!req.user) {
      res.sendStatus(403);
      return;
    }

    db.Wishlist.create({
      destination: req.body.destination,
      address: req.body.address,
      wishlistStatus: req.body.wishlistStatus,
      visitedStatus: req.body.visitedStatus,
      UserId: req.user.id
    }).then(dbWishlist => {
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

//tesconsole.log(db.Wishlist)
