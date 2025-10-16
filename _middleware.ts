import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // fbclid와 같은 파라미터가 있으면 제거
  if (url.searchParams.has('fbclid')) {
    url.searchParams.delete('fbclid');
    return NextResponse.redirect(url); // 파라미터가 제거된 URL로 리디렉션
  }

  return NextResponse.next();
}
