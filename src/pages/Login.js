import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../features/actions/userAction';
import { useNavigate } from 'react-router-dom';

function Login() {
    const DATA = {
        email: "",
        password: ""
    }

    const dispatch = useDispatch()
    const [form, setForm] = useState(DATA)
    const {error, isAuthenticated} = useSelector(state => state.user)
    const navigate = useNavigate()

    const handelChange = e => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handelSubmit = e =>{
        e.preventDefault()
        if(form.email === "" && form.password ===""){
            toast.error("Please enter Email and Password")
        }else {
            dispatch(loginUser(form))
        }
    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        } else {
            console.log("")
        }
    },[isAuthenticated, navigate])


  return (
    <form className="mx-auto w-full max-w-screen-sm lg:p-8" onSubmit={handelSubmit}>
        {error && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {error}
            </div>}
        <div className="mb-6">
            <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Your email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handelChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required=""
            />
        </div>
        <div className="mb-6">
            <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Your password
            </label>
            <input
            type="password"
            name="password"
            value={form.password}
            onChange={handelChange}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            />
        </div>
        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
            <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required=""
            />
            </div>
            <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
            Remember me
            </label>
        </div>
        <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Submit
        </button>
        </form>

  )
}

export default Login