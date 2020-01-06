const jwt = require('jsonwebtoken');

module.exports = {
  create(user) {
    return jwt.sign({ user }, 'JWT.PRIVATE_KEY', {
      expiresIn: '10s'
    });
  },
  verify(token, options) {
    const { user } = jwt.verify(token, 'JWT.PRIVATE_KEY', { ...options });
    return user;
  }
}