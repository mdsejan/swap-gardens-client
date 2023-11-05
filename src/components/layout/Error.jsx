import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lottie from "lottie-react";
import errorAnimation from "../../../public/lottie/error404.json";

const Error = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="flex items-center min-h-[80vh] md:p-16 bg-gray-50 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
              {/* <span className="sr-only">Error</span>404 */}
              <Lottie animationData={errorAnimation} loop={true} />
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              {`Sorry, we couldn't find this page.`}
            </p>
            <p className="mt-4 mb-8 text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              className="px-3 lg:px-8 py-3 w-full font-semibold rounded bg-violet-600 text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Error;
