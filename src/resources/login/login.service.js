const userRepo = require('../users/user.db.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');

const postLogin = async data => {
  const user = await userRepo.getByLogin(data.login);
  if (!user) return false;
  const isEqualPassword = await bcrypt.compare(data.password, user.password);
  if (!isEqualPassword) return;
  const payload = { sub: user.id, login: data.login };
  return jwt.sign(payload, JWT_SECRET_KEY);
};

module.exports = { postLogin };
