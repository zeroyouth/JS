var express = require('express');
var router = express.Router();

router.get('/', (req,  res) => {
  res.status(200).json({
    message: "login success!!",
  });
});

module.exports = router;
