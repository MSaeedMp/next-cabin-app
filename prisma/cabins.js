const romance = require("./romance-cabins.json");
const eat = require("./eat-cabins.json");
const outdoor = require("./outdoor-cabins.json");
const relaxation = require("./relaxation-cabins.json");
const beach = require("./beach-cabins.json");
const ski = require("./ski-cabins.json");
const city = require("./city-cabins.json");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cabins = [
  ...romance,
  ...eat,
  ...outdoor,
  ...relaxation,
  ...beach,
  ...ski,
  ...city,
];

async function main() {
  for (const cabin of cabins) {
    await prisma.cabin.create({
      data: { ...cabin, userId: "f4b98c61-a810-48c2-9f6c-6a2a784f01e1" },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
