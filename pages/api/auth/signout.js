import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { serialize } from 'cookie'

dotenv.config()

export default function logoutHandler(req, res) {
  const { authToken } = req.cookies

  if (!authToken) {
    return res.status(401).json({ error: 'You are NOT authenticated' })
  }

  try {
    jwt.verify(authToken, process.env.JWT_SECRET)

    const serializeToken = serialize('authToken', null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })

    res.setHeader('Set-Cookie', serializeToken)
    return res.status(200).json({ success: 'Logout was successfully' })
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}
