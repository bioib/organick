import { useState, useRef } from "react";
import { FaCartShopping, FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaMagnifyingGlass,
  FaCartShopping,
  FaXmark,
} from "react-icons/fa6";
import organickLogo from "@assets/organick.svg";

const Nav: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);

  const toggleLinks = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuVisible(!menuVisible);
  };

  const toggleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchVisible(!searchVisible);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <nav className="text-brand-aqua-600 flex justify-between bg-brand-white px-4 items-center h-16 max-h-16">
      {/* Left Nav */}
      <div className=" h-full w-32">
        {/* Logo */}
        <Link to="/" className="flex h-full flex-row items-center select-none">
          <img src={organickLogo} alt="Organick Logo" className="mr-2 w-6" />
          <h1 className="text-2xl">Organick</h1>
        </Link>
      </div>
      {/* Right Nav */}
      <div className="flex h-full w-36 flex-row-reverse items-center justify-between">
        {/* Center Links */}
        <div
          className={`${
            !menuVisible && "hidden"
          } flex flex-col absolute top-16 left-0 w-full border border-brand-gray-500`}
        >
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Pages
          </a>
          <a href="#" className="nav-link">
            Shop
          </a>
          <a href="#" className="nav-link">
            Projects
          </a>
          <a href="#" className="nav-link">
            News
          </a>
        </div>
        {/* Right Links */}
        <div className="flex w-full items-center justify-around h-full">
          {/* Search Box */}
          <form onSubmit={(e) => handleSearch(e)} className="hidden">
            <input type="text" ref={searchRef} className="" />
          </form>
          {/* Search Button */}
          <button
            onClick={(e) => toggleSearch(e)}
            type="button"
            className="flex items-center rounded-full p-2 bg-brand-green text-brand-white text-xl"
          >
            <FaMagnifyingGlass />
          </button>
          {/* Cart Button */}
          <Link
            to="/cart"
            className="flex items-center rounded-full text-2xl p-2"
          >
            <FaCartShopping />
          </Link>
          {/* Menu Button */}
          <button
            onClick={(e) => toggleLinks(e)}
            type="button"
            className="relative right-0 p-2 text-2xl"
          >
            {!menuVisible ? <FaBars /> : <FaXmark />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
