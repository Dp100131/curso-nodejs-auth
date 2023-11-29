const bcrypt = require('bcrypt');

async function hashPassword() {

  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$tuuPIpWOw02PpJFhJtWp6.Ub78dg/l7yDJ3DiofyRT.ztU/bfginK';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);

}

hashPassword();