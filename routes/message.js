var express = require('express');
var router = express.Router();

/* POST message. */
router.post('/', function(req, res, next) {
  // req.user
  let status = 'process'
  res.send({status});
});

module.exports = router;
