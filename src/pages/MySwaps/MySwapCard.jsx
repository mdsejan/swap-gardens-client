import PropTypes from "prop-types";
import { FaTrash, FaPencil } from "react-icons/fa6";

const MySwapCard = ({ swap }) => {
  const { name, image, price } = swap || {};
  return (
    <>
      <tr>
        <td>
          <div className=" w-16 h-16 md:w-24 md:h-24">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={name}
            />
          </div>
        </td>
        <td className="md:text-lg">{name}</td>
        <td className="md:text-lg font-semibold">${price}</td>
        <th>
          <button
            // onClick={() => handleDelete(_id)}
            className="p-3 rounded bg-orange-400 hover:bg-orange-500 text-white border mr-6 "
          >
            <FaPencil></FaPencil>
          </button>
          <button
            // onClick={() => handleDelete(_id)}
            className="p-3 rounded bg-red-600 hover:bg-red-700 text-white border "
          >
            <FaTrash></FaTrash>
          </button>
        </th>
      </tr>
    </>
  );
};

MySwapCard.propTypes = {
  swap: PropTypes.object,
};

export default MySwapCard;
