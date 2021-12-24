/*Product

{
  _id:string
  code:string
  name:string
  brand:string
  description:string
  unitPrice:number  
  quantity:number
  isActive:boolean
  category: {
  id:string 
  catName:string
  catDesc:string
  catImgUrl:string
  catActive:boolean 
  } 
  supplierId:string      -- Linked Reference to UserDataModel 
  purchases:number
  views:number
}

Category

{
  _id:number
  name:string
  description:string
  image_url:string
  is_active:number 

}



CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(20) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  `purchases` int DEFAULT '0',
  `views` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_product_category_id` (`category_id`),
  KEY `fk_product_supplier_id` (`supplier_id`),
  CONSTRAINT `fk_product_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_product_supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `user_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(50) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/
