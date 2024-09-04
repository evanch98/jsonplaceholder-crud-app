import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useCreateModal from '@/store/use-create-modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';
import { useData } from '@/store/use-data';

const formSchema = z.object({
  title: z.string().min(1).max(100),
  body: z.string().min(1),
});

export const CreateModal = () => {
  const router = useRouter();
  const { isOpen, onClose } = useCreateModal();

  const { addPost } = useData();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      body: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addPost({ title: values.title, body: values.body });
    form.reset();
    onClose();
    router.push('/posts');
  }

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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-end gap-y-6"
          >
            <div className="flex w-full flex-col gap-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex w-full items-center justify-center gap-x-2 space-y-0">
                    <FormLabel className="w-[82px] text-right">Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Post title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem className="flex w-full items-center justify-center gap-x-2 space-y-0">
                    <FormLabel className="w-[82px] text-right">Body</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Share your thoughts"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-x-2">
              <Button
                variant="outline"
                onClick={onClose}
                disabled={form.formState.isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={form.formState.isLoading}
              >
                Post
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
