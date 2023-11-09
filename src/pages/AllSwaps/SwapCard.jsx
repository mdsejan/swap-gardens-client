import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SwapCard = ({ swap }) => {
  const {
    _id,
    name,
    image,
    description,
    price,
    swapLocation,
    providerImage,
    providerName,
  } = swap || {};

  return (
    <div className="flex flex-col justify-between w-full bg-[#F3F9EC] rounded  border pb-4">
      <div>
        <img src={image} alt={name} className="w-full h-72 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> {name} </div>
          <p className="text-gray-700 text-sm">{description}</p>

          <h2 className="text-[#6c9935] text-xl font-bold mt-3">${price}.00</h2>
          <div className="flex items-center mt-2">
            <FaLocationDot className="text-xl mr-2 text-[#557627]"></FaLocationDot>
            <p className="text-md font-semibold text-[#557627] ">
              {swapLocation}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-6 py-2">
        <div className="flex">
          <img
            src={providerImage}
            alt={providerName}
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span className="text-sm mt-2">{providerName}</span>
        </div>
        <div className="w-1/3">
          <Link to={`/swap/${_id}`} swap={swap}>
            <button className="bg-[#557627] hover:bg-[#70993E] text-white text-md font-semibold py-1 px-4 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SwapCard.propTypes = {
  swap: PropTypes.object,
};

export default SwapCard;
