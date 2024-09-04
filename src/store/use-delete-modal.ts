import { create } from 'zustand';

type UseDeleteModalStore = {
  id?: number;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpen: (id: number) => void;
  onClose: () => void;
};

const useDeleteModal = create<UseDeleteModalStore>((set) => ({
  isOpen: false,
  onOpen: (id) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false }),
}));

export default useDeleteModal;
