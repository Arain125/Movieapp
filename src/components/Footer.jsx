import { Link } from "react-router-dom";
import logo from '../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-15">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="h-16 me-3"
                alt="FlowBite Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-red-600 uppercase">
                Resources
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link to="/" className="text-white hover:text-red-500">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="text-white hover:text-red-500">About</Link>
                </li>
                <li>
                  <Link to="/services" className="text-white hover:text-red-500">Service</Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-red-600 uppercase">
                Get in Touch
              </h2>
              <ul className="font-medium">
                <li>
                  <Link to="/contact" className="text-white hover:text-red-500">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-red-600 uppercase">
                Legal
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <span className="cursor-not-allowed text-gray-400">Privacy Policy</span>
                </li>
                <li>
                  <span className="cursor-not-allowed text-gray-400">Terms & Conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Shahzaib. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <span className="text-gray-400 cursor-not-allowed">
              {/* Facebook Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 ... 1.325V1.325C24 .593 23.408 0 22.675 0z" />
              </svg>
            </span>
            <span className="text-gray-400 cursor-not-allowed">
              {/* Twitter Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.829 9.829 0 01-2.828 ... 4.557z" />
              </svg>
            </span>
            <span className="text-gray-400 cursor-not-allowed">
              {/* GitHub Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 ... 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
