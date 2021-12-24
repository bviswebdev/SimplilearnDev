const mongoose = require("mongoose");
const connectDatabase = require("./Database/DbConnect");
const { userController } = require("./Controller/UserController");
const { productController } = require("./Controller/ProductController");
const { cartController } = require("./Controller/CartController");
const { orderController } = require("./Controller/OrderController");
const { prodData } = require("./TestData/ProductData");
const {
  bufferFile,
  writeFile,
  readStats,
  bufferFileBase64,
} = require("./Utilities/FileUtil");
const Schema = mongoose.Schema;
const url = "mongodb://localhost:27017/shoppingtestapp";

connectDatabase(url);

const fileLoadTest = async () => {
  //const stats = fs.statSync("../Public/PRDABC123DEFX.jpg");
  //const stats = readStats("../Public/PRDABC123DEFX.jpg");
  //let BUFFER = bufferFile("../Public/PRDABC123DEFX.jpg");
  const stats = bufferFileBase64("../Public/PRDABC123DEFX.jpg");
  writeFile("../Output/test.png", Buffer.from(stats, "base64"));
  //let buff = new Buffer(stats, 'base64');
  //fs.writeFileSync('stack-abuse-logo-out.png', buff);
  console.log(stats);
  //writeFile("../Output/test.png", BUFFER);
  /*writeFile(
    `../Output/${fileName}.${fileType}`,
    insertProducts.productImage.fileSource
  );
  insertProducts.forEach((e) => {
    writeFile(
      `../Output/${e.productImage.fileName}.${e.productImage.fileType}`,
      e.productImage.fileSource
    );
  });*/
};

const loadTestData = async () => {
  console.log("Load Test Data Starts");
  try {
    const insertUsers = await userController.loadUsers();
    const userId = await userController.findByEmailId("vk@gmail.com");
    const insertProducts = await productController.loadUserProducts(
      prodData(userId._id)
    );
    console.log("Load Test Data Complete");
    //console.log(insertUsers);
    //const insertProducts = await productController.loadProducts();
    //console.log(insertProducts);
    //const insertCart = await cartController.loadCart();
    //const insertOrder = await orderController.loadOrder();
    //const findProduct = await productController.findByProductId();
    /*writeFile(
      `../Output/${findProduct.productImage.fileName}.${findProduct.productImage.fileType}`,
      findProduct.productImage.fileSource
    );*/
    //await fileLoadTest();
    //console.log(insertOrder);
    process.exit(0);
  } catch (e) {
    console.log("Error error error");
    console.log(e);
    process.exit(1);
  }
};

loadTestData();

//console.log("This is schema valdiator");
