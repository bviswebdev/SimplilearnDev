const { productModel } = require("../Model/ProductModel");
const { productData, productsData } = require("../TestData/ProductData");

const loadProducts = async () => {
  const insertProducts = await productModel.create(productsData);
  return insertProducts;
};

const loadUserProducts = async (products) => {
  const insertProducts = await productModel.create(products);
  return insertProducts;
};

const findProducts = async () => {
  const findProducts = await productModel.find({});
  return findProducts;
};

const findByProductId = async () => {
  const findProduct = await productModel.findById({
    _id: "61b9f3b8f9f137958f83ee13",
  });
  return findProduct;
};

const updateByProductId = async () => {
  const updateProduct = await productModel.findByIdAndUpdate(
    {
      _id: "61b35d9b9666e717bd5e8790",
    },
    productData,
    { new: true, runValidators: true }
  );
  return updateProduct;
};

const deleteByProductId = async () => {
  const deleteProduct = await productModel.findByIdAndDelete({
    _id: "61b35d9b9666e717bd5e8790",
  });
  return deleteProduct;
};

const productController = {
  loadProducts,
  findProducts,
  findByProductId,
  updateByProductId,
  deleteByProductId,
  loadUserProducts,
};

module.exports = { productController };
