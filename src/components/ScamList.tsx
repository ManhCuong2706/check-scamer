import { Scamer } from 'Models';
import * as React from 'react';

export interface ScamlistProps {
  ScList: Scamer[];
  scamerCount: number;
}

export function Scamlist({ ScList, scamerCount }: ScamlistProps) {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  return (
    <div className='text-center'>
      <p className='text-blue-700 my-3'>
        {currentDate} CÓ {scamerCount} SCAM BỊ TỐ CÁO
      </p>
      {ScList.map((sc, i) => (
        <div
          key={sc.id}
          className='h-[60px] leading-[60px] px-2 w-[70%] flex border border-spacing-1 mx-auto'
        >
          <div>
            <p>
              {i + 1}.{sc.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
