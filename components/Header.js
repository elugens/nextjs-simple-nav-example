import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  // programmatically routing navigation with useRouter and router.push
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order');
    router.push('/product'); // <--
  };

  return (
    <div className='flex justify-between w-full p-2 text-white bg-black'>
      <Link href='/'>
        <div className='p-2 font-bold text-yellow-400 uppercase cursor-pointer'>
          HelloNextJS
        </div>
      </Link>
      <nav className='inline-flex pr-5 space-x-6'>
        <Link href='/about'>
          <div className='p-2 cursor-pointer hover:text-yellow-400'>About</div>
        </Link>
        <Link href='/product'>
          <div className='p-2 cursor-pointer hover:text-yellow-400'>
            Products
          </div>
        </Link>
        <button
          onClick={handleClick}
          className='px-2 border rounded-full cursor-pointer hover:border-black hover:text-black hover:bg-yellow-400'
        >
          Place Order
        </button>
      </nav>
    </div>
  );
}

export default Header;
