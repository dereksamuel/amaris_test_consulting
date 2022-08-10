const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const data = [1, 2, 3, 4, 5, 6].map(() => ({
  main_message: faker.lorem.lines(),
  url: faker.image.cats()
}))

const prisma = new PrismaClient()

async function main() {
  const promises = []

  data.forEach((item) => {
    promises.push(prisma.carrousel.create({
      data: item
    }))
  })

  await Promise.all(promises)
}

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .then(() => {
    console.log('Done')
  })
