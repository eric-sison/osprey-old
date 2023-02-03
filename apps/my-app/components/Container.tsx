import { FunctionComponent, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode | ReactNode[];
};

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 dark:bg-midnight-900">
      <div className="w-96 h-96 rounded-md flex items-center justify-center">{children}</div>
    </div>
  );
};
