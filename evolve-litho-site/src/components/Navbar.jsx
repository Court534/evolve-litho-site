import { useState } from "react";
import Logo from "../assets/evolve-litho-logo.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed flex justify-between items-center h-26 w-full mx-auto p-6 text-white bg-black z-10">
      {/* Logo */}
      <a href="/">
        <img src={Logo} alt="Company Logo" className="h-28" />
      </a>

      {/* Nav Items */}
      <ul className="flex gap-4 max-[767px]:hidden cursor-pointer">
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
          <Link to="hero" smooth="true" duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
        <Link to='about' smooth='true' offset={-200} duration={500} >
            About
          </Link>
        </li>
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
        <Link to='services' smooth='true' offset={-250} duration={500} >
            Services
          </Link>
        </li>
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
        <Link to='contact' smooth='true' offset={-50} duration={500} >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-75 border-r border-r-gray-700 bg-gradient-to-t from-black to-gray-600 ease-in-out duration-500 text-center"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <ul className="p-4">
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
          <Link to="hero" smooth="true" duration={500} onClick={() => setNav(false)}>
            Home
          </Link>
        </li>
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
        <Link to='about' smooth='true' offset={-200} duration={500} onClick={() => setNav(false)}>
            About
          </Link>
        </li>
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
        <Link to='services' smooth='true' offset={-180} duration={500} onClick={() => setNav(false)}>
            Services
          </Link>
        </li>
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
        <Link to='contact' smooth='true' offset={-150} duration={500} onClick={() => setNav(false)}>
            Contact
          </Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
