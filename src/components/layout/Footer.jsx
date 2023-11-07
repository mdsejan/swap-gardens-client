import { Link } from "react-router-dom";
import { RiPlantFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="divide-y bg-[#D9E9D7] text-black">
      <div className="max-w-screen-2xl px-4 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 my-8 lg:my-0">
          <Link
            to="/"
            rel="noopener noreferrer"
            className="flex justify-start md:justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#ACD27A]">
              <RiPlantFill className="text-white text-2xl"></RiPlantFill>
            </div>
            <span className="self-center text-2xl font-semibold">
              SwapGardens
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase text-gray-900">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Features
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase text-gray-900">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-900">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Public API
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-900">Social media</div>
            <div className="flex justify-start space-x-3 text-xl">
              <Link
                to="https://www.facebook.com"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook></FaFacebook>
              </Link>
              <Link
                rel="noopener noreferrer"
                to="https://twitter.com/"
                title="Twitter"
                className="flex items-center p-1"
              >
                <FaSquareXTwitter></FaSquareXTwitter>
              </Link>
              <Link
                rel="noopener noreferrer"
                to="https://www.instagram.com/"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaInstagram></FaInstagram>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center border-t border-gray-400 text-gray-600">
        © 2023 SwapGardens. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
