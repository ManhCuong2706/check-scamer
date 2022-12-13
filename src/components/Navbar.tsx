import { NavbarCount } from 'Models/NavbarCount';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi';

export interface NavbarProps {
  navCount: NavbarCount;
}

export function Navbar({ navCount }: NavbarProps) {
  const { scamCount, contentCount } = navCount;
  const navigate = useNavigate();
  return (
    <div className='text-center'>
      <h2 className='text-[#243238] text-3xl font-bold my-5'>
        KIỂM TRA & TỐ CÁO SCAMMER
      </h2>
      <p>
        Hiện có <span className='text-red-500 font-[700]'>{scamCount}</span>{' '}
        <b>dữ liệu Scam</b> &{' '}
        <span className='text-red-500 font-[700]'>{contentCount}</span>{' '}
        <b>nội dung tố cáo đang chờ duyệt</b> trên hệ thống
      </p>
      <p>Sẽ giúp bạn mua bán an toàn hơn khi online !!!</p>

      <div className='p-[0.5px] search h-[50px]  flex justify-center w-[60%] mx-auto my-5 relative '>
        <input
          type='text'
          placeholder='Nhập Sdt, Stk cần tìm ...'
          className='border h-full  rounded-lg w-full px-4 outline-none border-none ring-stone-500 focus:ring-blue-400 ring-2'
        />
        <BiSearchAlt2 className='absolute top-0 right-2 translate-y-[52%] text-2xl text-stone-500' />
      </div>

      <div className='flex justify-center align-middle my-6 '>
        <button
          onClick={() => {
            navigate('/report');
          }}
          className='w-56 mx-2 rounded-[8px] p-[6px] bg-red-600 hover:bg-red-500 text-white font-[600]'
        >
          Gửi tố cáo Scam
        </button>
        <button
          onClick={() => {
            navigate('/check');
          }}
          className='w-56 mx-2 rounded-[8px] p-[6px] bg-blue-600 hover:bg-blue-500 text-white font-[600]'
        >
          Check bảo hiểm CS
        </button>
      </div>
    </div>
  );
}
