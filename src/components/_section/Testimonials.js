import TestimonialsCard from "./TestimonialsCard"

function Testimonials() {
  return (
    <section className="bg-gray-100 dark:bg-gray-700">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <h1 className="mb-8 font-bold text-black lg:text-2xl dark:text-white">
                How learners like you are achieving their goals
            </h1>
            <div className="flex">
                <TestimonialsCard />
            </div>
        </div>
    </section>
  )
}

export default Testimonials