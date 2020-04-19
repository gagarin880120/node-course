const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findOne({ _id: id });
};

const postUser = async data => {
  return User.create(data);
};

const deleteUser = id => {
  return User.deleteOne({ _id: id }).exec().deletedCount;
};

const updateUser = (id, data) => {
  return User.updateOne({ _id: data.id }, data);
};
module.exports = { getAll, getById, postUser, deleteUser, updateUser };
