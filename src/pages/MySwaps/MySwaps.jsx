import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const MySwaps = () => {
  const [mySwaps, setMySwaps] = useState([]);
  const { user } = useContext(ThemeContext);

  useEffect(() => {
    fetch(
      `https://swap-gardens-server.vercel.app/api/v1/swaps?user=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMySwaps(data));
  }, [user.email]);

  console.log(mySwaps);

  return (
    <div className="min-h-[80vh] max-w-screen-2xl mx-auto px-4 py-12">
      {mySwaps.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table border rounded">
            {/* head */}
            <thead>
              <tr className="md:text-lg bg-[#FDF9EF] text-black font-semibold">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {cartProducts?.map((product) => (
                <CartCard
                  key={product._id}
                  product={product}
                  setCartProducts={setCartProducts}
                  cartProducts={cartProducts}
                ></CartCard>
              ))} */}
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
