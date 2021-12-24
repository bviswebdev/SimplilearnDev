const { userModel } = require("../Model/UserModel");
const { userData, usersData } = require("../TestData/UserData");

const loadUsers = async () => {
  const insertUsers = await userModel.create(usersData);
  return insertUsers;
};

const findUsers = async () => {
  const findUsers = await userModel.find({});
  return findUsers;
};

const findByUserId = async () => {
  const findUser = await userModel.findById({
    _id: "61b2d8c35e657481119cc498",
  });
  return findUser;
};

const findByEmailId = async (emailId) => {
  const findUser = await userModel.findOne({
    email: emailId,
  });
  return findUser;
};

const updateByUserId = async () => {
  const updateUser = await userModel.findByIdAndUpdate(
    {
      _id: "61b2d8c35e657481119cc496",
    },
    userData,
    { new: true, runValidators: true }
  );
  return updateUser;
};

const deleteByUserId = async () => {
  const deleteUser = await userModel.findByIdAndDelete({
    _id: "61b2d8c35e657481119cc495",
  });
  return deleteUser;
};

const userController = {
  loadUsers,
  findUsers,
  findByUserId,
  updateByUserId,
  deleteByUserId,
  findByEmailId,
};

module.exports = { userController };
