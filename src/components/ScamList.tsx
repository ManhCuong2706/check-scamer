import { Scamer } from 'Models';
import * as React from 'react';
import { FiEdit } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';
import { TfiEye } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

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
          className='h-[60px] leading-[60px] px-2 w-[70%] flex justify-between border border-spacing-1 mx-auto'
        >
          <Link
            to='/detail'
            className='flex justify-center align-middle items-center hover:text-blue-700 '
          >
            <FiEdit className='mr-2 text-blue-700 ' />
            <p>
              {i + 1} . {sc.name}
            </p>
          </Link>
          <div className='flex '>
            <div className='flex items-center mr-4'>
              <BiTimeFive className='mr-1 text-sky-400' />
              <p>{sc.date}</p>
            </div>
            <div className='flex items-center'>
              <TfiEye className='mr-1 text-amber-400' />
              <p>{sc.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
