import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createUser } from "../features/actions/userAction"
import { auth } from "../firebase/Config"

function Register() {
    const {error, isAuthenticated} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const DATA = {
        fullname:"",
        email:"",
        password:""
    }
    const [form, setForm] = useState(DATA)

    const handelChange=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    
    const handelRegister=(e)=>{
        e.preventDefault()
        if(form.fullname === "" && form.email === "" && form.password === ""){
            toast.error("All fields are required")
        }else if(form.password !== e.target.repassword.value){
            toast.error("Password dosen't match.")
        }else{
            form.email = form.email.toLowerCase()
            dispatch(createUser(form));
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
    <form className="mx-auto w-full max-w-screen-sm lg:p-8" onSubmit={handelRegister}>
        {error && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {error}
            </div>}
        <div className="mb-6">
            <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Your Name
            </label>
            <input
            type="text" value={form.fullname} onChange={handelChange} name="fullname"
            id="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Full Name"
            required=""
            />
        </div>
        <div className="mb-6">
            <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Your email
            </label>
            <input
            type="email" value={form.email} onChange={handelChange} name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
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
            type="password" value={form.password} onChange={handelChange} name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            />
        </div>
        <div className="mb-6">
            <label
            htmlFor="repassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Re-password
            </label>
            <input
            type="password"
            id="repassword" name="repassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            />
        </div>
        <button
            type="submit"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-none text-sm px-5 py-2.5 mr-2 border dark:border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
           Register
        </button>
        </form>
  )
}


export default Register