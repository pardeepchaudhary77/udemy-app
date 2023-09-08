import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { signOutUser } from "../../features/actions/userAction"

function ProfileElement({setProfileEle, user}) {
  const dispatch = useDispatch()
  return (
    <div onMouseOver={()=>setProfileEle(true)}
        onMouseOut={()=>setProfileEle(false)}
    id="userDropdown"
    className="z-10 absolute right-3 top-20 bg-white divide-y shadow-lg border dark:border-gray-600 divide-gray-100 w-56 dark:bg-gray-700 dark:divide-gray-600"
  >
    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{user?.displayName}</div>
      <div className="font-medium truncate">{user.email}</div>
    </div>
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          My learning
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          My cart
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Wishlist
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Instructor dashboard
        </Link>
      </li>
    </ul>

    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Notifications
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Messages
        </Link>
      </li>
    </ul>

    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Account settings
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Payment methods
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Subscription
        </Link>
      </li>
    </ul>

    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Public profile
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Edit profile
        </Link>
      </li>
    </ul>

    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="avatarButton"
    >
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Help
        </Link>
      </li>
      <li>
        <Link onClick={() => dispatch(signOutUser()) && setProfileEle(false)}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
          Log out
        </Link>
      </li>
    </ul>
  </div>
  )
}



export default ProfileElement