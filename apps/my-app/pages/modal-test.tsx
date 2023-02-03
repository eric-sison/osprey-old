import { ScrollableArea } from '@ericsison/osprey';
import { motion } from 'framer-motion';
import { SCROLLABLE_CONTENT } from '../mock/scrollable-content';

export default function ModalTest() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-100">
      <div className="space-y-5 h-full w-full flex items-center justify-center">
        <motion.div
          className="bg-white rounded-md shadow-xl shadow-slate-200 p-4 overflow-auto"
          initial={{ width: '20rem', maxHeight: '90%' }}
          //   animate={{
          //     style: {
          //       width: '25rem',
          //       height: '30rem',
          //     },
          //   }}
        ></motion.div>

        <div className="flex gap-2">
          <button>xs</button>
          <button>sm</button>
          <button>md</button>
          <button>lg</button>
          <button>xl</button>
          <button>fu</button>
        </div>
      </div>
    </div>
  );
}
