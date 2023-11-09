import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import BookingsCard from "./BookingsCard";

const MyBookings = () => {
  const { user } = useContext(ThemeContext);
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    fetch(
      `https://swap-gardens-server.vercel.app/api/v1/bookings/?user=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, [user]);

  console.log(myBookings);
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-medium mt-2">My Bookings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {myBookings?.map((booking) => (
          <BookingsCard key={booking._id} booking={booking}></BookingsCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
