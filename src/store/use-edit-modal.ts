import { create } from 'zustand';

type UseEditModalStore = {
  id?: number;
  title?: string;
  body?: string;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpen: (id: number, title: string, body: string) => void;
  onClose: () => void;
};

const useEditModal = create<UseEditModalStore>((set) => ({
  isOpen: false,
  onOpen: (id, title, body) => set({ isOpen: true, id, title, body }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditModal;
