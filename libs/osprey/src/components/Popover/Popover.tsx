import { Root, Portal, Content, PopoverProps } from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import { FunctionComponent, useContext, useState } from 'react';
import { PopoverContext } from '../../utils/popover';

export const Popover: FunctionComponent<PopoverProps> = ({ children }) => {
  /**
   * initialize state to listen to the current open state of Popover.Root
   * expose this state via context so that it can be consumed by the Popover.Content
   */
  const [open, setOpen] = useState(false);

  return (
    <Root onOpenChange={(state) => setOpen(state)}>
      <PopoverContext.Provider value={{ open, setOpen }}>{children}</PopoverContext.Provider>
    </Root>
  );
};

export const PopoverContent = React.forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ children, ...props }, forwardedRef) => {
    /**
     * listen to the current value of Popover.Root's open state so it can be used
     * by AnimatePresence for controller the exit animation of PopoverContent
     */
    const { open } = useContext(PopoverContext);

    return (
      <AnimatePresence>
        {open ? (
          <Portal forceMount>
            <Content {...props} ref={forwardedRef} className="bg-white rounded-md px-3 py-2 shadow-xl" forceMount asChild>
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
