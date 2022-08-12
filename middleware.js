import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const token = request.cookies.get('authToken')

  if (request.nextUrl.pathname.includes('/admin')) {
    if (token === undefined) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    try {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))
      return NextResponse.next()
    } catch (error) {
      console.error(error)
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}
