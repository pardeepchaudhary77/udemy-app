import { useEffect, useState } from "react"
import { CategoriesEle, ProfileElement } from "../index"
import { Link } from "react-router-dom"
function Header() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || false)
  const [profileEle, setProfileEle] = useState(false)
  const [categoryEle, setCategoryEle] = useState(false)

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))

    if(!theme) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  },[theme])
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b-2 shadow-md">
    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
      
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2"
        id="navbar-search"
      >
        <div className="relative mt-3 md:hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <ul className="flex ml-3 flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="relative">
            <CategoriesEle/>
          </li>
        </ul>
      </div>
      <div className="flex md:order-2 grow mx-3">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <div className="relative grow hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for anything"
          />
        </div>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div className="flex md:order-3">
        <Link to="/login"
            className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Log in
          </Link>
          <Link to="/register"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-none text-sm px-5 py-2.5 mr-2 border dark:border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Sign up
          </Link>
      </div>
      <div className="flex md:order-3 items-center">
        <Link className="block py-2 mr-3 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Instructor</Link>
        <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My learning</Link>
        <i className="bi dark:text-white cursor-pointer bi-heart font-extrabold text-lg px-3"></i>
        <i className="bi dark:text-white cursor-pointer bi-cart2 font-extrabold text-lg px-3"></i>
        <i className="bi dark:text-white cursor-pointer bi-bell font-extrabold text-lg px-3"></i>
        <button onClick={() => setTheme(!theme)} className="py-2 px-3 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-none border border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <i className="bi bi-brightness-high-fill"></i>          
        </button>
        <div onMouseOver={() => setProfileEle(true)} className="w-9 h-9 justify-center cursor-pointer flex items-center text-white rounded-full px-3 bg-stone-950">PK</div>
        {profileEle && <ProfileElement setProfileEle={setProfileEle} />}
      </div>
    </div>
  </nav>
  )
}

export default Header