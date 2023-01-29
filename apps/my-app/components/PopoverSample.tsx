import { Popover, PopoverArrow, PopoverContent, PopoverTrigger } from '@ericsison/osprey';
import { FunctionComponent } from 'react';

export const PopoverSample: FunctionComponent = () => {
  return (
    <Popover>
      <PopoverTrigger>trigger</PopoverTrigger>
      <PopoverContent sideOffset={5}>
        <div className="max-w-xs">
          <p className="text-sm">The quick brown fox jumps over a lazy dog near the riverbanks.</p>
        </div>
        <PopoverArrow className="fill-white" width={20} height={10} />
      </PopoverContent>
    </Popover>
  );
};
