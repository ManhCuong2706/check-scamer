import { Collapse, ListItemButton, ListItemIcon } from '@mui/material';
import * as React from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

export interface QuestionProps {}

export function Question(props: QuestionProps) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='text-center mx-auto my-8 max-[950px]'>
      <h2>CÁC CÂU HỎI THƯỜNG GẶP</h2>
      <div className='flex mx-auto items-center'>
        <ul onClick={handleClick} className='mx-auto'>
          <ListItemButton>
            {open ? <MdExpandLess /> : <MdExpandMore />}
            <p className='ml-2 font-[600]'>
              Nội dung trên Checkscam được kiểm duyệt như nào?
            </p>
          </ListItemButton>
          <Collapse in={open} timeout={300} className='ease-in'>
            <ListItemButton>
              <ListItemIcon className='pl-[30px] text-left'>
                Tất cả các bài tố cáo trên Checkscam đều được{' '}
                <b>kiểm duyệt bằng tay</b>. dựa trên{' '}
                <b>kiến thức, kinh nghiệm và độ hiểu biết</b> của Admin trên MXH.
              </ListItemIcon>
            </ListItemButton>
          </Collapse>
        </ul>
      </div>
    </div>
  );
}
