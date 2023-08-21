import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function TestimonialsCard() {
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <figure className="max-w-screen-md mx-auto text-center p-3 border dark:border-gray-700">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-base italic text-gray-900 dark:text-gray-400">
                    "Flowbite is just awesome. It contains tons of predesigned components and
                    pages starting from login screen to complex dashboard. Perfect choice for
                    your next SaaS application."
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        CEO at Google
                    </cite>
                    </div>
                </figcaption>
                </figure>

        </SwiperSlide>
        <SwiperSlide>
            <figure className="max-w-screen-md mx-auto text-center p-3 border dark:border-gray-700">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                <p className="text-base italic text-gray-900 dark:text-gray-400">
                    "Flowbite is just awesome. It contains tons of predesigned components and
                    pages starting from login screen to complex dashboard. Perfect choice for
                    your next SaaS application."
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        CEO at Google
                    </cite>
                    </div>
                </figcaption>
                </figure>

        </SwiperSlide>
        <SwiperSlide>
        <figure className="max-w-screen-md mx-auto text-center p-3 border dark:border-gray-700">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                <p className="text-base italic text-gray-900 dark:text-gray-400">
                    "Flowbite is just awesome. It contains tons of predesigned components and
                    pages starting from login screen to complex dashboard. Perfect choice for
                    your next SaaS application."
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        CEO at Google
                    </cite>
                    </div>
                </figcaption>
                </figure>

        </SwiperSlide>
        <SwiperSlide>
        <figure className="max-w-screen-md mx-auto text-center p-3 border dark:border-gray-700">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                <p className="text-base italic text-gray-900 dark:text-gray-400">
                    "Flowbite is just awesome. It contains tons of predesigned components and
                    pages starting from login screen to complex dashboard. Perfect choice for
                    your next SaaS application."
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        CEO at Google
                    </cite>
                    </div>
                </figcaption>
                </figure>

        </SwiperSlide>
        <SwiperSlide>
        <figure className="max-w-screen-md mx-auto text-center p-3 border dark:border-gray-700">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                <p className="text-base italic text-gray-900 dark:text-gray-400">
                    "Flowbite is just awesome. It contains tons of predesigned components and
                    pages starting from login screen to complex dashboard. Perfect choice for
                    your next SaaS application."
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        CEO at Google
                    </cite>
                    </div>
                </figcaption>
                </figure>

        </SwiperSlide>
        <SwiperSlide>
        <figure className="max-w-screen-md mx-auto text-center p-3 border dark:border-gray-700">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                <p className="text-base italic text-gray-900 dark:text-gray-400">
                    "Flowbite is just awesome. It contains tons of predesigned components and
                    pages starting from login screen to complex dashboard. Perfect choice for
                    your next SaaS application."
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                    className="w-6 h-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                        Micheal Gough
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        CEO at Google
                    </cite>
                    </div>
                </figcaption>
                </figure>

        </SwiperSlide>
      </Swiper>
  )
}

export default TestimonialsCard