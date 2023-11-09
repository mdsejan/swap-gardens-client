import Hero from "./Hero";
import PopularSwaps from "./PopularSwaps";

const Home = () => {
  return (
    <>
      <Hero></Hero>

      <div className="min-h-screen max-w-screen-2xl mx-auto px-4 py-12">
        <PopularSwaps></PopularSwaps>
      </div>
    </>
  );
};

export default Home;
