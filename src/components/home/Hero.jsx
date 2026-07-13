const Hero = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 md:flex-row">
        <div className="flex-1">
          <p className="mb-3 text-lg">Summer Collection 2026</p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Discover Amazing Products
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Shop the latest trends with unbeatable prices.
          </p>

          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
            Shop Now
          </button>
        </div>

        <div className="mt-10 flex-1 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
            alt="Hero Banner"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;