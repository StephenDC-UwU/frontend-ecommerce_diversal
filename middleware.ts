import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const jwt = request.cookies.get('jwt')
    const { pathname } = request.nextUrl

    // Define protected routes here
    // For now, we'll just example protecting a 'dashboard' or 'profile' route if they existed
    // But typically checkout or profile pages are protected.
    const protectedRoutes = ['/profile', '/checkout']

    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    if (isProtectedRoute && !jwt) {
        // Redirect to login if trying to access a protected route without auth
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Redirect to home if trying to access login/register while already authenticated
    if ((pathname === '/login' || pathname === '/register') && jwt) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
