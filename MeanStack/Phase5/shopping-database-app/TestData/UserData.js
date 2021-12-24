const usersData = [
  {
    firstName: "Vikas",
    lastName: "Kashyap",
    role: "ADMIN",
    enabled: true,
    password: "admin",
    email: "vk@gmail.com",
    contactNumber: 8888888888,
  },
  {
    firstName: "Ravindra",
    lastName: "Jadeja",
    role: "SUPPLIER",
    enabled: true,
    password: "supplier",
    email: "rj@gmail.com",
    contactNumber: 9999999999,
  },
  {
    firstName: "Ravichandra",
    lastName: "Ashwin",
    role: "SUPPLIER",
    enabled: true,
    password: "supplier",
    email: "ra@gmail.com",
    contactNumber: 7777777777,
  },
  {
    firstName: "Kavita",
    lastName: "Nigam",
    role: "USER",
    enabled: true,
    password: "user",
    email: "kn@gmail.com",
    contactNumber: 7777777777,
    addresses: [
      {
        addressLineOne: "102 Sabarmati Society, Mahatma Gandhi Road",
        addressLineTwo: "Near Salt Lake, Gandhi Nagar",
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        postalCode: 111111,
        isBilling: true,
        isShipping: false,
      },
    ],
  },
];

const userData = {
  firstName: "Ravindraupdate",
  lastName: "adejaupdate",
  enabled: true,
  password: "supplier",
  email: "rj@gmail.com",
  contactNumber: 9999999999,
};

module.exports = { userData, usersData };
