import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import { Root, Portal, Content } from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent, useContext, useState } from 'react';
import { MyPopoverProps, PopoverContext } from '../../utils/popover';

/**
 * Abstraction component for Popover.Root
 */
export const Popover: FunctionComponent<MyPopoverProps> = ({ children, defaultOpen, modal, open = false }) => {
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
      onOpenChange={(state) => setIsOpen(state)}
    >
      <PopoverContext.Provider value={{ isOpen, setIsOpen }}>{children}</PopoverContext.Provider>
    </Root>
  );
};

/**
 * Abstraction component for Popover.Content
 */
export const PopoverContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ children, ...props }, forwardedRef) => {
    /**
     * listen to the current value of Popover.Root's open state so it can be used
     * by AnimatePresence for controller the exit animation of PopoverContent
     */
    const { isOpen } = useContext(PopoverContext);

    return (
      <AnimatePresence>
        {isOpen ? (
          <Portal forceMount>
            <Content
              {...props}
              ref={forwardedRef}
              className="bg-white rounded-md px-3 py-2 shadow-xl focus:outline-none"
              forceMount
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
