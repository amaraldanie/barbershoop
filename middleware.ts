import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const { pathname } = req.nextUrl

  const isLoggedIn = !!token
  const role = token?.role as string | undefined

  // 🔥 rotas públicas
  const publicRoutes = ["/", "/api/auth"]

  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  // 🔒 se não logado, manda pro login
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // 🚀 REDIRECT AUTOMÁTICO PÓS LOGIN (entrada base)
  if (pathname === "/dashboard" && role === "BARBER") {
    return NextResponse.redirect(new URL("/barber", req.url))
  }

  if (pathname === "/dashboard" && role === "ADMIN") {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  if (pathname === "/barber" && role !== "BARBER" && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  if (pathname === "/admin" && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}

// 🔥 IMPORTANTÍSSIMO: define onde o middleware roda
export const config = {
  matcher: ["/dashboard/:path*", "/barber/:path*", "/admin/:path*"],
}
