import { createContext } from 'react';

type ModalContextState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const ModalContext = createContext({} as ModalContextState);
