import cx from 'classnames';

export const styles = {
  /**
   * popup styles for PopupContent
   */
  content: cx(
    'px-4 py-3 bg-white text-slate-700 rounded-md shadow-xl shadow-slate-200 focus:outline-none dark:bg-zinc-800 dark:text-zinc-300 dark:shadow-none'
  ),

  /**
   * popup styles for Popover.Arrow
   */
  arrow: cx('fill-white dark:fill-zinc-800'),
};
