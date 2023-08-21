function Block1({orderSection, orderImage, image, children}) {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className={`place-self-center lg:col-span-7 ${orderSection}`}>
                {children}
            </div>
            <div className={`hidden lg:mt-0 lg:col-span-5 lg:flex ${orderImage}`}>
            <img
                src={image}
                alt="mockup"
            />
            </div>
        </div>
        </section>
  )
}

export default Block1