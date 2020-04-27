const db = require("../models");

// Routes
module.exports = app => {
  app.get("/api/visited", (req, res) => {
    console.log(req)
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.Visited.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(dbVisited => {
      res.json(dbVisited);
    });
  });

  app.post("/api/visited", (req, res) => {
    if (!req.user) {
      res.sendStatus(403);
      return;
    }

    db.Visited.create({
      destination: req.body.destination,
      address: req.body.address,
      wishlistStatus: req.body.wishlistStatus,
      visitedStatus: req.body.visitedStatus,
      UserId: req.user.id
    }).then(dbVisited => {
      res.json(dbVisited);
    });
  });

  app.delete("/api/visited/:id", (req, res) => {
    db.Visited.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbVisited => {
      res.json(dbVisited);
    });
  });

  app.put("/api/visited", (req, res) => {
    db.Visited.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(dbVisited => {
      res.json(dbVisited);
    });
  });
};
