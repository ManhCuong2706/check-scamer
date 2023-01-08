import { NavbarCount } from 'Models';
import { BsShieldLock } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Header() {
  const count: NavbarCount = {
    scamCount: 23.243,
    contentCount: 41,
  };

  return (
    <div className='navbar text-center'>
      <Link to='/'>
        <BsShieldLock className='mx-auto my-8 text-[50px] text-red-500' />
        <Navbar navCount={count} />
      </Link>
    </div>
  );
}
