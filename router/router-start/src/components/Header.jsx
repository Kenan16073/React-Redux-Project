import { Link, NavLink, useNavigate } from "react-router-dom"
import reactImage from "../assets/img/react.png"
import { useContext, useEffect, useState } from "react"
import { commonContext } from "../context/common-mode";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../store/login/loginSlice";
import { decodeToken } from "react-jwt";


export function Header() {

  const { token } = useSelector((state) => state.login)
  const { mode, setMode } = useContext(commonContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userdata, setUserData] = useState('')

  const modeClick = () => {
    setMode(!mode);
    localStorage.setItem('mode', JSON.stringify(!mode))
    if (!mode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }


  useEffect(() => {
    const decodedToken = decodeToken(token)
    if (decodedToken) {
      const { email } = decodedToken
      setUserData(email)
    }
  }, [])

  const logout = () => {
    dispatch(Logout())
    navigate('/login')
  };

  return (


    <nav className="fixed top-0 z-50 w-full transition-all bg-white border-gray-500 dark:bg-gray-900">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={reactImage} className="h-10" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={modeClick}>
                {mode ? <i style={{ fontSize: "20px" }} className="fa-solid fa-sun"></i> : <i style={{ fontSize: "20px" }} className="fa-regular fa-moon"></i>}
              </button>
            </li>
            <li>

              <NavLink to="/" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-white " aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-white " aria-current="page">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-white " aria-current="page">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-white " aria-current="page">Products</NavLink>
            </li>
            <li>

              {
                !token ? <NavLink to="/login" className="block py-2 px-3 text-white bg-gray-500 rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white md:dark:text-white " aria-current="page">Login</NavLink>
                  :
                  <>
                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className=" text-gray-500 dark:text-white  font-medium rounded-lg   text-center inline-flex items-center  " type="button">Account <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                    <div id="dropdownHover" className=" z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul className=" py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        <li className="block text-xs font-normal px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {userdata}
                        </li>
                        <li>
                          <Link to="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i className="fa-solid fa-table-columns"></i> Dashboard</Link>
                        </li>
                        <li>
                          <Link to="/admin/add" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i className="fa-regular fa-address-book"></i> Products Add</Link>
                        </li>
                        <li className="block  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          <button onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><i className="fa-solid fa-right-from-bracket"></i>                   Sign out</button>
                        </li>
                      </ul>
                    </div>
                  </>
              }

            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}
