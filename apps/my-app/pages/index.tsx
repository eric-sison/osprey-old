import { PopoverSample } from '../components/PopoverSample';

export function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 h-96 border border-slate-200 rounded-md flex items-center justify-center bg-slate-50">
        <PopoverSample />
      </div>
    </div>
  );
}

export default Index;
