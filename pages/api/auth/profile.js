import { verify } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default function profileHandler(req, res) {
  const { authToken } = req.cookies

  if (!authToken) {
    return res.status(401).json({ error: 'You are NOT authenticated' })
  }

  try {
    const user = verify(authToken, process.env.JWT_SECRET)

    return res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: 'invalid token' })
  }
}
