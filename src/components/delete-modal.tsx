import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useData } from '@/store/use-data';
import useDeleteModal from '@/store/use-delete-modal';
import { useRouter } from 'next/navigation';

export const DeleteModal = () => {
  const router = useRouter();
  const { isOpen, onClose, id } = useDeleteModal();

  const { deletePost } = useData();

  const handleDelete = () => {
    deletePost(id!);
    onClose();
    router.refresh();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <div className="flex w-full justify-end gap-x-2">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
          >
            <p className="text-destructive-foreground">Delete</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
