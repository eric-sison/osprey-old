import { createContext } from 'react';
import { PopoverProps } from '@radix-ui/react-popover';

export type MyPopoverProps = Omit<PopoverProps, 'onOpenChange'>;

export type PopoverContextState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const PopoverContext = createContext({} as PopoverContextState);
