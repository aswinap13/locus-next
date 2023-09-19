import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicpath = path === '/login' || path === '/signup' 
    const token = request.cookies.get('token')?.value || ''
    if(isPublicpath && token){
        return NextResponse.redirect(new URL('/profile',request.nextUrl))
    }
    if(!isPublicpath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
    const exam = path === '/profile/toExam'
    if(exam && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }
    if(exam && token){
        return NextResponse.redirect(new URL('/users',request.nextUrl))
    }
    const privateUser = path === '/users/'

    if(privateUser && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }

}
 


export const config = {
  matcher: [
    '/profile/:path*',
    '/login',
    '/signup',
    '/users/:path*'
    ],
}