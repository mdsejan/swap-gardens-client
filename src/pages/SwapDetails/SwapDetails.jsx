import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import SwapCard from "../AllSwaps/SwapCard";

const SwapDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [swaps, setSwaps] = useState([]);

  useEffect(() => {
    fetch(`https://swap-gardens-server.vercel.app/api/v1/swaps/`)
      .then((res) => res.json())
      .then((data) => setSwaps(data));
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="max-w-screen-2xl mx-auto px-4 pt-12 pb-16">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row mt-8">
        {/* Left Column - Swap Image */}
        <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
          <img
            src="https://i.pinimg.com/564x/ba/9b/e0/ba9be03a4ed0a9907f5dd790d1337f27.jpg"
            alt="Product"
            className="w-full h-[20rem] md:h-[37rem] rounded object-cover"
          />
        </div>

        {/* Right Column - Swap Details */}
        <div className="lg:w-1/2 lg:pl-4">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Rare Orchid Swap</h2>
            <p className="text-2xl text-[#6c9935] mb-2">$10.00</p>
            <p className="text-gray-600 mb-4 mt-8">
              The flower of the orchid plant is colorful, fragrant and can vary
              in sizes from microscopic plants (Platystele) to long vines
              (Vanilla) to gigantic plants (Grammatophullum). There is an outer
              whorl of three similar segments called sepals. Within the
            </p>
          </div>
          <div className="px-4 md:px-16 py-4">
            <button
              onClick={openModal}
              className="bg-[#557627] hover:bg-[#70993E] text-white font-bold py-2 px-12 w-full rounded"
            >
              Book Swap Now
            </button>
          </div>

          <div className="w-full bg-[#F8F5F4] min-h-[10rem] mt-8 p-6">
            <div className="flex justify-between items-end md:items-center">
              <div className="flex flex-col md:flex-row md:items-center border-r-2 md:border-0 w-1/2">
                <img
                  src="https://i.pinimg.com/564x/68/9e/3e/689e3e13e65cd091270d7cd6de61fed5.jpg"
                  alt="Provider"
                  className="w-16 h-16 rounded-full mr-2 object-cover"
                />
                <span className="text-sm lg:text-lg mt-2 mr-1">
                  James Mitchell
                </span>
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <FaLocationDot className="text-xl mr-2 text-[#557627]"></FaLocationDot>
                  <p className="text-sm lg:text-md font-semibold text-[#557627] mt-2 ">
                    New York City, NY
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-4">
              <p className="text-gray-600 mb-4">
                Phasellus vitae imperdiet felis. Nam non condimentum erat. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor
                arcu, consectetur eleifend commodo at, consectetur eu justo.
              </p>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md w-full max-w-3xl">
              <h2 className="text-2xl font-bold mb-4">Book Service</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Service Name
                </label>
                <p className="text-gray-800">Gardening Delight</p>
              </div>
              {/* Other input fields go here */}
              <button
                onClick={closeModal}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Purchase this Service
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mt-32">
            Other Swaps by this Provider
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {swaps?.slice(0, 4).map((swap) => (
            <SwapCard key={swap._id} swap={swap}></SwapCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwapDetails;
