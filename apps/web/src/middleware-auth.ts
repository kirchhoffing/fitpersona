import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// This middleware handles authentication for protected routes
export async function authMiddleware(req: NextRequest) {
  // Get the pathname from the URL
  const pathname = req.nextUrl.pathname;
  
  // Define protected routes that require authentication
  // Adjust this array based on your application's routes
  const protectedRoutes = [
    '/dashboard',
    '/profile',
    '/workouts',
    '/settings',
    '/en/dashboard',
    '/tr/dashboard',
    '/de/dashboard',
    '/en/profile',
    '/tr/profile',
    '/de/profile'
  ];
  
  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  );
  
  // Only check auth for protected routes
  if (isProtectedRoute) {
    // Get the session token - this uses the database for validation
    const token = await getToken({ 
      req, 
      secret: process.env.NEXTAUTH_SECRET,
    });
    
    // If no token exists, redirect to login page
    if (!token) {
      // Store the original URL to redirect back after login
      const url = new URL('/auth/login', req.url);
      url.searchParams.set('callbackUrl', pathname);
      
      // Redirect to login page
      return NextResponse.redirect(url);
    }
  }
  
  // Allow the request to proceed
  return NextResponse.next();
}
