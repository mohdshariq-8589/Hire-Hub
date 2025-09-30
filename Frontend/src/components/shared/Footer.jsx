import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            Hire<span className="text-orange-500">Hub</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Connecting talent with opportunities. Your career starts here!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-blue-600">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/browse" className="hover:text-blue-600">
                Browse
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-blue-600">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-gray-600">
            <Link
              to="https://www.instagram.com/_shariq______/?hl=en"
              target="_blank"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
            </Link>
            <Link to="https://github.com/mohdshariq-8589" target="_blank">
              <FaGithub className="w-6 h-6 hover:text-gray-800 transition" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mohdshariq01/"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6 hover:text-blue-600 transition" />
            </Link>
            <Link to="#" target="_blank">
              <FaFacebook className="w-6 h-6 hover:text-blue-700 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} HireHub. Developed by Mohd Shariq.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
