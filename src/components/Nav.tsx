import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaMagnifyingGlass,
  FaCartShopping,
  FaXmark,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa6";
import organickLogo from "@assets/organick.svg";

const Nav: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cart, setCart] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const searchRef = useRef(null);

  const toggleLinks = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuVisible(!menuVisible);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(searchRef.current!.value as string);
  };

  return (
    <nav
      className={`text-brand-aqua flex ${
        !menuVisible && "shadow-md"
      } justify-between bg-white px-4 items-center h-16 max-h-16 lg:h-24 lg:max-h-24`}
    >
      {/* Left Nav */}
      <div className=" h-full w-32">
        {/* Logo */}
        <Link to="/" className="flex h-full flex-row items-center select-none">
          <img src={organickLogo} alt="Organick Logo" className="mr-2 w-6" />
          <h1 className="text-xl font-bold">Organick</h1>
        </Link>
      </div>
      {/* Right Nav */}
      <div className="flex h-full w-36 flex-row-reverse items-center justify-between">
        {/* Center Links */}
        <div
          className={`${
            !menuVisible && "hidden"
          } flex flex-col absolute top-16 left-0 w-full bg-white shadow-md`}
        >
          {/* Search Box */}
          <form
            onSubmit={(e) => handleSearch(e)}
            className="px-12 py-2 after:content-[''] after:border after:border-brand-gray-200 after:w-[85%] after:absolute after:left-[50%] after:translate-x-[-50%] after:top-[15%]"
          >
            <input
              type="text"
              ref={searchRef}
              className="bg-brand-white rounded-full py-2 w-full pr-11 pl-3 outline-brand-aqua"
            />
            <FaMagnifyingGlass className="absolute top-[3%] right-[10.5%] inline-block bg-brand-green text-brand-white rounded-full p-2 h-8 w-8" />
          </form>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          {/* Dropdown */}
          <a
            href="#"
            onClick={(e) => toggleDropdown(e)}
            className="nav-link flex items-center justify-between"
          >
            <span>Pages</span>{" "}
            {!dropdownVisible ? <FaAngleDown /> : <FaAngleUp />}
          </a>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/news" className="nav-link">
            News
          </Link>
        </div>
        {/* Right Links */}
        <div className="flex w-full items-center justify-around h-full">
          {/* Cart Button */}
          <Link to="/cart" className="flex items-center rounded-full p-2">
            <FaCartShopping className="text-2xl mr-1" />
            <span className="text-md">
              Cart{" "}
              <span className="bg-brand-aqua text-brand-white p-1 px-2 rounded-full">
                {cart}
              </span>
            </span>
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
