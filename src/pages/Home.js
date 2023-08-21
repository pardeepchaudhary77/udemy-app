import { Link } from "react-router-dom"
import { Banner, Block1, Client, CoursesCollections, FeatureCategory, Testimonials } from "../components"

function Home() {
  return (
    <>
      <Banner />
      <Client />
      <CoursesCollections />
      <Testimonials />
      <Block1 orderSection="order-1" orderImage="order-2" image="/assets/UB_Promo_800x800.jpg">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Upskill your team with Udemy Business
          </h1>
          <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside dark:text-gray-400">
              <li>Unlimited access to 22,000+ top Udemy courses, anytime, anywhere</li>
              <li>International course collection in 14 languages</li>
              <li>Top certifications in tech and business</li>
          </ul>
          <Link
              className="my-3 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
              Learn more
          </Link>
      </Block1>
      <FeatureCategory />
      <Block1 orderSection="order-2" orderImage="order-1" image="/assets/instructor-1x-v3.jpg">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Become an instructor
          </h1>
          <p className="dark:text-gray-400 my-5">
          Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
          </p>
          <Link
              className="my-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-none text-sm px-5 py-2.5 mr-2 border dark:border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
              Start teaching today
          </Link>
      </Block1>
    </>
  )
}

export default Home