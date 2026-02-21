import { NextResponse } from 'next/server';
const API_URL = process.env.API_URL;

// Proxy to protect routes

export default async function proxy(request) {
  const token = request.cookies.get('session')?.value;
  const {pathname} = request.nextUrl;
  
  if (!token) {
    if (pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  try {
    const response = await fetch(`${API_URL}/verify-token`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }      
    })

    if (response.ok) {
      if (pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
      return NextResponse.next();
    }

    throw new Error('Invalid Token');

  } catch (error) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('session');
    return response;
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'], // Rutas a proteger
};