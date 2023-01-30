import { forwardRef } from 'react';
import { Root, Portal, Content, Arrow } from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent, useContext, useState } from 'react';
import { PopupProps, PopupContext, PopupContentProps } from '../../utils/popover';

/**
 * Abstraction component for Popover.Root
 */
export const Popup: FunctionComponent<PopupProps> = ({ children, defaultOpen, modal, open = false }) => {
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
export const PopupContent = forwardRef<HTMLDivElement, PopupContentProps>(
  ({ children, className, arrow, ...props }, forwardedRef) => {
    /**
     * listen to the current value of Popover.Root's open state so it can be used
     * by AnimatePresence for controller the exit animation of PopoverContent
     */
    const { isOpen } = useContext(PopupContext);

    // const side = props.side;

    const variants = {
      /**
       * animation values for when popup is visible
       */
      visible: { opacity: 1, y: 0, x: 0 },
      /**
       * animation values for when popup is hidden
       */
      hidden:
        // if side prop is top
        props.side === 'top'
          ? { opacity: 0, y: 5, x: 0 }
          : // if side prop is right
          props.side === 'right'
          ? { opacity: 0, y: 0, x: -5 }
          : // if side prop is bottom
          props.side === 'bottom'
          ? { opacity: 0, y: -5, x: 0 }
          : // if side prop is left
            { opacity: 0, y: 0, x: 5 },
    };

    return (
      <AnimatePresence>
        {isOpen ? (
          <Portal forceMount>
            <Content
              {...props}
              ref={forwardedRef}
              asChild
              className={`${className} px-4 py-3 bg-white rounded-md shadow-xl shadow-slate-200 focus:outline-none dark:bg-zinc-800 dark:text-zinc-200 dark:shadow-none`}
            >
              <motion.div
                animate="visible"
                initial="hidden"
                exit="hidden"
                transition={{ duration: 0.2 }}
                variants={variants}
              >
                {arrow && <Arrow width={arrow.width} height={arrow.height} className="fill-white dark:fill-zinc-800" />}
                {children}
              </motion.div>
            </Content>
          </Portal>
        ) : null}
      </AnimatePresence>
    );
  }
);
