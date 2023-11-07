import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const AddSwap = () => {
  const { user } = useContext(ThemeContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    const swapLocation = e.target.swapLocation.value;
    const price = e.target.price.value;
    const description = e.target.description.value;

    const swapDetails = {
      name,
      image,
      userName,
      userEmail,
      swapLocation,
      price,
      description,
    };

    fetch("https://swap-gardens-server.vercel.app/api/v1/user/add-swap", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(swapDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Swal.fire({
          //   position: "center",
          //   icon: "success",
          //   title: "Product Added Successfully",
          //   showConfirmButton: false,
          //   timer: 2500,
          // });
        }
        e.target.reset();
      });
  };

  return (
    <div className="min-h-[110vh] max-w-screen-2xl mx-auto px-4 py-12">
      <div className="flex flex-col justify-center items-center lg:min-h-screen mx-3 md:mx-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 max-w-screen-lg border md:p-12">
            <div className="w-full mt-12 md:mt-0 mb-16 text-center">
              <h1 className="text-4xl text-[#7CAD3A] underline font-semibold mt-3">
                Add New Swap
              </h1>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Swap Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                name="name"
                type="text"
                placeholder="Name"
                required
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
                placeholder="Image Url"
                required
              />
            </div>

            <div className="w-full md:w-1/2 px-4">
              <label className="block  text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Your Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="userName"
                type="text"
                value={user?.displayName}
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
                Swap Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="swapLocation"
                type="text"
                placeholder="Swap Location"
                required
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
                placeholder="Price"
              />
            </div>
            <div className="w-full px-4">
              <label className="block text-left text-gray-600 font-medium text-md mb-2 mt-8">
                Description
              </label>

              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="description"
                rows="4"
                placeholder="Description"
                required
              ></textarea>
            </div>
            <div className="flex justify-center w-full px-4 mt-12 mb-12 md:mb-0">
              <button
                className="bg-[#ACD27A] hover:bg-[#7CAD3A] text-white font-bold w-2/3 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Swap
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSwap;
