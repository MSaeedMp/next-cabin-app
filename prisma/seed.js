const { PrismaClient } = require("@prisma/client");
const cabins = require("./romance-cabins.json");
const prisma = new PrismaClient();

async function main() {
  for (const cabin of cabins) {
    await prisma.cabin.create({
      data: { ...cabin, userId: "3b661f43-cc48-4d63-a8ee-cf11f517d98b" },
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
