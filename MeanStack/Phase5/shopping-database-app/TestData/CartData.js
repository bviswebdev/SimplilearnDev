const userTempId = "61b493cfc8e40e0ed9a242e0";
const pdParacetamol = "61b49463d2e270f3f448d5cc";
const pdCombiflame = "61b49463d2e270f3f448d5cf";
const pdDiclofenac = "61b49463d2e270f3f448d5d2";

const cartData = {
  userId: userTempId,
  grandTotal: 102.0,
  cartItems: [
    {
      itemTotal: 30.0,
      productId: pdParacetamol,
      productCount: 1,
      buyingPrice: 30.0,
      isAvailable: true,
      cartItemProduct: {
        productCode: "PRDABC123DEFX",
        productImageUrl: "assets/productimages/PRDABC123DEFX.jpg",
        productName: "Paracetamol",
        productBrand: "Cipla",
        productDescription: "An antipyretic medicine used for fever.",
        productPrice: "20.0",
        productQtyAvailable: "50",
      },
    },
    {
      itemTotal: 54.0,
      productId: pdCombiflame,
      productCount: 1,
      buyingPrice: 54.0,
      isAvailable: true,
      cartItemProduct: {
        productCode: "PRDDEF123GHIX",
        productImageUrl: "assets/productimages/PRDDEF123GHIX.jpg",
        productName: "Combiflame",
        productBrand: "Cipla",
        productDescription: "An antipyretic medicine used for fever.",
        productPrice: "22.0",
        productQtyAvailable: "49",
      },
    },
    {
      itemTotal: 18.0,
      productId: pdDiclofenac,
      productCount: 1,
      buyingPrice: 18.0,
      isAvailable: true,
      cartItemProduct: {
        productCode: "PRDDEF123DEFX",
        productImageUrl: "assets/productimages/PRDDEF123DEFX.jpg",
        productName: "Diclofenac",
        productBrand: "Intas",
        productDescription: "An pain killer medicine.",
        productPrice: "30.0",
        productQtyAvailable: "20",
      },
    },
  ],
};

const cartDataUpdate = {
  userId: userTempId,
  grandTotal: 132.0,
  cartItems: [
    {
      itemTotal: 30.0,
      productId: pdParacetamol,
      productCount: 2,
      buyingPrice: 60.0,
      isAvailable: true,
      cartItemProduct: {
        productCode: "PRDABC123DEFX",
        productImageUrl: "assets/productimages/PRDABC123DEFX.jpg",
        productName: "Paracetamol",
        productBrand: "Cipla",
        productDescription: "An antipyretic medicine used for fever.",
        productPrice: "20.0",
        productQtyAvailable: "50",
      },
    },
    {
      itemTotal: 54.0,
      productId: pdCombiflame,
      productCount: 1,
      buyingPrice: 54.0,
      isAvailable: true,
      cartItemProduct: {
        productCode: "PRDDEF123GHIX",
        productImageUrl: "assets/productimages/PRDDEF123GHIX.jpg",
        productName: "Combiflame",
        productBrand: "Cipla",
        productDescription: "An antipyretic medicine used for fever.",
        productPrice: "22.0",
        productQtyAvailable: "49",
      },
    },
  ],
};

module.exports = { cartData, cartDataUpdate };
