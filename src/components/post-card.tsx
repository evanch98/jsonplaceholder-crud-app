import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Post } from '@/store/use-data';
import useDeleteModal from '@/store/use-delete-modal';
import useEditModal from '@/store/use-edit-modal';
import { EllipsisVertical, Pen, Trash } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const { onOpen: onOpenDeleteModal } = useDeleteModal();
  const { onOpen: onOpenEditModal } = useEditModal();

  return (
    <Card key={post.id}>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <CardTitle>{post.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                size="icon"
              >
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Button
                variant="ghost"
                onClick={() => onOpenEditModal(post.id, post.title, post.body)}
                className="flex w-full items-center justify-start gap-x-2"
              >
                <Pen className="size-4" />
                Edit
              </Button>
              <Button
                variant="ghost"
                onClick={() => onOpenDeleteModal(post.id)}
                className="flex w-full items-center justify-start gap-x-2"
              >
                <Trash className="size-4 text-destructive" />
                <p className="text-destructive">Delete</p>
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <p>{post.body}</p>
      </CardContent>
    </Card>
  );
};
