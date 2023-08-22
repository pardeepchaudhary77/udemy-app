import { useState } from "react"
import { toast } from "react-toastify"

function Register() {
    const DATA = {
        name:"",
        email:"",
        password:""
    }
    const [form, setForm] = useState(DATA)

    const handelChange=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handelRegister=(e)=>{
        e.preventDefault()
        if(form.name === "" && form.email === "" && form.password === ""){
            toast.error("All fields are required")
        }else if(form.password !== e.target.repassword.value){
            toast.error("All required")
        }else{
            console.log(form)
        }
    }

  return (
    <form className="mx-auto w-full max-w-screen-sm lg:p-8" onSubmit={handelRegister}>
        <div className="mb-6">
            <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Your Name
            </label>
            <input
            type="text" value={form.name} onChange={handelChange} name="name"
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
            type="repassword"
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