import { Popup, PopupContent, PopupTrigger } from '@ericsison/osprey';
import { FunctionComponent } from 'react';

export const PopupSample: FunctionComponent = () => {
  return (
    <Popup>
      <PopupTrigger asChild>
        <button className="bg-green-600 text-white px-5 py-2 rounded-md active:scale-95 transition-transform duration-75">
          Popup
        </button>
      </PopupTrigger>
      <PopupContent sideOffset={10} side="bottom" arrow={{ width: 20, height: 10 }}>
        <div className="w-64">The quick brown fox jumps over a lazy dog near the riverbanks.</div>
      </PopupContent>
    </Popup>
  );
};
