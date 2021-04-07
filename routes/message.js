var express = require('express');
var router = express.Router();
const Message = require("../models/message.model");

/* POST message. */
router.post('/', function(req, res, next) {
  // req.user
  // content
  // createdAt

  let status = 'process'

  // Validate request
  if (!req.body.content) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  Message.create(req.body.content)
      .then(data => {
        status = 'ok'
        res.send(data);
      })
      .catch(err => {
        status = 'error'
        res.status(500).send({
          status,
          message:
              err.message || "Some error occurred while creating the Message."
        });
      });
});

module.exports = router;