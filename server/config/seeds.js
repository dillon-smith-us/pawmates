const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Large-dogs" },
    { name: "medium-dogs" },
    { name: "small-dogs" },
    { name: "toy-dogs" },
    { name: "all-dogs" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Spot",
      description: "Spot is a friendly great dane in need of more friends!",
      image: "greatdane.jpg",
      category: categories[0]._id,
      zipcode: 55418,
      quantity: 500,
    },
    {
      name: "Scout",
      description:
        "Scout is an awesome saint bernard puppy with lots of energy!",
      image: "saintbernard.jpg",
      category: categories[0]._id,
      zipcode: 55498,
      quantity: 500,
    },
    {
      name: "Indy",
      category: categories[1]._id,
      description: "Indy is a terrier looking for friends in Plymouth!",
      image: "terrier.jpg",
      zipcode: 55987,
      quantity: 20,
    },
    {
      name: "Freckles",
      category: categories[1]._id,
      description:
        "Freckles is a rescue dog who needs more friends for social interaction!",
      image: "rescuedog.jpg",
      zipcode: 55123,
      quantity: 50,
    },
    {
      name: "Teddy",
      category: categories[1]._id,
      description:
        "Teddy is an english terrier with more energy than you can imagine!",
      image: "englishterrier.jpg",
      zipcode: 55401,
      quantity: 100,
    },
    {
      name: "Bells",
      category: categories[2]._id,
      description: "Bella is 4 months old! needs puppy playmates now!!",
      image: "bostonterrier.jpg",
      zipcode: 55403,
      quantity: 30,
    },
    {
      name: "Daisy",
      category: categories[2]._id,
      description:
        "Daisy is a blue nose staffordshire puppy with timid tendencies. She needs a few more puppy friends",
      image: "bluenoseterrier.jpg",
      zipcode: 55405,
      quantity: 30,
    },
    {
      name: "Luna",
      category: categories[3]._id,
      description:
        "Luna is a chihuahua. She loves playing with other chihuahuas!",
      image: "chihuahua.jpg",
      zipcode: 55408,
      quantity: 100,
    },
    {
      name: "Zoe",
      category: categories[0]._id,
      description:
        "Zoe is a pyranese pup 2 months old. Would love to find other large breed pups for zoe to play with.",
      image: "pyranese.jpg",
      zipcode: 55411,
      quantity: 1000,
    },
    {
      name: "Piper",
      category: categories[3]._id,
      description:
        "Piper is a havanese puppy. She needs other toy-breed friends in Dinky town!",
      image: "havanese-puppy.jpg",
      zipcode: 55418,
      quantity: 1000,
    },
    {
      name: "Milo",
      category: categories[0]._id,
      description:
        "Milo is a golden retriever! He is four months old, and a true airbud!",
      image: "puppy-golden.jpg",
      zipcode: 55498,
      quantity: 100,
    },
    {
      name: "Ollie",
      category: categories[3]._id,
      description:
        "Ollie is a golden doodle, he is a 1 year old shelter pup. We would love to meetup in south saint paul!",
      image: "goldendoodle.jpg",
      zipcode: 55404,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
