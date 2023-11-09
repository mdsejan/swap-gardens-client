const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="mx-auto flex flex-col items-center px-2 py-16 text-center md:py-32 md:px-10 xl:max-w-screen-xl">
        <h1 className="text-4xl px-2 font-ibm-plex-sans font-bold sm:text-5xl">
          Discover a Verdant Exchange
          <span className="text-[#ACD27A]"> at SwapGardens: </span>
          Where Green Dreams Flourish!
        </h1>
        <p className="lg:px-28 mt-8 mb-12 text-sm md:text-lg  ">
          Discover green harmony at SwapGardens—your go-to for captivating plant
          swaps. Unearth a world of botanical wonders, connect with fellow
          enthusiasts, and create your lush oasis. Dive into the joy of
          swapping, where every leaf tells a tale.
        </p>
        <div className="flex flex-wrap justify-center"></div>
      </div>
    </section>
  );
};

export default Hero;
