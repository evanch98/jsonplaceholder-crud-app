import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
