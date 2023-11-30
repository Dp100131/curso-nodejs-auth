const bcrypt = require('bcrypt');

async function hashPassword(password){
  let hash = await bcrypt.hash(password, 10);
  return hash
}

async function comparePassword(password, hash) {
  let isMatch = await bcrypt.compare(password, hash)
  return isMatch;
}

module.exports = { hashPassword, comparePassword }