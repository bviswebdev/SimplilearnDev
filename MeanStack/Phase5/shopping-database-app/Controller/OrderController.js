const { orderModel } = require("../Model/OrderModel");
const { orderData, orderDataUpdate } = require("../TestData/OrderData");

const loadOrder = async () => {
  const insertOrder = await orderModel.create(orderData);
  return insertOrder;
};

const findOrders = async () => {
  const findOrderInfo = await orderModel.find({});
  return findOrderInfo;
};

const findOrderById = async () => {
  const findOrderId = await orderModel.findById({
    _id: "61b49a93fce2a674e45bb891",
  });
  return findOrderId;
};

const findOrderByUserId = async () => {
  const findUserOrder = await orderModel.findOne({
    userId: "61b2d8c35e657481119cc498",
  });
  return findUserOrder;
};

const updateOrderById = async () => {
  const orderUpdate = await orderModel.findByIdAndUpdate(
    {
      _id: "61b49a93fce2a674e45bb891",
    },
    orderDataUpdate,
    { new: true, runValidators: true }
  );
  return orderUpdate;
};

const deleteByOrderId = async () => {
  const deleteOrder = await orderModel.findByIdAndDelete({
    _id: "61b49a93fce2a674e45bb891",
  });
  return deleteOrder;
};

const orderController = {
  loadOrder,
  findOrders,
  findOrderById,
  findOrderByUserId,
  updateOrderById,
  deleteByOrderId,
};

module.exports = { orderController };
