/*
Cart

{
  _id:string
  userId: string   --  Linked referenced to user data model
  grandTotal:number
  cartItems:[
  {
  cartId:string
  itemTotal:number
  productId:string    -- Linked Reference to product data model
  productCount:number
  buyingPrice:number
  isAvaliable:boolean 
}
]
}

CartLine

{

  _id:number
  cartId:number
  total:number
  productId:number
  productCount:number
  buyingPrice:number
  isAvaliable:number 



}






CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `grand_total` decimal(10,2) DEFAULT NULL,
  `cart_lines` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_user_id` (`user_id`),
  CONSTRAINT `fk_cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `cart_line` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_count` int DEFAULT NULL,
  `buying_price` decimal(10,2) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cartline_product_id` (`product_id`),
  CONSTRAINT `fk_cartline_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/
