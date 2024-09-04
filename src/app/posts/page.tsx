'use client';

import { PostCard } from '@/components/post-card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useCreateModal from '@/store/use-create-modal';
import { useData } from '@/store/use-data';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PostsPage = () => {
  const router = useRouter();
  const { onOpen } = useCreateModal();

  const { posts, fetchPosts } = useData();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <main className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-y-6 pb-4 pt-16">
      <div className="flex w-full flex-col items-center justify-center gap-y-6">
        <div className="flex flex-col items-center justify-center gap-y-1">
          <h1 className="text-4xl font-semibold text-primary">
            Powered by JSONPlaceholder.
          </h1>
          <p className="text-muted-foreground">
            The posts are from JSONPlaceholder. You can create, read, update,
            and delete posts.
          </p>
        </div>
        <div className="flex gap-x-4">
          <Button onClick={onOpen}>Create a post</Button>
          <Button
            variant="outline"
            onClick={() => router.push('/')}
          >
            Home
          </Button>
        </div>
        <Separator />
      </div>
      <div className="flex w-full flex-col gap-y-2">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </main>
  );
};

export default PostsPage;
