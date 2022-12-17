import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { RiSendPlaneFill } from 'react-icons/ri';
import { MdAddToPhotos } from 'react-icons/md';
import * as React from 'react';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export interface ReportFormProps {
  onSubmit: (e: Event) => void;
  form: {};
}

export function ReportForm({ onSubmit, form }: ReportFormProps) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='text-center my-5 w-[640px]  mx-auto px-2'
    >
      <h2 className='text-center font-[700] text-lg text-[#0099ff] my-5'>
        THÔNG TIN KẺ LỪA ĐẢO
      </h2>
      <div className='flex items-center justify-center mb-4'>
        <TextField
          required
          variant='outlined'
          label='Chủ tài khoản'
          placeholder='Nhập tên chủ tài khoản'
          className=' w-[300px] '
        />
        <TextField
          variant='outlined'
          label='Số điện thoại'
          placeholder='Nhập số điện thoại'
          className='ml-4 w-[300px] '
        />
      </div>
      <div className='flex items-center justify-center'>
        <TextField
          required
          variant='outlined'
          label='Số tài khoản'
          placeholder='Nhập số tài khoản'
          className='w-[300px] '
        />
        <TextField
          required
          variant='outlined'
          label='Ngân hàng'
          placeholder='Nhập tên ngân hàng'
          className='ml-4 w-[300px] '
        />
      </div>
      <div className='h-[80px] flex w-[620px] items-center justify-center mx-auto border my-4 rounded-md border-[#ccc]'>
        <IconButton aria-label='upload picture' component='label'>
          <input hidden accept='image/*' type='file' />
          <MdAddToPhotos className='text-sky-700' />
          <p className='text-lg ml-2'>
            Update bill chuyển tiền, đoạn chat hình ảnh lừa đảo
          </p>
        </IconButton>
      </div>
      <div>
        <TextField
          required
          id='outlined-multiline-static'
          label='Nội dung tố cáo'
          multiline
          rows={4}
          className=' w-[620px]'
          placeholder='Mô tả chi tiết để chúng tôi xác minh vấn đề'
        />
      </div>

      <h2 className='text-center font-[700] text-lg text-[#0099ff] my-5'>
        NGƯỜI XÁC THỰC
      </h2>

      <div className='flex items-center justify-center mb-4'>
        <TextField
          required
          variant='outlined'
          label='Họ và tên'
          placeholder='Nhập họ tên của bạn'
          className=' w-[300px] '
        />
        <TextField
          required
          variant='outlined'
          label='Liên hệ zalo'
          placeholder='Nhập số zalo bạn đang sử dụng'
          className='ml-4 w-[300px] '
        />
      </div>
      <div className='mb-4 text-left ml-3'>
        <FormControlLabel
          control={<Checkbox size='small' />}
          label='Đồng ý liên hệ nếu Scam muốn hoàn lại tiền'
        />
      </div>
      <div className='flex items-center justify-center mb-4'>
        <TextField
          variant='outlined'
          label='Link phốt trên group nếu có'
          placeholder='Link nguồn'
          className=' w-[620px] '
        />
      </div>
      <div className='mb-4 text-left ml-3'>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel
            value='female'
            control={<Radio size='small' />}
            label='Tôi chính là nạn nhân'
          />
          <FormControlLabel
            value='male'
            control={<Radio size='small' />}
            label='Phốt này trên group tôi chỉ đăng hộ'
          />
        </RadioGroup>
      </div>
      <Button
        variant='contained'
        endIcon={<RiSendPlaneFill />}
        className='w-fit bg-red-500 my-5'
      >
        Gửi tố cáo
      </Button>
    </form>
  );
}
