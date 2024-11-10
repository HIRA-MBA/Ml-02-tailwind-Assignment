import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="bg-slate-600 text-white p-4">
      <ul className="flex space-x-6 ">
      <li>
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Products" className="hover:text-blue-300">
            Our Products
          </Link>
        </li>
        <li>
          <Link href="/Contacts" className="hover:text-blue-300">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
