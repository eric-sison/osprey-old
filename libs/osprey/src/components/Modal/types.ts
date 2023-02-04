import { ComponentPropsWithoutRef, createContext, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { Content } from '@radix-ui/react-dialog';

/**
 * Type used for modal's compound components - Title, Body, and Footer
 */
export type ModalCompositionProps = {
  children: ReactNode | ReactNode[];
};

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Custom type for combining Dialog.Content props and Modal compound components
 */
export type ModalContentComposition<T> = ForwardRefExoticComponent<
  ModalContentProps & RefAttributes<typeof Content>
> & {
  Title: T;
  Body: T;
  Footer: T;
};

/**
 * Custom type for ModalContent component
 */
export type ModalContentProps = ComponentPropsWithoutRef<typeof Content> & {
  fixedHeight?: boolean;
  center?: boolean;
  size?: ModalSize;
};

/**
 * Modal context state to keep track of modal's open state
 */
type ModalContextState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

/**
 * Initialize ModalContext
 */
export const ModalContext = createContext({} as ModalContextState);
