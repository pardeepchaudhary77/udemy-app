import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900">
  <div className="w-full p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
            Resources
          </h2>
          <ul className="text-gray-500 text-gray-400 font-medium">
            <li className="mb-4">
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite
              </a>
            </li>
            <li>
              <Link className="hover:underline">
                Tailwind CSS
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
            Follow us
          </h2>
          <ul className="text-gray-500 text-gray-400 font-medium">
            <li className="mb-4">
              <Link
                className="hover:underline "
              >
                Github
              </Link>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
            Legal
          </h2>
          <ul className="text-gray-500 text-gray-400 font-medium">
            <li className="mb-4">
              <Link className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Flowbite
          </span>
        </Link>
      </div>
      <div className="grid">
        <span className="text-sm text-gray-500 sm:text-center text-gray-400">
        © 2023 Udemy, Inc.
        </span>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer