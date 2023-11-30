const jwt = require('jsonwebtoken');

function verifyToken(token, secret) {

  return jwt.verify(token, secret);

}
function signToken(payload, secret) {

  return jwt.sign(payload, secret);

}

module.exports = { verifyToken, signToken }