import cx from 'classnames';

export const styles = {
  /**
   * popup styles for PopupContent
   */
  content: cx(
    'px-4 py-3 bg-white text-midnight-700 rounded-md shadow-xl shadow-slate-200 focus:outline-none dark:bg-midnight-800 dark:text-midnight-200 dark:shadow-none'
  ),

  /**
   * popup styles for Popover.Arrow
   */
  arrow: cx('fill-white dark:fill-midnight-800'),
};
