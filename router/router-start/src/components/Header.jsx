import { Link, NavLink } from "react-router-dom"
import reactImage from "../assets/img/react.png"


export  function Header() {
  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={reactImage} className="h-10" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="/" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-gray-500 " aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-gray-500 " aria-current="page">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-gray-500 " aria-current="page">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-gray-500 " aria-current="page">Products</NavLink>
        </li>
        {/* <li>
          <NavLink to="/register" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-gray-500 " aria-current="page">Register</NavLink>
        </li> */}
        <li>
          <NavLink to="/login" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-gray-500 " aria-current="page">Login</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}
