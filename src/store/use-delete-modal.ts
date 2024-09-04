import { create } from 'zustand';

type UseDeleteModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useDeleteModal = create<UseDeleteModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDeleteModal;
