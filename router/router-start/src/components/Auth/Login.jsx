import { useFormik } from "formik"
import loginSchema from '../../validation/login';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../store/login/loginApi";
import Loading from "../Loading";
import { useDispatch } from "react-redux";
import { setUser,setToken } from "../../store/login/loginSlice";
import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";


export default function Login() {


  const dispatch = useDispatch()
  const [signIn, { isLoading }] = useSignInMutation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState(false)


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const res = await signIn(values);
      if(res.data){
        dispatch(setUser(values));
        dispatch(setToken(res.data.idToken))
        navigate('/');
      }else{
        setError(true)
        setErrorMessage(res.error.data.error.message)
      }
      formik.resetForm();
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

            {error && <ErrorMessage errorMessage={errorMessage} /> }

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
