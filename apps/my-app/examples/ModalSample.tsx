import { Modal, ModalTrigger, ModalContent, ModalTitle, ModalClose, ModalDescription } from '@ericsison/osprey';
import { FunctionComponent } from 'react';

export const ModalSample: FunctionComponent = () => {
  return (
    <Modal>
      <ModalTrigger>open</ModalTrigger>
      <ModalContent>
        <ModalClose>x</ModalClose>
        <ModalTitle asChild>
          <p>Lorem ipsum dolor sit amet.</p>
        </ModalTitle>
        <ModalDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam, a iste atque corrupti perferendis ea in
          sequi non laboriosam assumenda sapiente fugiat iure ullam totam harum accusantium! Voluptates deleniti
          molestias ipsam dolores, itaque in! Aperiam placeat incidunt autem quasi culpa? Voluptate libero accusamus
          reprehenderit mollitia error? Eaque, perspiciatis non?
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
};
