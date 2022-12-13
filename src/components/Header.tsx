import { BsShieldLock } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className='container'>
      <div className='navbar text-center'>
        <Link to='/'>
          <BsShieldLock className='mx-auto my-8 text-[50px] text-red-500' />
        </Link>
      </div>
    </div>
  );
}
