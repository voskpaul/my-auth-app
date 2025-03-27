import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>

        <form className="mt-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <Link to="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600">
            Login
          </button>

          {/* Social Login */}
          <div className="mt-4 text-center">Or login with:</div>
          <div className="flex justify-center space-x-4 mt-3">
            <button className="bg-red-500 text-white p-2 rounded-md"><FaGoogle /></button>
            <button className="bg-blue-600 text-white p-2 rounded-md"><FaFacebook /></button>
            <button className="bg-blue-800 text-white p-2 rounded-md"><FaLinkedin /></button>
            <button className="bg-gray-900 text-white p-2 rounded-md"><FaGithub /></button>
          </div>

          {/* SignUp Link */}
          <div className="text-center mt-4">
            <p className="dark:text-white">
              Don't have an account?
              <Link to="/signup" className="text-blue-500 hover:underline ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
