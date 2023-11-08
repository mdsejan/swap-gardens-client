import { FaLocationDot } from "react-icons/fa6";

const SwapCard = () => {
  return (
    <div className="w-full bg-[#F3F9EC] rounded  border pb-4">
      <img
        src="https://i.pinimg.com/564x/ba/9b/e0/ba9be03a4ed0a9907f5dd790d1337f27.jpg"
        alt="Swap"
        className="w-full h-72 object-cover"
      />

      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">Monstera Deliciosa</div>
        <p className="text-gray-700 text-sm">
          {`The Monstera Deliciosa, commonly known as the Swiss Cheese Plant, is a stunning tropical beauty that will transform your living space. With its large,  `}
        </p>

        <h2 className="text-[#6c9935] text-xl font-bold mt-3">$35.00</h2>
        <div className="flex items-center mt-2">
          <FaLocationDot className="text-xl mr-2 text-[#557627]"></FaLocationDot>
          <p className="text-md font-semibold text-[#557627] ">
            New York City, NY
          </p>
        </div>
      </div>

      <div className="flex justify-between px-6 py-2">
        <div className="flex">
          <img
            src="https://i.pinimg.com/564x/68/9e/3e/689e3e13e65cd091270d7cd6de61fed5.jpg"
            alt="Provider"
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span className="text-sm mt-2">James Mitchell</span>
        </div>
        <div className="w-1/3">
          <button className="bg-[#557627] hover:bg-[#70993E] text-white text-md font-semibold py-1 px-4 rounded">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapCard;
