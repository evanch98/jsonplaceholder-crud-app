import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new NextResponse('Id is required', { status: 400 });
    }

    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
