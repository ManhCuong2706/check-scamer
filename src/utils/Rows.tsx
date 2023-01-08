import * as React from 'react';

export interface RowsProps {
  icon: React.ReactNode;
  label: string;
  data: any;
  isBorder?: boolean;
}

export function Rows({ icon, label, data, isBorder=true }: RowsProps) {
  return (
    <div className={isBorder ? 'border-b flex py-[15px]  p-5' : 'flex py-[15px]  p-5'}>
      <div className='flex items-center w-[40%]'>
        <span className='text-xl'>{icon}</span>
        <p className='ml-2 font-[600]'>{label} </p>
      </div>
      <div className='ml-5 capitalize w-[60%]'>{data}</div>
    </div>
  );
}
