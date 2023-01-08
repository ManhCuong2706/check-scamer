import { Scamer } from 'Models';

import { FaCreditCard, FaPhoneAlt, FaPhotoVideo, FaUserAlt } from 'react-icons/fa';
import { TbBuildingBank } from 'react-icons/tb';
import { BiCategory } from 'react-icons/bi';
import { FiFileText } from 'react-icons/fi';
import { Rows } from 'utils';

export interface DetailProps {
  scamData: Scamer;
}

export function Detail({ scamData }: DetailProps) {
  return (
    <div>
      <div className='relative w-[945px] mx-auto lg:px-[15px] mb-20'>
        <h2 className='text-[#09f] font-bold border-x border-t w-fit px-[20px] py-[10px] rounded-t-lg bg-[#F5F9F8]'>
          Thông tin tố cáo
        </h2>
        <div className='border'>
          <Rows icon={<FaUserAlt />} label='Họ Tên: ' data={scamData?.name} />
          <Rows icon={<FaPhoneAlt />} label='SĐT: ' data={scamData?.phone} />
          <Rows icon={<FaCreditCard />} label='STK: ' data={scamData?.bankNumber} />
          <Rows icon={<TbBuildingBank />} label='Ngân Hàng: ' data={scamData?.bankName} />
          <Rows icon={<BiCategory />} label='Hạng Mục: ' data={scamData?.categories} />
          <Rows icon={<FaPhotoVideo />} label='Ảnh chụp bằng chứng: ' data={scamData?.name} />
          <Rows
            icon={<FiFileText />}
            label='Nội dung tố cáo: '
            data={scamData?.content}
            isBorder={false}
          />
        </div>
      </div>
      <div className='relative w-[945px] mx-auto lg:px-[15px] mb-32'>
        <h2 className='text-[#09f] font-bold border-x border-t w-fit px-[20px] py-[10px] rounded-t-lg bg-[#F5F9F8]'>
          Thông tin tố cáo
        </h2>
        <div className='border'>
          <Rows icon={<FaUserAlt />} label='Họ Tên: ' data={scamData?.name} />
          <Rows icon={<FaPhoneAlt />} label='SĐT: ' data={scamData?.phone} />
          <Rows icon={<FaCreditCard />} label='STK: ' data={scamData?.bankNumber} />
          <Rows icon={<TbBuildingBank />} label='Ngân Hàng: ' data={scamData?.bankName} />
          <Rows icon={<BiCategory />} label='Hạng Mục: ' data={scamData?.categories} />
          <Rows icon={<FaPhotoVideo />} label='Ảnh chụp bằng chứng: ' data={scamData?.name} />
          <Rows
            icon={<FiFileText />}
            label='Nội dung tố cáo: '
            data={scamData?.content}
            isBorder={false}
          />
        </div>
      </div>
    </div>
  );
}
