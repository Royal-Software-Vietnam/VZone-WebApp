import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request:NextRequest) {

    let isAuth = request.cookies.get('token')
    const requestHeaders = new Headers(request.headers)

    if (!isAuth) {
        if (request.nextUrl.pathname == "/") return NextResponse.rewrite(new URL("/sign", request.url))
        if (request.nextUrl.pathname == "/profile") return NextResponse.rewrite(new URL("/sign", request.url))
    } else {
        if (request.nextUrl.pathname == "/sign") return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
}
