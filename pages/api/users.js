import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function usersHandler(req, res) {
  switch (req.method) {
  case 'POST': {
    const savedUsers = await prisma.user.create({
      data: JSON.parse(req.body)
    })

    res.status(201).json(savedUsers)
    break
  }
  case 'PUT': {
    const { id } = req.query

    const userData = JSON.parse(req.body)

    const response = await prisma.user.update({
      data: userData,
      where: {
        id
      }
    })
    res.status(200).json(response)
    break
  }
  case 'DELETE': {
    const { id } = req.query

    const deletedUser = await prisma.user.delete({
      where: {
        id
      }
    })

    res.status(200).json(deletedUser)
    break
  }
  }
}
