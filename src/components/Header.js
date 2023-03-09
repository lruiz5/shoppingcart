import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export const Header = () => {
  const activeClass = "bg-gray-200 text-lg block py-2 pr-3 pl-3 rounded";

  const inactiveClass = "text-lg block py-2 pr-3 pl-3";
  return (
    <header className="text-lg">
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 max-w-7xl m-auto border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Shopping Logo" />
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
              Shopping Cart
            </span>
          </Link>
          <div className="flex font-semibold md:order-2">
            <span>Cart: 3</span>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className=" flex flex-col mt-4 border border-gray-100 rounded-lg md:flex-row  md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
