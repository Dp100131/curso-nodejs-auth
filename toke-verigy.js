const jwt = require('jsonwebtoken');

const secret = 'env';
function verifyToken(token, secret) {

  return jwt.verify(token, secret);

}

const payload = verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcwMTI5ODI2MH0.g2HHtWT_koYt6P6gbiQmNH2slY20twAoCKy_OP4aRl4", secret);
console.log(payload);