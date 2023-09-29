db = new Mongo().getDB("martcart");

db.createCollection("users", { capped: false });
db.createCollection("products", { capped: false });
db.createCollection("orders", { capped: false });

db.users.insert({
  _id: ObjectId("65155b1dc2731ad574a21dec"),
  firstname: "John",
  lastname: "Doe",
  username: "test_user",
  phone: "9988776655",
  email: "johndoe@test.com",
  password: "7f6f467575be3c486742105261a957e8c3984f7cfe08d04d6c22ff5ca2499f807b25ca8d7423a4be26cca5d1a03261de0ae973ff736eaa687b150805b377f527", // "qwerty"
  cart: [],
  joinDate: ISODate("2023-09-28T10:53:17.505+00:00"),
  __v: 0
});

db.products.insertMany([{
  _id: ObjectId("623c3ca2c8e443b2ca021970"),
  prod_name: "Nike Fraizer",
  img_url: "/static/img/shoe/nike_fraizer.png",
  price: 3699,
  discount_percent: 37,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa750fc"),
  prod_name: "Nike Air Max",
  img_url: "/static/img/shoe/nike_air_max.jpg",
  price: 7999,
  discount_percent: 17,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa750fb"),
  prod_name: "Nike Flyknit Trainer",
  img_url: "/static/img/shoe/nike_flyknit_trainer.jpg",
  price: 13999,
  discount_percent: 14,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa750ff"),
  prod_name: "Nike Air Presto",
  img_url: "/static/img/shoe/nike_air_presto.jpg",
  price: 11999,
  discount_percent: 20,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa750fd"),
  prod_name: "Nike Revolution 5",
  img_url: "/static/img/shoe/nike_revolution_5.jpg",
  price: 12999,
  discount_percent: 18,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa750fe"),
  prod_name: "Nike Air Zoom",
  img_url: "/static/img/shoe/nike_air_zoom.jpg",
  price: 9899,
  discount_percent: 19,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa75102"),
  prod_name: "Nike Air Pulse",
  img_url: "/static/img/shoe/nike_air_pulse.jpg",
  price: 8999,
  discount_percent: 22,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa75103"),
  prod_name: "Nike Air Force Next",
  img_url: "/static/img/shoe/nike_air_force_next.jpg",
  price: 7999,
  discount_percent: 12,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa75101"),
  prod_name: "Nike Air Jordan",
  img_url: "/static/img/shoe/nike_air_jordan.jpg",
  price: 17999,
  discount_percent: 16,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa75100"),
  prod_name: "Nike Air Force",
  img_url: "/static/img/shoe/nike_air_force.jpg",
  price: 13999,
  discount_percent: 21,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa75104"),
  prod_name: "Nike Air Force Cozi",
  img_url: "/static/img/shoe/nike_air_force_cozi.jpg",
  price: 10999,
  discount_percent: 18,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c440ebd094a352aa75105"),
  prod_name: "Nike Air Force Crater",
  img_url: "/static/img/shoe/nike_air_force_crater.jpg",
  price: 15999,
  discount_percent: 12,
  tags: [
    "shoe"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcad7"),
  prod_name: "Allen Solly Regular Fit Men's Tshirt",
  img_url: "/static/img/fashion/allensolly_men_tshirt.jpg",
  price: 999,
  discount_percent: 40,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcad6"),
  prod_name: "Turtle Men's Casual Tshirt",
  img_url: "/static/img/fashion/turtle_men_tshirt.png",
  price: 1699,
  discount_percent: 30,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcada"),
  prod_name: "Allen Solly Women's Casual Tshirt",
  img_url: "/static/img/fashion/allensolly_women_tshirt.jpg",
  price: 1699,
  discount_percent: 25,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcad9"),
  prod_name: "Calvin Klein Men's Casual Shirt",
  img_url: "/static/img/fashion/calvinklein_men_shirt.jpeg",
  price: 4999,
  discount_percent: 40,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcad8"),
  prod_name: "Peter England Men's Formal Shirt",
  img_url: "/static/img/fashion/peter_england_men_shirt.jpg",
  price: 1599,
  discount_percent: 37,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcadb"),
  prod_name: "Calvin Klein Women's Casual Top",
  img_url: "/static/img/fashion/calvinklein_women_tshirt.jpeg",
  price: 3699,
  discount_percent: 32,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcade"),
  prod_name: "Nike Men's Sleeveless Sports Shirt",
  img_url: "/static/img/fashion/nike_men_sleeveless.jpg",
  price: 2499,
  discount_percent: 32,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcadc"),
  prod_name: "Van Heusen Women's Formal Shirt",
  img_url: "/static/img/fashion/vanhuessen_women_shirt.jpg",
  price: 1699,
  discount_percent: 30,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcadd"),
  prod_name: "Levis Women's Casual Shirt",
  img_url: "/static/img/fashion/levis_women_shirt.jpg",
  price: 2999,
  discount_percent: 50,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcae1"),
  prod_name: "Puma Women's Tshirt",
  img_url: "/static/img/fashion/puma_women_tshirt.jpg",
  price: 999,
  discount_percent: 40,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcae0"),
  prod_name: "Puma Men's Tshirt",
  img_url: "/static/img/fashion/puma_men_tshirt.jpg",
  price: 599,
  discount_percent: 33,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c51f52ede39cbc92dcadf"),
  prod_name: "Nike Women's Sports Top",
  img_url: "/static/img/fashion/nike_women_sleeveless.jpg",
  price: 2099,
  discount_percent: 28,
  tags: [
    "fashion"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b852b"),
  prod_name: "Lenovo Legion 5 Gaming Laptop",
  img_url: "/static/img/technology/lenovo_legion_5.jpg",
  price: 65999,
  discount_percent: 15,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b852a"),
  prod_name: "Realme 5 Pro",
  img_url: "/static/img/technology/realme_5_pro.png",
  price: 15999,
  discount_percent: 18,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b852e"),
  prod_name: "Asus Zenfone Max Pro",
  img_url: "/static/img/technology/asus_zenfone_max_pro.jpg",
  price: 14999,
  discount_percent: 20,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b852c"),
  prod_name: "Samsung Galaxy A51",
  img_url: "/static/img/technology/samsung_galaxy_a51.jpg",
  price: 21999,
  discount_percent: 18,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b852d"),
  prod_name: "HP Pavilion Gaming Laptop",
  img_url: "/static/img/technology/hp_pavilion.jpg",
  price: 79999,
  discount_percent: 13,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b8532"),
  prod_name: "Sony Wireless Headphones",
  img_url: "/static/img/technology/sony_wireless_headphone.jpg",
  price: 8599,
  discount_percent: 30,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b8531"),
  prod_name: "Sony LED SmartTV",
  img_url: "/static/img/technology/sony_led_smart_tv.png",
  price: 25499,
  discount_percent: 25,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b852f"),
  prod_name: "Dell Inspiron 3501",
  img_url: "/static/img/technology/dell_inspiron.jpg",
  price: 49999,
  discount_percent: 18,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b8530"),
  prod_name: "Lenovo K6 Power",
  img_url: "/static/img/technology/lenovo_k6_power.jpg",
  price: 16999,
  discount_percent: 23,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b8535"),
  prod_name: "Sony LCD HD TV",
  img_url: "/static/img/technology/sony_lcd_tv.jpg",
  price: 18999,
  discount_percent: 21,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b8533"),
  prod_name: "GIONEE Stylfit Smartwatch",
  img_url: "/static/img/technology/gionee_stylfit_smart_watch.jpg",
  price: 6999,
  discount_percent: 50,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c654e700e7826693b8534"),
  prod_name: "BOAT Airdopes 131",
  img_url: "/static/img/technology/boat_airdopes.png",
  price: 2990,
  discount_percent: 49,
  tags: [
    "technology"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8b9"),
  prod_name: "Men's Zip Through Neck Jacket",
  img_url: "/static/img/winterwear/men_zip_jacket.png",
  price: 2999,
  discount_percent: 43,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8ba"),
  prod_name: "Woollen Muffler",
  img_url: "/static/img/winterwear/woollen_muffler.jpg",
  price: 349,
  discount_percent: 30,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8bd"),
  prod_name: "Calvin Klein Jean's Jacket",
  img_url: "/static/img/winterwear/jeans_jacket.jpeg",
  price: 3999,
  discount_percent: 32,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8bc"),
  prod_name: "Men's Regular Fit Hoodie",
  img_url: "/static/img/winterwear/men_hoodie.jpeg",
  price: 1999,
  discount_percent: 40,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8bb"),
  prod_name: "Women's Rayon Sweater",
  img_url: "/static/img/winterwear/women_rayon_sweater.jpg",
  price: 1999,
  discount_percent: 35,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8c1"),
  prod_name: "Women's Cotton Wrap Coat",
  img_url: "/static/img/winterwear/women_wrap_coat.jpg",
  price: 3299,
  discount_percent: 25,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8bf"),
  prod_name: "Woollen Cap and Neck warmer (set of 2)",
  img_url: "/static/img/winterwear/cap_neck_warmer_set.jpeg",
  price: 999,
  discount_percent: 40,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8c0"),
  prod_name: "Women's Kashmiri Shawl",
  img_url: "/static/img/winterwear/women_kashmiri_shawl.jpg",
  price: 1499,
  discount_percent: 33,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8be"),
  prod_name: "Cotton Sweater Turtleneck",
  img_url: "/static/img/winterwear/turtle_neck_sweater.jpg",
  price: 1999,
  discount_percent: 60,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8c3"),
  prod_name: "Men's Thermal Sweatshirt",
  img_url: "/static/img/winterwear/men_sweatshirt.jpg",
  price: 1699,
  discount_percent: 30,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8c4"),
  prod_name: "Polyester Track Suit",
  img_url: "/static/img/winterwear/track_suit.jpg",
  price: 3599,
  discount_percent: 22,
  tags: [
    "winterwear"
  ],
  __v: 0
},{
  _id: ObjectId("623c6babede04db50878e8c2"),
  prod_name: "Woollen Beanie (set of 4)",
  img_url: "/static/img/winterwear/beanie_set.jpg",
  price: 1599,
  discount_percent: 37,
  tags: [
    "winterwear"
  ],
  __v: 0
}]);