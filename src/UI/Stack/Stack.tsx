import './stack.css'

type StackProps = {
  stack: string;
};

export default function Stack({ stack }: StackProps) {
  return (
    <div className='pl-2 pr-2 h-[20px] min-w-1 rounded-2xl bg-[rgba(255,111,60,0.30)] border border-[#FF6F3C]
        flex items-center justify-center whitespace-nowrap
    '>
        <p className='text-[#FF6F3C] text-[12px]'>{stack}</p>
    </div>
  );
}