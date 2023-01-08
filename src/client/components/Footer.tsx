import * as React from 'react';
import { Link } from 'react-router-dom';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className='text-center'>
      <div>
        <Link className='hover:text-blue-500' to='/about'>
          Giới Thiệu
        </Link>{' '}
        |{' '}
        <Link className='hover:text-blue-500' to='/contact'>
          Liên Hệ
        </Link>{' '}
        |
        <Link className='hover:text-blue-500' to='/terms'>
          {' '}
          Điều Khoản
        </Link>
      </div>
      <div>Design by Manh Cuong</div>
    </div>
  );
}
