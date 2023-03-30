import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request:NextRequest) {

    let isAuth = request.cookies.get('token')

    if (!isAuth) { // chưa đăng nhập
        if (request.nextUrl.pathname == "/") return NextResponse.rewrite(new URL("/sign", request.url))
        if (request.nextUrl.pathname == "/profile") return NextResponse.rewrite(new URL("/sign", request.url))
    } else { // đã đăng nhập
        if (request.nextUrl.pathname == "/sign") return NextResponse.redirect(new URL("/", request.url))
    }
}
