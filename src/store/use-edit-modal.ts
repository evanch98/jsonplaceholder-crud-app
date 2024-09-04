import { create } from 'zustand';

type UseEditModalStore = {
  id?: number;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpen: (id: number) => void;
  onClose: () => void;
};

const useEditModal = create<UseEditModalStore>((set) => ({
  isOpen: false,
  onOpen: (id) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditModal;
