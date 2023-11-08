import { useEffect, useState } from "react";
import SwapCard from "./SwapCard";

const AllSwaps = () => {
  const [swaps, setSwaps] = useState([]);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);

  console.log(swaps);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearch(searchValue);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/swaps/?search=${search}`)
      .then((res) => res.json())
      .then((data) => setSwaps(data));
  }, [search]);

  return (
    <div className="min-h-[110vh] max-w-screen-2xl mx-auto px-4 pt-12 pb-16">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="mb-12 text-2xl md:text-4xl lg:text-5xl font-bold text-center mx-7">
            Search Swap Plants By the swap name
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="input-group">
              <input
                type="text"
                placeholder="Search by name...."
                name="search"
                className="input input-bordered focus:outline-none w-48 lg:w-72"
              />
              <button
                type="submit"
                className="btn bg-[#557627] hover:bg-[#70993E] text-white capitalize"
              >
                Search
              </button>
            </label>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
        {isShow
          ? swaps?.map((swap) => <SwapCard key={swap._id}></SwapCard>)
          : swaps
              ?.slice(0, 8)
              .map((swap) => <SwapCard key={swap._id}></SwapCard>)}
      </div>
      <div className="text-center py-12">
        {swaps.length > 8 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className={`px-16 py-2 mt-8 rounded-md bg-[#557627] hover:bg-[#70993E] text-white capitalize ${
              isShow ? "hidden" : ""
            }`}
          >
            show all swaps
          </button>
        )}
      </div>
    </div>
  );
};

export default AllSwaps;
