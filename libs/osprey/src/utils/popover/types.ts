import { createContext } from 'react';
import { PopoverProps } from '@radix-ui/react-popover';

export type MyPopoverProps = Omit<PopoverProps, 'onOpenChange'>;

type PopupContextState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const PopupContext = createContext({} as PopupContextState);
