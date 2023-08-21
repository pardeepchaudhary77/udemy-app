import { Link } from "react-router-dom"
import CourseCollectionCard from "./CourseCollectionCard"

function CoursesCollections() {
  return (
    <div className='mx-auto w-full max-w-screen-xl py-8'>
        <h1 className="text-3xl font-bold mb-2 dark:text-white">A broad selection of courses</h1>
        <p className="text-lg dark:text-white">Choose from over 210,000 online video courses with new additions published every month</p>
        
        <div className="mt-5">
            <Link className="font-bold mr-4 dark:text-white hover:text-gray-900 text-gray-500">Python</Link>
            <Link className="font-bold mr-4 dark:text-white hover:text-gray-900 text-gray-500">Excel</Link>
            <Link className="font-bold mr-4 dark:text-white hover:text-gray-900 text-gray-500">Web Development</Link>

            <div className="mt-3 p-6 border dark:border-slate-600">
                <h1 className="text-xl font-bold mb-2 dark:text-white">Expand your career opportunities with Python</h1>
                <p className="text-sm mb-2 dark:text-white">Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. 
                    Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
                <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Explore Pyton</button>
                <div className='my-10'>
                    <CourseCollectionCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesCollections