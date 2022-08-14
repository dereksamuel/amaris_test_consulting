import { PrismaClient } from '@prisma/client'
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const prisma = new PrismaClient()

const errorResponse = (res) => {
  return res.status(401).json({
    error: 'You are NOT authorized to continue to the main session'
  })
}

export default async function loginHandler(req, res) {
  const body = JSON.parse(req.body)
  const { email, password } = body

  const dbUser = await prisma.user.findFirst({
    where: {
      email
    }
  })

  if (!dbUser) return errorResponse(res)

  // TODO: check if email and password are valid into DB => if email and password exists
  if (email === dbUser.email && password === dbUser.password) {
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      ...dbUser,
      password: null
    }, process.env.JWT_SECRET)

    const serializeToken = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: Math.floor(Date.now() / 1000) + (60 * 60),
      path: '/'
    })

    res.setHeader('Set-Cookie', serializeToken)
    return res.status(200).json({ success: 'Login was successfully' })
  }

  return errorResponse(res)
}
