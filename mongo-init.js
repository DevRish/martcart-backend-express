db = new Mongo().getDB("martcart");

db.createCollection("users", { capped: false });
db.createCollection("products", { capped: false });
db.createCollection("categories", { capped: false });
db.createCollection("events", { capped: false });

db.users.insertMany([
  {
    _id: ObjectId("65155b1dc2731ad574a21dec"),
    firstname: "John",
    lastname: "Doe",
    username: "test_buyer",
    userType: "BUYER",
    phone: "9988776655",
    email: "johndoe@test.com",
    password: "7f6f467575be3c486742105261a957e8c3984f7cfe08d04d6c22ff5ca2499f807b25ca8d7423a4be26cca5d1a03261de0ae973ff736eaa687b150805b377f527", // "qwerty"
    cart: [],
    joinDate: ISODate("2023-09-28T10:53:17.505+00:00"),
    __v: 0
  }, 
  {
    _id: ObjectId("6582582b9345fd962ccb8bc2"),
    firstname: "Jack",
    lastname: "Doe",
    username: "test_seller",
    userType: "SELLER",
    phone: "9988776688",
    email: "jackdoe@test.com",
    password: "7f6f467575be3c486742105261a957e8c3984f7cfe08d04d6c22ff5ca2499f807b25ca8d7423a4be26cca5d1a03261de0ae973ff736eaa687b150805b377f527", // "qwerty"
    cart: [],
    joinDate: ISODate("2023-09-28T10:53:17.505+00:00"),
    __v: 0
  }
]);

db.events.insertMany([
  {
    _id: ObjectId("65867ddcb7550eb3bb7a668d"),
    ctaLink: "/search",
    imagePath: "/images/fallback.png",
    tagLines: [
      "Very good product"
    ]
  }
]);

db.categories.insertMany([
  {
    _id: ObjectId("6582695b8a5a7ef7f29fce29"),
    name: "Footwear",
    itemCount: 1,
  }
]);

db.products.insertMany([
  {
    _id: ObjectId("658269704395b3e11c974a5a"),
    name: "Nike Air Jordan",
    currentPrice: 2799,
    originalPrice: 3699,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    imagePath: "/images/658269704395b3e11c974a5a.jpg",
    choices: [
      {
        name: "color",
        values: ["red","black","orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ],
  }
]);