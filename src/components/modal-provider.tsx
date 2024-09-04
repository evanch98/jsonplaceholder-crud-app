'use client';

import { useEffect, useState } from 'react';
import { CreateModal } from './create-modal';
import { DeleteModal } from './delete-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateModal />
      <DeleteModal />
    </>
  );
};
