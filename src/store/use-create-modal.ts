import { create } from 'zustand';

type UseCreateModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useCreateModal = create<UseCreateModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateModal;
