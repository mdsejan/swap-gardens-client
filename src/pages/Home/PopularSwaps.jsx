import { useEffect, useState } from "react";
import SwapCard from "../AllSwaps/SwapCard";
import { Link } from "react-router-dom";

const PopularSwaps = () => {
  const [swaps, setSwaps] = useState([]);

  useEffect(() => {
    fetch(`https://swap-gardens-server.vercel.app/api/v1/swaps`)
      .then((res) => res.json())
      .then((data) => setSwaps(data));
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl md:text-4xl font-medium mt-2">Popular Swaps</h2>
        <Link
          to="/all-swaps"
          className="bg-[#70993E] hover:bg-[#557627] btn text-white text-md font-semibold py-2 px-4 rounded"
        >
          View All Swaps
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {swaps?.slice(0, 4).map((swap) => (
          <SwapCard key={swap._id} swap={swap}></SwapCard>
        ))}
      </div>
    </div>
  );
};

export default PopularSwaps;
