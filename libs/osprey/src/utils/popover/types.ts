import { ComponentPropsWithoutRef, createContext } from 'react';
import { PopoverProps, Content } from '@radix-ui/react-popover';

export type PopupProps = Omit<PopoverProps, 'onOpenChange'>;

export type PopupContentProps = ComponentPropsWithoutRef<typeof Content> & {
  arrow?: { width: number; height: number };
};

type PopupContextState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const PopupContext = createContext({} as PopupContextState);
