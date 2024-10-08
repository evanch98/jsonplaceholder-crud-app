'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-full w-full flex-col items-center justify-center px-2">
      <div className="flex w-full flex-col items-center justify-center gap-y-6">
        <div className="flex flex-col items-center justify-center gap-y-1">
          <h1 className="text-center text-4xl font-semibold text-primary">
            Powered by JSONPlaceholder.
          </h1>
          <p className="text-center text-muted-foreground">
            The posts are from JSONPlaceholder. You can create, read, update,
            and delete posts.
          </p>
        </div>
        <div className="flex gap-x-4">
          <Button onClick={() => router.push('/posts')}>Get started</Button>
        </div>
      </div>
    </main>
  );
}
