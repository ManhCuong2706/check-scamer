import { NavbarCount } from 'Models/NavbarCount';
import { ScamDetailContext } from 'client/contexts/ScamDetailContext';
import { scammerList } from 'Models';
import { useContext } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { NavLink, redirect } from 'react-router-dom';

export interface NavbarProps {
  navCount: NavbarCount;
}

export function Navbar({ navCount }: NavbarProps) {
  const { onSubmit } = useContext(ScamDetailContext);
  const { scamCount, contentCount } = navCount;


  const handleSearch = (e: any) => {
    const qStrg = e.target.value;
    let arr =[];
    if (e.key === 'Enter') {
      arr.push( scammerList.filter((item) => item?.phone === qStrg || item?.bankNumber === qStrg))
      onSubmit(arr);
    }
  };

  const handleClick = () => {redirect('/report');}
  return (
    <div className='text-center'>
      <h2 className='text-[#243238] text-3xl font-bold my-5'>KIỂM TRA & TỐ CÁO SCAMMER</h2>
      <p>
        Hiện có <span className='text-red-500 font-[700]'>{scamCount}</span> <b>dữ liệu Scam</b> &{' '}
        <span className='text-red-500 font-[700]'>{contentCount}</span>{' '}
        <b>nội dung tố cáo đang chờ duyệt</b> trên hệ thống
      </p>
      <p>Sẽ giúp bạn mua bán an toàn hơn khi online !!!</p>

      <div className='p-[0.5px] search h-[50px]  flex justify-center w-[60%] mx-auto my-5 relative '>
        <input
          onKeyDown={(e) => {
            handleSearch(e);
          }}
          type='text'
          placeholder='Nhập Sdt, Stk cần tìm ...'
          className='border h-full  rounded-lg w-full px-4 outline-none border-none ring-stone-500 focus:ring-blue-400 ring-2'
        />
        <BiSearchAlt2 className='absolute top-0 right-2 translate-y-[52%] text-2xl text-stone-500' />
      </div>

      <div className='flex justify-center align-middle my-6 '>
        <NavLink to='/report'>

        <button
          onClick={handleClick}
          className='w-56 mx-2 rounded-[8px] p-[6px] bg-red-600 hover:bg-red-500 text-white font-[600]'
        >
          Gửi tố cáo Scam
        </button>
        </NavLink>
      </div>
    </div>
  );
}
