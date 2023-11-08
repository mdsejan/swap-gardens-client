import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ThemeContext } from "../providers/ThemeProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { googleSignIn, signInUser } = useContext(ThemeContext);

  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in ...");

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Logged in", { id: toastId });

        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message, { id: toastId });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        toast.success("Logged in");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="lg:min-h-screen px-5 py-12 lg:py-0 flex items-center justify-center ">
      <div className="flex bg-white dark-bg-yellow  rounded-lg shadow-sm border w-full max-w-4xl">
        {/* Left Column for Image */}
        <div
          className="w-1/2 bg-[#ACD27A] p-12 hidden md:block bg-no-repeat bg-bottom bg-cover "
          style={{
            backgroundImage: "url('https://i.ibb.co/3vzKPQz/1-1-370x500.webp')",
          }}
        >
          <h1 className="text-3xl font-semibold text-center mb-1 text-white ">
            Welcome Back
          </h1>
          {/* <img
            src="https://i.ibb.co/HKVWrZP/login.png"
            alt="Login Image"
            className="w-full h-full object-cover"
          /> */}
        </div>

        {/* Right Column for Login Form */}
        <div className="w-full md:w-1/2 p-6">
          <div className="max-w-sm mx-auto">
            {/* <h1 className="text-3xl font-semibold text-center mb-4">Login</h1> */}
            <div className="text-center">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline w-full mt-4 capitalize font-bold text-[#ACD27A] hover:bg-[#ACD27A]"
              >
                <img
                  className="w-4"
                  src="https://i.ibb.co/HpLpWjn/google.png"
                  alt="google"
                />
                <span>Login With Google</span>
              </button>
              <div className="divider my-10">OR</div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    id="togglePassword"
                    className="text-gray-400 focus:outline-none"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-xl mt-7"></FaEyeSlash>
                    ) : (
                      <FaEye className="text-xl mt-7"></FaEye>
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full text-white py-2 px-4 rounded-lg bg-[#ACD27A] hover:bg-[#ACD27A] focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className="mt-8 text-md">
                New to this website? Please &nbsp;
                <Link to="/register" className="text-[#ACD27A] font-bold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
