/* eslint-disable indent */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client'
import { verify } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const authToken = req.cookies.authToken

  if (authToken) {
    const user = verify(authToken, process.env.JWT_SECRET)

    if (user.role === 'admin' || user.role === 'editor') {
      switch (req.method) {
        case 'POST': {
          const savedCarrousel = await prisma.carrousel.create({
            data: JSON.parse(req.body)
          })

          res.status(201).json(savedCarrousel)
          break
        }

        case 'PUT': {
          const { id } = req.query

          const carrouselData = JSON.parse(req.body)

          const response = await prisma.carrousel.update({
            data: carrouselData,
            where: {
              id
            }
          })
          res.status(200).json(response)
          break
        }

        case 'DELETE': {
          const { id } = req.query

          const deletedCarrousel = await prisma.carrousel.delete({
            where: {
              id
            }
          })

          res.status(200).json(deletedCarrousel)
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
