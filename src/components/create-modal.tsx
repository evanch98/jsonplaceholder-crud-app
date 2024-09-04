import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useCreateModal from '@/store/use-create-modal';

export const CreateModal = () => {
  const { isOpen, onClose } = useCreateModal();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            You can write anything you want and post it without any limit.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
