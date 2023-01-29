import { createContext } from 'react';

export type PopoverContextState = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

export const PopoverContext = createContext({} as PopoverContextState);
