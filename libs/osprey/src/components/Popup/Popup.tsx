import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import { Root, Portal, Content } from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent, useContext, useState } from 'react';
import { MyPopoverProps, PopupContext } from '../../utils/popover';

/**
 * Abstraction component for Popover.Root
 */
export const Popup: FunctionComponent<MyPopoverProps> = ({ children, defaultOpen, modal, open = false }) => {
  /**
   * initialize state to listen to the current open state of Popover.Root
   * expose this state via context so that it can be consumed by the Popover.Content
   */
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Root
      // assign Popover.Root props
      open={isOpen}
      defaultOpen={defaultOpen}
      modal={modal}
      onOpenChange={setIsOpen}
    >
      <PopupContext.Provider value={{ isOpen, setIsOpen }}>{children}</PopupContext.Provider>
    </Root>
  );
};

/**
 * Abstraction component for Popover.Content
 */
export const PopupContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ children, ...props }, forwardedRef) => {
    /**
     * listen to the current value of Popover.Root's open state so it can be used
     * by AnimatePresence for controller the exit animation of PopoverContent
     */
    const { isOpen } = useContext(PopupContext);

    return (
      <AnimatePresence>
        {isOpen ? (
          <Portal forceMount>
            <Content
              {...props}
              ref={forwardedRef}
              className="bg-white rounded-md px-3 py-2 shadow-xl focus:outline-none"
              asChild
            >
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            </Content>
          </Portal>
        ) : null}
      </AnimatePresence>
    );
  }
);
