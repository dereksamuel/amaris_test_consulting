/* eslint-disable indent */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
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
}
