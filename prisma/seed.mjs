import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Pizza Hot",
    price: 10,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },
  {
    name: "Nasi Goreng",
    price: 12,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },
  {
    name: "Mie Ayam",
    price: 15,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },
  {
    name: "Sate Ayam",
    price: 20,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },
  {
    name: "Burger",
    price: 25,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },
  {
    name: "Kentang Goreng",
    price: 10,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },
  {
    name: "Salad",
    price: 15,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },
  {
    name: "Sup Ayam",
    price: 20,
    category: "food",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712473974/card_3_ppvpvv.png",
  },

  {
    name: "Es Teh Manis",
    price: 5,
    category: "drink",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474119/drink3_qhulb9.png",
  },
  {
    name: "Jus Jeruk",
    price: 10,
    category: "drink",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474119/drink3_qhulb9.png",
  },
  {
    name: "Kopi Susu",
    price: 15,
    category: "drink",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474119/drink3_qhulb9.png",
  },
  {
    name: "Soda",
    price: 8,
    category: "drink",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474119/drink3_qhulb9.png",
  },

  {
    name: "Es Krim Vanilla",
    price: 10,
    category: "ice cream",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474119/drink3_qhulb9.png",
  },
  {
    name: "Es Krim Cokelat",
    price: 10,
    category: "ice cream",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
  },
  {
    name: "Es Krim Strawberry",
    price: 10,
    category: "ice cream",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
  },
  {
    name: "Es Krim Matcha",
    price: 10,
    category: "ice cream",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
  },

  {
    name: "Keripik Kentang",
    price: 5,
    category: "snack",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
  },
  {
    name: "Kacang Goreng",
    price: 5,
    category: "snack",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
  },
  {
    name: "Biskuit",
    price: 5,
    category: "snack",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
  },
  {
    name: "Popcorn",
    price: 5,
    category: "snack",
    img: "https://res.cloudinary.com/dixdqxpza/image/upload/v1712474136/snack5_dxu5ah.png",
  },
];

const foodType = [{name: "Bakar"}, {name: "Goreng"}, {name: "Bakar"}];

async function main() {
  const createdProducts = await Promise.all(
    products.map((productData) => {
      return prisma.product.create({data: productData});
    })
  );

  for (const product of createdProducts.slice(0, 8)) {
    for (const item of foodType) {
      await prisma.type.create({
        data: {
          name: item.name,
          product: {connect: {id: product.id}},
        },
      });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
