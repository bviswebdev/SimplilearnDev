/*User

{
  _id:string
  firstName:string
  lastName:string
  role:string
  enabled:boolean
  password:string
  email:string
  contactNumber:string
  address:[
           {
             addrid:string
             addressLineOne:string
             addressLineTwo:string
             city:string
             state:string
             country:string
             postalCode:string
             isBilling:boolean
             isShipping:boolean
            }
           ]
}

Address

{
  addrid:number
  addressLineOne:string
  addressLineTwo:string
  city:string
  state:string
  country:string
  postalCode:string
  isBilling:boolean
  isShipping:boolean
}




CREATE TABLE `user_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `address_line_one` varchar(100) DEFAULT NULL,
  `address_line_two` varchar(100) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  `is_billing` tinyint(1) DEFAULT NULL,
  `is_shipping` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_address_user_id` (`user_id`),
  CONSTRAINT `fk_address_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_detail` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

*/
