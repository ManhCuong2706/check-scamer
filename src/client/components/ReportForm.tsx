import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { MdAddToPhotos } from 'react-icons/md';

import { useForm, Controller } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { ScamForm } from 'Models';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface ReportFormProps {
  onFormSubmit: (data: ScamForm) => void;
}

const schema = yup.object().shape({
  scamBankID: yup
    .string()
    .required('Vui lòng nhập Số Tài Khoản')
    .min(4, 'Số Tài khoản ít nhất 4 ký tự'),
  scamBankName: yup.string().required('Vui lòng nhập Tên Ngân Hàng'),
  scamContent: yup.string().required('Vui lòng nhập Nội dung lừa đảo'),
  authName: yup.string().required('Vui lòng nhập Họ và Tên của bạn'),
  zalo: yup
    .string()
    .required('Vui lòng nhập liên hệ Zalo')
    .min(10, 'Liên hệ Zalo ít nhất 10 ký tự ')
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      'Số Điện thoại không hợp lệ'
    ),
});

export function ReportForm({ onFormSubmit }: ReportFormProps) {
  const onSubmit: SubmitHandler<ScamForm> = (data: ScamForm) => {
    onFormSubmit(data);
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<ScamForm>({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='text-center my-5 w-[640px]  mx-auto px-2'
    >
      <h2 className='text-center font-[700] text-lg text-[#0099ff] my-5'>
        THÔNG TIN KẺ LỪA ĐẢO
      </h2>
      <div className='flex items-center justify-center mb-5'>
        <Controller
          name='scamName'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant='outlined'
              label='Chủ tài khoản'
              placeholder='Nhập tên chủ tài khoản'
              className=' w-[300px] '
            />
          )}
        />

        <Controller
          name='scamPhone'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant='outlined'
              label='Số điện thoại'
              placeholder='Nhập số điện thoại'
              className='ml-4 w-[300px] '
            />
          )}
        />
      </div>
      <div className='flex items-center justify-center'>
        <Controller
          name='scamBankID'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant='outlined'
              label='Số tài khoản *'
              placeholder='Nhập số tài khoản'
              className='w-[300px] '
              error={!!errors.scamBankID}
              helperText={errors.scamBankID ? errors.scamBankID?.message : ''}
            />
          )}
        />
        <Controller
          name='scamBankName'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant='outlined'
              label='Ngân hàng *'
              placeholder='Nhập tên ngân hàng '
              className='ml-4 w-[300px] '
              error={!!errors.scamBankName}
              helperText={errors.scamBankName ? errors.scamBankName?.message : ''}
            />
          )}
        />
      </div>
      <div className='h-[80px] flex w-[620px] items-center justify-center mx-auto border my-4 rounded-md border-[#ccc] hover:border-black'>
        <Controller
          name='scamPhoto'
          control={control}
          render={({ field }) => (
            <IconButton aria-label='upload picture' component='label'>
              <input hidden accept='image/*' type='file' {...field} />
              <MdAddToPhotos className='text-sky-700' />
              <p className='text-lg ml-2'>
                Update bill chuyển tiền, đoạn chat hình ảnh lừa đảo
              </p>
            </IconButton>
          )}
        />
      </div>
      <div>
        <Controller
          name='scamContent'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id='outlined-multiline-static'
              label='Nội dung tố cáo *'
              multiline
              rows={4}
              className=' w-[620px]'
              placeholder='Mô tả chi tiết để chúng tôi xác minh vấn đề'
              error={!!errors.scamContent}
              helperText={errors.scamContent ? errors.scamContent?.message : ''}
            />
          )}
        />
      </div>

      <h2 className='text-center font-[700] text-lg text-[#0099ff] my-5'>
        NGƯỜI XÁC THỰC
      </h2>

      <div className='flex items-center justify-center mb-5 '>
        <Controller
          name='authName'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant='outlined'
              label='Họ và tên *'
              placeholder='Nhập họ tên của bạn'
              className=' w-[300px] '
              error={!!errors.authName}
              helperText={errors.authName ? errors.authName?.message : ''}
            />
          )}
        />

        <Controller
          name='zalo'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant='outlined'
              label='Liên hệ zalo *'
              placeholder='Nhập số zalo bạn đang sử dụng'
              className='ml-4 w-[300px] '
              error={!!errors.zalo}
              helperText={errors.zalo ? errors.zalo?.message : ''}
            />
          )}
        />
      </div>
      <div className='mb-5 text-left ml-3'>
        <Controller
          name='agreeContact'
          control={control}
          render={({ field }) => (
            <FormControlLabel
              {...field}
              control={<Checkbox size='small' />}
              label='Đồng ý liên hệ nếu Scam muốn hoàn lại tiền'
            />
          )}
        />
      </div>
      <div className='flex items-center justify-center mb-5'>
        <Controller
          name='link'
          control={control}
          render={({ field }) => (
            <TextField
              {...register('link')}
              variant='outlined'
              label='Link phốt trên group nếu có'
              placeholder='Link nguồn'
              className=' w-[620px] '
            />
          )}
        />
      </div>
      <div className='mb-5 text-left ml-3'>
        <Controller
          name='link'
          control={control}
          render={({ field }) => (
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='radio-buttons-group'
            >
              <FormControlLabel
                {...field}
                value={true}
                control={<Radio size='small' />}
                label='Tôi chính là nạn nhân'
              />
              <FormControlLabel
                {...field}
                value={false}
                control={<Radio size='small' />}
                label='Phốt này trên group tôi chỉ đăng hộ'
              />
            </RadioGroup>
          )}
        />
      </div>
      <button type='submit' className='bg-red-500 p-2 w-[100px] rounded-md '>
        click
      </button>
    </form>
  );
}
