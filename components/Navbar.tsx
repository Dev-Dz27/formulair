import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../public/logo.png'
import logoblack from '../public/logoblack.png'

const Navbar = ({ navbar }) => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90 ) {
        setColor('#ffffff');
        setTextColor('#000000');
      }
      else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    }

    window.addEventListener('scroll', changeColor);
  }, [])
  

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 mt-[-16px]"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
        <Image
                src={logoblack}
                height="80"
                width="80"
                className="cursor-pointer hover:scale-95 duration-300 ease-in-out"
                alt="Logo"
              />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex ">
          <li className="p-4 capitalize">
            <Link href={`/#${navbar.nav1}`}>{navbar.nav1}</Link>
          </li>
          <li className="p-4 capitalize">
            <Link href={`/#${navbar.nav2}`}>{navbar.nav2}</Link>
          </li>
          <li className="p-4 capitalize">
            <Link href={`/${navbar.nav3}`}>{navbar.nav3}</Link>
          </li>
        </ul>
        {/* Mobile Btn */}
        <div onClick={handleNav} className="block sm:hidden z-10 ">
          {nav ? (
            <AiOutlineClose size={20}  />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500 ease-in-out duration-300 capitalize">
              <Link href={`/#${navbar.nav1}`}>{navbar.nav1}</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500 ease-in-out duration-300 capitalize">
              <Link href={`/#${navbar.nav2}`}>{navbar.nav2}</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500 ease-in-out duration-300 capitalize">
              <Link href={`/${navbar.nav3}`}>{navbar.nav3}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
