const { cartModel } = require("../Model/CartModel");
const { cartData, cartDataUpdate } = require("../TestData/CartData");

const loadCart = async () => {
  const insertCart = await cartModel.create(cartData);
  return insertCart;
};

const findCarts = async () => {
  const findCartInfo = await cartModel.find({});
  return findCartInfo;
};

const findCartById = async () => {
  const findCartId = await cartModel.findById({
    _id: "61b496f1357405cec535260e",
  });
  return findCartId;
};

const findCartByUserId = async () => {
  const findUserCart = await cartModel.findOne({
    userId: "61b493cfc8e40e0ed9a242e0",
  });
  return findUserCart;
};

const updateCartById = async () => {
  const cartupdate = await cartModel.findByIdAndUpdate(
    {
      _id: "61b496f1357405cec535260e",
    },
    cartDataUpdate,
    { new: true, runValidators: true }
  );
  return cartupdate;
};

const updateCartByUserId = async () => {
  const cartUpdateUser = await cartModel.findOneAndUpdate(
    {
      userId: "61b493cfc8e40e0ed9a242e0",
    },
    cartDataUpdate,
    { new: true, runValidators: true }
  );
  return cartUpdateUser;
};

const deleteByUserId = async () => {
  const deleteCart = await cartModel.findOneAndUpdate({
    userid: "61b493cfc8e40e0ed9a242e0",
  });
  return deleteCart;
};

const deleteByCartId = async () => {
  const deleteCart = await cartModel.findByIdAndDelete({
    _id: "61b496f1357405cec535260e",
  });
  return deleteCart;
};

const cartController = {
  loadCart,
  findCarts,
  findCartById,
  findCartByUserId,
  updateCartById,
  updateCartByUserId,
  deleteByUserId,
  deleteByCartId,
};

module.exports = { cartController };
