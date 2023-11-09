import { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import SwapCard from "../AllSwaps/SwapCard";
import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";
import { ThemeContext } from "../../providers/ThemeProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SwapDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [swaps, setSwaps] = useState([]);
  const [swapInfo, setSwapInfo] = useState([]);
  const { user } = useContext(ThemeContext);
  const [selectedDate, setSelectedDate] = useState(null);

  const { name, userEmail, image, price } = swapInfo[0] || [];

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swap-gardens-server.vercel.app/api/v1/swaps/?swap=${id}`)
      .then((res) => res.json())
      .then((data) => setSwapInfo(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://swap-gardens-server.vercel.app/api/v1/swaps/`)
      .then((res) => res.json())
      .then((data) => setSwaps(data));
  }, []);

  const filterSwaps = swaps?.filter((swap) => swap?._id !== id);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const providerEmail = e.target.provideremail.value;
    const userEmail = e.target.userEmail.value;
    const price = e.target.price.value;
    const bookingDate = selectedDate;
    const bookingNote = e.target.bookingNote.value;
    const bookingStatus = "pending";

    const swapDetails = {
      name,
      image,
      providerEmail,
      userEmail,
      price,
      bookingDate,
      bookingNote,
      bookingStatus,
    };

    console.log(swapDetails);

    closeModal();

    // fetch("https://swap-gardens-server.vercel.app/ap/v1/user/add-swap", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(swapDetails),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       toast.success("Swap Booked Successfully");
    //     }
    //     e.target.reset();
    //   });
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
            <h2 className="text-2xl font-bold mb-2"> {name} </h2>
            <p className="text-2xl text-[#6c9935] mb-2">${price}.00</p>
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
            <div className="bg-white p-4 rounded-md w-full max-w-3xl">
              <form onSubmit={handleBooking}>
                <div className="flex flex-wrap pb-3">
                  <div className="w-full md:w-1/2 px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Swap Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                      name="name"
                      type="text"
                      placeholder="Name"
                      defaultValue={name}
                      disabled
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Image Url
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="image"
                      type="text"
                      value={image}
                      disabled
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Provider email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="provideremail"
                      type="email"
                      value={userEmail}
                      disabled
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Your Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="userEmail"
                      type="email"
                      value={user?.email}
                      disabled
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Price
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="price"
                      type="number"
                      value={price}
                      disabled
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-4">
                    <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Booking Date
                    </label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholderText="Select a date"
                      required
                    />
                  </div>

                  <div className="w-full px-4">
                    <label className="block text-left text-gray-600 font-medium text-md mb-2 mt-8">
                      Note about booking
                    </label>

                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="bookingNote"
                      maxLength={200}
                      rows="4"
                      placeholder="note about the booking"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center w-full px-4 mt-12 mb-12 md:mb-0">
                    <button
                      className="bg-[#7CAD3A] hover:bg-[#ACD27A] text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline mr-8"
                      type="submit"
                    >
                      Book Swap
                    </button>

                    <button
                      onClick={closeModal}
                      className="bg-black hover:bg-red-600 text-white font-bold  py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
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
          {filterSwaps?.map((swap) => (
            <SwapCard key={swap._id} swap={swap}></SwapCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwapDetails;
