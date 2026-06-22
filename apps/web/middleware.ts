import { NextRequest, NextResponse } from 'next/server';

const REFERRAL_COOKIE = 'pp_referral_id';
const REFERRAL_PARAMS = ['ref', 'referral_id', 'utm_source'];
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { searchParams } = request.nextUrl;

  for (const param of REFERRAL_PARAMS) {
    const value = searchParams.get(param);
    if (value) {
      response.cookies.set(REFERRAL_COOKIE, value, {
        path: '/',
        maxAge: COOKIE_MAX_AGE,
        httpOnly: false,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      });
      break;
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|studio|api).*)',
  ],
};
