import { NextResponse } from 'next/server'

export function middleware(request, response, event) {
  // this logic is many routes
  // console.log(request.nextUrl.pathname)
  // event.waitUntil(
  //   fetch('https://my-analytics-platform.com', {
  //     method: 'POST',
  //     body: JSON.stringify({ pathname: req.nextUrl.pathname }),
  //   })
  // )

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // this logic is only dashboard
    return
  }
}

// this logic is default
export const config = {
  // any routes to v1 match
  matcher: ['/dashboard/:path*', '/login', '/register'],
}
