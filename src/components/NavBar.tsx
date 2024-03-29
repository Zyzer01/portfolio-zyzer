import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="py-8 px-6 md:px-20 z-50">
      <div className="proggy text-lg ">
        <ul className="flex justify-between">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          {/* <li>
            <Link href="/">Logo</Link>
          </li> */}
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
