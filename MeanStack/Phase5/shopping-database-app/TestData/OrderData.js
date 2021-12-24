const userTempId = "61b493cfc8e40e0ed9a242e0";
const shippingTempId = "61b493cfc8e40e0ed9a242e1";
const billingTempId = "61b493cfc8e40e0ed9a242e1";
const productTempId = "61b49463d2e270f3f448d5cc";
const productTempIdTwo = "61b49463d2e270f3f448d5cf";

const orderData = {
  userId: userTempId,
  orderTotal: 40.0,
  orderCount: 2,
  shippingId: shippingTempId,
  billingId: billingTempId,
  orderItems: [
    {
      total: 18.0,
      productId: productTempId,
      productCount: 1,
      buyingPrice: 18.0,
      productName: "Paracetemol",
    },
    {
      total: 22.0,
      productId: productTempIdTwo,
      productCount: 1,
      buyingPrice: 22.0,
      productName: "Combiflame",
    },
  ],
};

const orderDataUpdate = {
  userId: userTempId,
  orderTotal: 60.0,
  orderCount: 2,
  shippingId: shippingTempId,
  billingId: billingTempId,
  orderItems: [
    {
      total: 18.0,
      productId: productTempId,
      productCount: 1,
      buyingPrice: 18.0,
      productName: "Paracetemol",
    },
    {
      total: 22.0,
      productId: productTempIdTwo,
      productCount: 1,
      buyingPrice: 22.0,
      productName: "Combiflame",
    },
  ],
};

module.exports = { orderData, orderDataUpdate };
