import Link from 'next/link';
import {useState} from 'react';

const Navbar = () => {
  return (
    <div className='mx-12 float-right'>
      <Link href="/" className='main-menu'>Support</Link>
      <Link href="/" className='main-menu'>Claims</Link>
      <Link href="/" className='main-menu'>Products</Link>
      <Link href="/" className='main-menu'>About</Link>
      <Link href="/" className='main-menu'>EN | MYR</Link>
      <button
        type="submit"
        className="w-28 mt-2 bg-red-500 hover:bg-red-700 text-white font-bold mx-4 py-1 px-4 rounded"
      >
        Login
      </button>
      <button
        type="submit"
        className="w-28 mt-2 bg-white hover:bg-red-700 hover:text-white text-red font-bold py-1 px-4 rounded"
      >
        Register
      </button>
    </div>
  );
}

export default Navbar;
