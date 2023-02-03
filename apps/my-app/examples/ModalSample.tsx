import { Modal, ModalTrigger, ModalContent, ModalSize } from '@ericsison/osprey';
// import { ModalSize } from 'libs/osprey/src/components/Modal/Modal.styles';
import { FunctionComponent, useState } from 'react';
import { SCROLLABLE_CONTENT } from '../mock/scrollable-content';

export const ModalSample: FunctionComponent = () => {
  const [size, setSize] = useState<ModalSize>('xs');

  return (
    <Modal>
      <ModalTrigger>open</ModalTrigger>
      <ModalContent fixedHeight={true} size={size} center={true}>
        <div className="flex gap-1 pt-2 px-2">
          <button className="px-2 py-1 rounded-md bg-slate-100 h-10 w-10" onClick={() => setSize('xs')}>
            xs
          </button>
          <button className="px-2 py-1 rounded-md bg-slate-100 h-10 w-10" onClick={() => setSize('sm')}>
            sm
          </button>
          <button className="px-2 py-1 rounded-md bg-slate-100 h-10 w-10" onClick={() => setSize('md')}>
            md
          </button>
          <button className="px-2 py-1 rounded-md bg-slate-100 h-10 w-10" onClick={() => setSize('lg')}>
            lg
          </button>
          <button className="px-2 py-1 rounded-md bg-slate-100 h-10 w-10" onClick={() => setSize('xl')}>
            xl
          </button>
          <button
            className="px-2 py-1 rounded-md bg-slate-100 h-10 w-10"
            onClick={() => {
              setSize('full');
            }}
          >
            fu
          </button>
        </div>
        <ModalContent.Title>{size}</ModalContent.Title>
        <ModalContent.Body>{SCROLLABLE_CONTENT}</ModalContent.Body>
        <ModalContent.Footer>Test footer</ModalContent.Footer>
      </ModalContent>
    </Modal>
  );
};
