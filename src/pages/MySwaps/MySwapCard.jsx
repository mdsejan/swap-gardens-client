import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySwapCard = ({ swap, mySwaps, setMySwaps }) => {
  const { _id, name, image, price } = swap || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://swap-gardens-server.vercel.app/api/v1/user/delete-swap/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Swap has been deleted");

              const remaining = mySwaps.filter((swaps) => swaps._id !== id);

              setMySwaps(remaining);
            }
          });
      }
    });
  };
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
        <td className="md:text-lg text-[#557627]">{name}</td>
        <td className="md:text-lg text-[#557627] font-semibold">${price}</td>
        <th>
          <Link to={`/update-swap/${_id}`}>
            <button className="p-3 rounded bg-[#557627] hover:bg-[#70993E] text-white border mr-6 ">
              <FaPencil></FaPencil>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
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
  mySwaps: PropTypes.array,
  setMySwaps: PropTypes.object,
};

export default MySwapCard;
