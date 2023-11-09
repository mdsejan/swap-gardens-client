import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import MySwapCard from "./MySwapCard";

const MySwaps = () => {
  const [mySwaps, setMySwaps] = useState([]);
  const { user } = useContext(ThemeContext);

  useEffect(() => {
    fetch(
      `https://swap-gardens-server.vercel.app/api/v1/myswaps/?user=${user.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => setMySwaps(data))
      .catch((error) => {
        console.error("Error fetching my swaps:", error);
        // Handle error as needed
      });
  }, [user.email]);

  return (
    <div className=" md:min-h-[60vh] xl:min-h-[80vh] max-w-screen-2xl mx-auto px-4 py-12">
      {mySwaps?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table border border-[#F3F9EC] rounded">
            {/* head */}
            <thead>
              <tr className="md:text-lg bg-[#F3F9EC] text-[#6c9935] font-semibold">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mySwaps?.map((swap) => (
                <MySwapCard
                  key={swap._id}
                  swap={swap}
                  setMySwaps={setMySwaps}
                  mySwaps={mySwaps}
                ></MySwapCard>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="min-h-[60vh] flex justify-center items-center">
          <h2 className="text-2xl">{`You Don't have any Swaps`}</h2>
        </div>
      )}
    </div>
  );
};

export default MySwaps;
