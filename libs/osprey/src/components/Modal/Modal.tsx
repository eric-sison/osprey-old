import { Root, DialogProps, Content, Portal, Overlay } from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, FunctionComponent, useContext, useState } from 'react';
import { ModalContext } from '../../utils/modal';

export const Modal: FunctionComponent<DialogProps> = ({ children, defaultOpen, modal = true, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Root
      // assign Popover.Root props
      open={isOpen}
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={setIsOpen}
    >
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>
    </Root>
  );
};

export const ModalContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ children, ...props }, forwardedRef) => {
    const { isOpen } = useContext(ModalContext);

    return (
      <AnimatePresence>
        {isOpen ? (
          <Portal forceMount>
            <div className="fixed inset-0 z-50 flex justify-center p-16">
              <Overlay asChild>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                />
              </Overlay>
              <Content {...props} ref={forwardedRef} asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="fixed w-96 h-96 bg-white z-50 rounded-md p-5 focus:outline-none"
                >
                  {children}
                </motion.div>
              </Content>
            </div>
          </Portal>
        ) : null}
      </AnimatePresence>
    );
  }
);
