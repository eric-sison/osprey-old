import { FunctionComponent } from 'react';
import { Container } from '../components/Container';

export const MidnightColorsDemo: FunctionComponent = () => {
  return (
    <Container>
      <div className="space-y-5">
        <header>
          <h1 className="text-xl font-medium text-midnight-700 dark:text-midnight-200">Midnight</h1>
          <p className="text-sm text-midnight-600 dark:text-midnight-400">This shades of color is custom.</p>
        </header>
        <main className="flex flex-col">
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-50">50</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-100">100</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-200">200</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-300">300</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-400">400</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-500">500</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-600 text-midnight-50">600</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-700 text-midnight-100">700</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-800 text-midnight-200">800</div>
          <div className="h-10 w-40 flex items-center justify-center bg-midnight-900 text-midnight-200">900</div>
        </main>
      </div>
    </Container>
  );
};
