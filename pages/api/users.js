import { PrismaClient } from '@prisma/client'
import { verify } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

export default async function usersHandler(req, res) {
  const authToken = req.cookies.authToken

  if (authToken) {
    const user = verify(authToken, process.env.JWT_SECRET)

    if (user.role === 'admin') {
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
    } else {
      res.status(401).json({ error: 'You have not enough permissions' })
    }
  } else {
    res.status(401).json({ error: 'You are not authenticate' })
  }
}
