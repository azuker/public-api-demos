const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const jwtSecret = 'SECURED_SECRET_HERE';

router.post('/', (req, res) => {
  const { id, email } = req.body;
  const user = { id, email };

  jwt.sign(user, jwtSecret, (jwtError, token) => {
    if (jwtError) res.send(error);
    else res.send({user, token});
  });
});

module.exports = router;
