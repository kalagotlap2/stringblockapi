const UserConfigs = require("../model/userconfigs.model.js");

// Create and Save a new theme
exports.createconfig = (req, res) => {
  const config = new UserConfigs({
    theme: req.body.theme,
    user : req.body.user
  });
  config
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all themes and user details from the database.
exports.findAllConfigs = (req, res) => {
  console.log("test");
  UserConfigs.find()
    .then((data) => {
      const latestdata = {data:data,myurl:req.subdomains}
      res.send(latestdata);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving themes.",
      });
    });
};

// Find a single theme with a themeId
exports.findOne = (req, res) => {
  UserConfigs.findById(req.params.themeId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.themeId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.themeId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.themeId,
      });
    });
};

// Update a message identified by the themeId in the request
exports.update = (req, res) => {
  UserConfigs.findByIdAndUpdate(
    req.params.themeId,
    {
      theme: req.body.theme,
      user: req.body.user
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "theme not found with id " + req.params.themeId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Theme is not found with id " + req.params.themeId,
        });
      }
      return res.status(500).send({
        message: "Error updating theme with id " + req.params.themeId,
      });
    });
};

// Delete a theme with the specified themeid in the request
exports.delete = (req, res) => {
  UserConfigs.findByIdAndRemove(req.params.themeId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "theme  not found with id " + req.params.themeId,
        });
      }
      res.send({ message: "theme deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.messageId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.messageId,
      });
    });
};
