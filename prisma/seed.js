const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const data = [1, 2, 3].map(element => ({
  main_message: faker.lorem.lines(),
  url: element === 1 ? faker.image.cats() : ''
}))

const dataUser = [
  {
    password: 'admin123',
    email: '11hoogan@gmail.com',
    role: 'admin'
  },
  {
    password: 'editor123',
    email: 'JanethChanel@yahoo.com',
    role: 'editor'
  },
  {
    password: 'reader123',
    email: 'happyAngry@gmail.com',
    role: 'reader'
  }
]

const prisma = new PrismaClient()

async function main() {
  const promises = []

  data.forEach((item) => {
    promises.push(prisma.carrousel.create({
      data: item
    }))
  })

  await Promise.all(promises)

  // for login and auth
  const promisesUsers = []

  dataUser.forEach((item) => {
    promisesUsers.push(prisma.user.create({
      data: item
    }))
  })

  await Promise.all(promisesUsers)
}

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .then(() => {
    console.log('Done')
  })
