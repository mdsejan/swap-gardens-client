import PropTypes from "prop-types";

const BookingsCard = ({ booking }) => {
  const { name, image, price, bookingStatus, bookingDate } = booking || {};

  const dateObject = new Date(bookingDate);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div className="card h-full rounded-lg grid grid-cols-1 md:grid-cols-5 bg-[#F3F9ED] ">
      <div className="md:col-span-2">
        <figure className="h-[17rem]">
          <img
            className="w-full h-full object-cover rounded-s-lg"
            src={image}
            alt={name}
          />
        </figure>
      </div>
      <div className="card-body md:col-span-3">
        <div>
          <span className="px-2 py-1 rounded-sm bg-[#557627] text-white ">
            {bookingStatus}
          </span>
        </div>
        <h2 className="text-2xl font-semibold mt-2 text-[#0B0B0B]">{name}</h2>
        <h2 className="text-[#6c9935] text-lg font-semibold ">${price}.00</h2>
        <h2 className="text-lg font-normal ">
          <span className="font-semibold">Booking Date:</span> {formattedDate}
        </h2>
      </div>
    </div>
  );
};

BookingsCard.propTypes = {
  booking: PropTypes.object,
};

export default BookingsCard;
