import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, body } = await req.json();

    if (!title) {
      return new NextResponse('Title is required', { status: 400 });
    }

    if (!body) {
      return new NextResponse('Body is required', { status: 400 });
    }

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ title, body, userId: 1 }),
    });
    const newPost = await res.json();
    return NextResponse.json(newPost);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
