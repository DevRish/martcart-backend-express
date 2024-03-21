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
    joinDate: ISODate("2023-09-28T10:53:17.505+00:00")
  }, 
  {
    _id: ObjectId(ObjectId("6582582b9345fd962ccb8bc2")),
    firstname: "Jack",
    lastname: "Doe",
    username: "test_seller",
    userType: "SELLER",
    phone: "9988776688",
    email: "jackdoe@test.com",
    password: "7f6f467575be3c486742105261a957e8c3984f7cfe08d04d6c22ff5ca2499f807b25ca8d7423a4be26cca5d1a03261de0ae973ff736eaa687b150805b377f527", // "qwerty"
    cart: [],
    joinDate: ISODate("2023-09-28T10:53:17.505+00:00")
  }
]);

db.events.insertMany([
  {
    _id: ObjectId("65870fe1f6eaba3d89f6e4f4"),
    ctaLink: "/search",
    imagePath: "/images/65870fe1f6eaba3d89f6e4f4.png",
    tagLines: [
      "Nike Sports shoes at 30% off! Grab your pair now!"
    ],
    colorLight: "#9C4EBE",
    colorDark: "#230033",
    colorCTA: "#E27856"
  },
  {
    _id: ObjectId("65870feeb940d2bc876a322e"),
    ctaLink: "/search",
    imagePath: "/images/65870feeb940d2bc876a322e.png",
    tagLines: [
      "T Shirts and polos starting at Rs 599 only!"
    ],
    colorLight: "#FF7191",
    colorDark: "#C60E38",
    colorCTA: "#005165"
  },
  {
    _id: ObjectId("6587100499788d3729aeb091"),
    ctaLink: "/search",
    imagePath: "/images/6587100499788d3729aeb091.png",
    tagLines: [
      "Upto 60% off on sweatshirts and jackets"
    ],
    colorLight: "#71ECFF",
    colorDark: "#0091A7",
    colorCTA: "#A72F68"
  },
  {
    _id: ObjectId("6587100ff3875517fc9bd2cb"),
    ctaLink: "/search",
    imagePath: "/images/6587100ff3875517fc9bd2cb.png",
    tagLines: [
      "Upto 25% off on Televisions!"
    ],
    colorLight: "#53F0E3",
    colorDark: "#009286",
    colorCTA: "#344B48"
  },
  {
    _id: ObjectId("6587101b183e99e97e795f98"),
    ctaLink: "/search",
    imagePath: "/images/6587101b183e99e97e795f98.png",
    tagLines: [
      "Latest RealMe models starting at Rs 12999!"
    ],
    colorLight: "#FFA3A1",
    colorDark: "#B00400",
    colorCTA: "#230033"
  }
]);

db.categories.insertMany([
  {
    _id: ObjectId(ObjectId("6582695b8a5a7ef7f29fce29")),
    name: "Footwear",
    itemCount: 0,
  },
  {
    _id: ObjectId("65870eaa47c94e7721c35d1c"),
    name: "Fashion",
    itemCount: 0,
  },
  {
    _id: ObjectId("65870ebaacccdf15d7ceeb30"),
    name: "Technology",
    itemCount: 0,
  },
  {
    _id: ObjectId("65870eca38694ef238075105"),
    name: "Winterwear",
    itemCount: 0,
  }
]);

db.products.insertMany([
  {
    _id: ObjectId("623c3ca2c8e443b2ca021970"),
    name: "Nike Fraizer",
    currentPrice: 2330,
    rating: 4.5,
    category: ObjectId(ObjectId("6582695b8a5a7ef7f29fce29")),
    soldBy: ObjectId(ObjectId("6582582b9345fd962ccb8bc2")),
    originalPrice: 3699,
    imagePath: "/images/623c3ca2c8e443b2ca021970.png",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"],
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric",
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa750fc"),
    name: "Nike Air Max",
    currentPrice: 6639,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 7999,
    imagePath: "/images/623c440ebd094a352aa750fc.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa750fb"),
    name: "Nike Flyknit Trainer",
    currentPrice: 12039,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 13999,
    imagePath: "/images/623c440ebd094a352aa750fb.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa750ff"),
    name: "Nike Air Presto",
    currentPrice: 9599,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 11999,
    imagePath: "/images/623c440ebd094a352aa750ff.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa750fd"),
    name: "Nike Revolution 5",
    currentPrice: 10659,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 12999,
    imagePath: "/images/623c440ebd094a352aa750fd.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa750fe"),
    name: "Nike Air Zoom",
    currentPrice: 8018,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 9899,
    imagePath: "/images/623c440ebd094a352aa750fe.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa75102"),
    name: "Nike Air Pulse",
    currentPrice: 7019,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 8999,
    imagePath: "/images/623c440ebd094a352aa75102.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa75103"),
    name: "Nike Air Force Next",
    currentPrice: 7039,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 7999,
    imagePath: "/images/623c440ebd094a352aa75103.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa75101"),
    name: "Nike Air Jordan",
    currentPrice: 15119,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 17999,
    imagePath: "/images/623c440ebd094a352aa75101.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa75100"),
    name: "Nike Air Force",
    currentPrice: 11059,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 13999,
    imagePath: "/images/623c440ebd094a352aa75100.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa75104"),
    name: "Nike Air Force Cozi",
    currentPrice: 9019,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 10999,
    imagePath: "/images/623c440ebd094a352aa75104.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c440ebd094a352aa75105"),
    name: "Nike Air Force Crater",
    currentPrice: 14079,
    rating: 4.5,
    category: ObjectId("6582695b8a5a7ef7f29fce29"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 15999,
    imagePath: "/images/623c440ebd094a352aa75105.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcad7"),
    name: "Allen Solly Regular Fit Men's Tshirt",
    currentPrice: 599,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 999,
    imagePath: "/images/623c51f52ede39cbc92dcad7.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcad6"),
    name: "Turtle Men's Casual Tshirt",
    currentPrice: 1189,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1699,
    imagePath: "/images/623c51f52ede39cbc92dcad6.png",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcada"),
    name: "Allen Solly Women's Casual Tshirt",
    currentPrice: 1274,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1699,
    imagePath: "/images/623c51f52ede39cbc92dcada.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcad9"),
    name: "Calvin Klein Men's Casual Shirt",
    currentPrice: 2999,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 4999,
    imagePath: "/images/623c51f52ede39cbc92dcad9.jpeg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcad8"),
    name: "Peter England Men's Formal Shirt",
    currentPrice: 1007,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1599,
    imagePath: "/images/623c51f52ede39cbc92dcad8.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcadb"),
    name: "Calvin Klein Women's Casual Top",
    currentPrice: 2515,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 3699,
    imagePath: "/images/623c51f52ede39cbc92dcadb.jpeg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcade"),
    name: "Nike Men's Sleeveless Sports Shirt",
    currentPrice: 1699,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 2499,
    imagePath: "/images/623c51f52ede39cbc92dcade.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcadc"),
    name: "Van Heusen Women's Formal Shirt",
    currentPrice: 1189,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1699,
    imagePath: "/images/623c51f52ede39cbc92dcadc.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcadd"),
    name: "Levis Women's Casual Shirt",
    currentPrice: 1500,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 2999,
    imagePath: "/images/623c51f52ede39cbc92dcadd.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcae1"),
    name: "Puma Women's Tshirt",
    currentPrice: 599,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 999,
    imagePath: "/images/623c51f52ede39cbc92dcae1.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcae0"),
    name: "Puma Men's Tshirt",
    currentPrice: 401,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 599,
    imagePath: "/images/623c51f52ede39cbc92dcae0.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c51f52ede39cbc92dcadf"),
    name: "Nike Women's Sports Top",
    currentPrice: 1511,
    rating: 4.5,
    category: ObjectId("65870eaa47c94e7721c35d1c"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 2099,
    imagePath: "/images/623c51f52ede39cbc92dcadf.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b852b"),
    name: "Lenovo Legion 5 Gaming Laptop",
    currentPrice: 56099,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 65999,
    imagePath: "/images/623c654e700e7826693b852b.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b852a"),
    name: "Realme 5 Pro",
    currentPrice: 13119,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 15999,
    imagePath: "/images/623c654e700e7826693b852a.png",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b852e"),
    name: "Asus Zenfone Max Pro",
    currentPrice: 11999,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 14999,
    imagePath: "/images/623c654e700e7826693b852e.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b852c"),
    name: "Samsung Galaxy A51",
    currentPrice: 18039,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 21999,
    imagePath: "/images/623c654e700e7826693b852c.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b852d"),
    name: "HP Pavilion Gaming Laptop",
    currentPrice: 69599,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 79999,
    imagePath: "/images/623c654e700e7826693b852d.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b8532"),
    name: "Sony Wireless Headphones",
    currentPrice: 6019,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 8599,
    imagePath: "/images/623c654e700e7826693b8532.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b8531"),
    name: "Sony LED SmartTV",
    currentPrice: 19124,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 25499,
    imagePath: "/images/623c654e700e7826693b8531.png",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b852f"),
    name: "Dell Inspiron 3501",
    currentPrice: 40999,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 49999,
    imagePath: "/images/623c654e700e7826693b852f.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b8530"),
    name: "Lenovo K6 Power",
    currentPrice: 13089,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 16999,
    imagePath: "/images/623c654e700e7826693b8530.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b8535"),
    name: "Sony LCD HD TV",
    currentPrice: 15009,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 18999,
    imagePath: "/images/623c654e700e7826693b8535.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b8533"),
    name: "GIONEE Stylfit Smartwatch",
    currentPrice: 3500,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 6999,
    imagePath: "/images/623c654e700e7826693b8533.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c654e700e7826693b8534"),
    name: "BOAT Airdopes 131",
    currentPrice: 1525,
    rating: 4.5,
    category: ObjectId("65870ebaacccdf15d7ceeb30"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 2990,
    imagePath: "/images/623c654e700e7826693b8534.png",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8b9"),
    name: "Men's Zip Through Neck Jacket",
    currentPrice: 1709,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 2999,
    imagePath: "/images/623c6babede04db50878e8b9.png",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8ba"),
    name: "Woollen Muffler",
    currentPrice: 244,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 349,
    imagePath: "/images/623c6babede04db50878e8ba.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8bd"),
    name: "Calvin Klein Jean's Jacket",
    currentPrice: 2719,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 3999,
    imagePath: "/images/623c6babede04db50878e8bd.jpeg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8bc"),
    name: "Men's Regular Fit Hoodie",
    currentPrice: 1199,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1999,
    imagePath: "/images/623c6babede04db50878e8bc.jpeg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8bb"),
    name: "Women's Rayon Sweater",
    currentPrice: 1299,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1999,
    imagePath: "/images/623c6babede04db50878e8bb.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8c1"),
    name: "Women's Cotton Wrap Coat",
    currentPrice: 2474,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 3299,
    imagePath: "/images/623c6babede04db50878e8c1.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8bf"),
    name: "Woollen Cap and Neck warmer (set of 2)",
    currentPrice: 599,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 999,
    imagePath: "/images/623c6babede04db50878e8bf.jpeg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8c0"),
    name: "Women's Kashmiri Shawl",
    currentPrice: 1004,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1499,
    imagePath: "/images/623c6babede04db50878e8c0.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8be"),
    name: "Cotton Sweater Turtleneck",
    currentPrice: 800,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1999,
    imagePath: "/images/623c6babede04db50878e8be.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8c3"),
    name: "Men's Thermal Sweatshirt",
    currentPrice: 1189,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1699,
    imagePath: "/images/623c6babede04db50878e8c3.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8c4"),
    name: "Polyester Track Suit",
    currentPrice: 2807,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 3599,
    imagePath: "/images/623c6babede04db50878e8c4.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  },
  {
    _id: ObjectId("623c6babede04db50878e8c2"),
    name: "Woollen Beanie (set of 4)",
    currentPrice: 1007,
    rating: 4.5,
    category: ObjectId("65870eca38694ef238075105"),
    soldBy: ObjectId("6582582b9345fd962ccb8bc2"),
    originalPrice: 1599,
    imagePath: "/images/623c6babede04db50878e8c2.jpg",
    choices: [
      {
        name: "color",
        values: ["red", "black", "orange"]
      }
    ],
    specifications: [
      {
        name: "material",
        value: "fabric"
      }
    ]
  }
]);