import { FunctionComponent, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode | ReactNode[];
};

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 h-96 border border-slate-200 rounded-md flex items-center justify-center bg-slate-50 z-0">
        {children}
      </div>
    </div>
  );
};
