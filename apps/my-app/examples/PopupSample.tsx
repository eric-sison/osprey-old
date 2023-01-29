import { Popup, PopupArrow, PopupContent, PopupTrigger } from '@ericsison/osprey';
import { FunctionComponent } from 'react';

export const PopupSample: FunctionComponent = () => {
  return (
    <Popup>
      <PopupTrigger>trigger</PopupTrigger>
      <PopupContent sideOffset={5}>
        <div className="max-w-xs space-y-2">
          <p className="text-sm">The quick brown fox jumps over a lazy dog near the riverbanks.</p>
          <button className="border px-3 py-1 rounded-md border-gray-200 text-xs">Go here..</button>
        </div>
        <PopupArrow className="fill-white" width={20} height={10} />
      </PopupContent>
    </Popup>
  );
};
