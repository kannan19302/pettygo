import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Example: Require a session cookie for all /api/studio/* routes
  if (req.nextUrl.pathname.startsWith('/api/studio')) {
    const session = req.cookies.get('session');
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/studio/:path*'],
};
