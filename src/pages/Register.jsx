import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import auth from "../config/Firebase.config";
import { ThemeContext } from "../providers/ThemeProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  const { createUser, loading, logOut, googleSignIn } =
    useContext(ThemeContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Loading...");

    const fullName = e.target.fullName.value;
    const imgLink = e.target.imgLink.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset error
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one capital letter.");
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setRegisterError(
        "Password must contain at least one special character (e.g., !@#$%^&*)."
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL: imgLink,
        });

        logOut().then();

        toast.success("Registration Successful", { id: toastId });

        e.target.reset();

        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="lg:min-h-screen px-5 py-12 lg:py-0 flex items-center justify-center ">
      <div className="flex bg-white dark-bg-yellow  rounded-lg shadow-sm border w-full max-w-5xl">
        {/* Left Column for Image */}
        <div className="w-1/2 bg-[#ACD27A] p-12 hidden md:block">
          <h1 className="text-3xl font-semibold text-center mb-1 text-white ">
            Register Now
          </h1>
          <img
            src="https://i.ibb.co/HKVWrZP/login.png"
            alt="Login Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column for Login Form */}
        <div className="w-full md:w-1/2 p-6">
          <div className="max-w-sm mx-auto">
            {/* <h2 className="text-2xl font-semibold text-center mb-4">
              Register
            </h2> */}

            <div className="text-center">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline w-full mt-4 capitalize font-bold text-[#ACD27A] hover:bg-[#ACD27A] "
              >
                <img
                  className="w-4"
                  src="https://i.ibb.co/HpLpWjn/google.png"
                  alt="google"
                />
                <span>Continue With Google</span>
              </button>

              <div className="divider my-10">OR</div>
            </div>

            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imgLink"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Image Link
                </label>
                <input
                  type="text"
                  id="imgLink"
                  name="imgLink"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
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
                  className=" flex items-center justify-center w-full text-white py-2 px-4 rounded-lg bg-[#ACD27A] hover:bg-[#ACD27A] focus:outline-none"
                >
                  Register
                  {loading ? (
                    <span className="loading loading-spinner loading-sm ml-3"></span>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
            {registerError && (
              <p className="text-red-700 font-bold mt-5 bg-slate-100 p-2 text-center rounded">
                {registerError}
              </p>
            )}
            <div>
              <p className="mt-8 text-md">
                Alredy have an Account?
                <Link to="/login" className="text-[#ACD27A] font-bold ml-2">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
