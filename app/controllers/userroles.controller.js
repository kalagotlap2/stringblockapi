const UserRoles = require("../model/userroles.model.js");

// Create and Save a new theme
exports.register = (req, res) => {
  const config = new UserRoles({
    wallet_account_address: req.body.wallet_account_address,
    user_registration_date : req.body.user_registration_date
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
exports.getUserRoles = (req, res) => {
  UserRoles.find()
    .then((data) => {
      const latestdata = {data:data}
      res.send(latestdata);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving themes.",
      });
    });
};
