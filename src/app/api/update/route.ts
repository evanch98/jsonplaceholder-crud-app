import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  try {
    const { id, title, body } = await req.json();

    if (!id) {
      return new NextResponse('Id is required', { status: 400 });
    }

    if (!title) {
      return new NextResponse('Title is required', { status: 400 });
    }

    if (!body) {
      return new NextResponse('Body is required', { status: 400 });
    }

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ id, title, body }),
      },
    );
    const updatedPost = await res.json();
    return NextResponse.json(updatedPost);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
