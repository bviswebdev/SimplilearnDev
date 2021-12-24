/*
Order

{
  _id:string
  userId:string         -- linked reference to user data model
  orderTotal:number
  orderCount:number
  shippingId:string     -- linked reference to user data model
  billingId:string      -- linked reference to user data model   
  orderItems:[
             {
              id:string
              total:number
              productId:string       -- linked reference to product data model
              productCount:number
              buyingPrice:number
             }   
             ]  
  orderDate:string  

}

Order Item

{
  _id:number
  orderId:number
  total:number
  productId:number
  productCount:number
  buyingPrice:number

}




CREATE TABLE `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_total` decimal(10,2) DEFAULT NULL,
  `order_count` int DEFAULT NULL,
  `shipping_id` int DEFAULT NULL,
  `billing_id` int DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_detail_user_id` (`user_id`),
  KEY `fk_order_detail_shipping_id` (`shipping_id`),
  KEY `fk_order_detail_billing_id` (`billing_id`),
  CONSTRAINT `fk_order_detail_billing_id` FOREIGN KEY (`billing_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_order_detail_shipping_id` FOREIGN KEY (`shipping_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_order_detail_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_count` int DEFAULT NULL,
  `buying_price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_item_product_id` (`product_id`),
  KEY `fk_order_item_order_id` (`order_id`),
  CONSTRAINT `fk_order_item_order_id` FOREIGN KEY (`order_id`) REFERENCES `order_detail` (`id`),
  CONSTRAINT `fk_order_item_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

*/
