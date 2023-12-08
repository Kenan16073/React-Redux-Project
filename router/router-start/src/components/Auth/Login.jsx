import { useFormik } from "formik"
import loginSchema from '../../validation/login';
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { commonContext } from "../../context/common-mode";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../store/login/loginApi";
import Loading from "../Loading";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/login/loginSlice";


export default function Login() {


  const dispatch = useDispatch()

  const [signIn, { isLoading, isError }] = useSignInMutation();
  const navigate = useNavigate();
  const { setToken } = useContext(commonContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // const { data } = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwl0HfmoeAQzh9PewwFkvHwQOKIlJskv8',
      //   {
      //     email: values.email,
      //     password: values.password,
      //     returnSecureToken: true
      //   }
      // );
      signIn(values)
      dispatch(setUser(values))

      
      setToken(data.idToken);
      sessionStorage.setItem('token', data.idToken);
      formik.resetForm();
      navigate('/');
    },
  })





  return (

    

    <div className="font-sans " onSubmit={formik.handleSubmit}>
      <div className="transition-all dark:bg-gray-900 relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">


            <label
              htmlFor=""
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Login
            </label>
            <form method="#" action="#" className="mt-10">
              <div className="mt-7">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
                <div className="text-[red] text-sm">{formik.errors.email}</div>
              </div>

              <div className="mt-7">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
                <div className="text-[red] text-sm">
                  {formik.errors.password}
                </div>
              </div>

              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  {isLoading ? <Loading/> : 'Login'}
                </button>
              </div>

              
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label
                  htmlFor=""
                  className="block font-medium text-sm text-gray-600 w-full"
                >
                  Or
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>

                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label htmlFor="" className="mr-2">
                    Don't have an account?
                  </label>
                  <Link
                    to="/register"
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}
