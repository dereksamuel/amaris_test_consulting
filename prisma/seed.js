const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const data = [1, 2, 3].map(element => ({
  main_message: faker.lorem.lines(),
  url: element === 1 ? faker.image.cats() : ''
}))

const dataUser = [
  {
    email: '11hoogan@gmail.com',
    password: 'admin123'
  },
  {
    email: 'JanethChanel@yahoo.com',
    password: 'editor123'
  },
  {
    email: 'happyAngry@gmail.com',
    password: 'reader123'
  }
].map((element, index) => ({
  ...element,
  role: index === 0 ? 'admin' : (index === 1 ? 'editor' : 'reader')
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

  // for login and auth
  const promisesRoles = []

  dataUser.forEach((item) => {
    promisesRoles.push(prisma.user.create({
      data: item
    }))
  })

  await Promise.all(promisesRoles)
}

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .then(() => {
    console.log('Done')
  })
