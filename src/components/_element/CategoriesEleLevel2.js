import { Link } from 'react-router-dom'

function CategoriesEleLevel2() {
  return (
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <Link
          className="block px-4 py-2 flex justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          <span>Web Development</span>
          <span> {'>'} </span>
        </Link>
        
      </li>
    </ul>
  )
}

export default CategoriesEleLevel2