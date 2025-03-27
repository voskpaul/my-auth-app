import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Weak");
  const [isChecked, setIsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) setPasswordStrength("Weak");
    else if (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.length >= 8) setPasswordStrength("Strong");
    else setPasswordStrength("Medium");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900"
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>

        <form className="mt-4">
          {/* Username Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          {/* Password Input with Eye Icon */}
          <div className="mt-4 relative">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-500 dark:text-gray-300"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
            <small className={`text-sm ${passwordStrength === "Strong" ? "text-green-500" : passwordStrength === "Medium" ? "text-yellow-500" : "text-red-500"}`}>
              Password Strength: {passwordStrength}
            </small>
          </div>

          {/* Confirm Password Input */}
          <div className="mt-4 relative">
            <label className="block text-gray-700 dark:text-gray-300">Confirm Password</label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Re-enter your password"
              className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-10 text-gray-500 dark:text-gray-300"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              I agree to the <Link to="/terms" className="text-blue-500 hover:underline">Terms & Conditions</Link>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
            disabled={!isChecked}
          >
            Sign Up
          </button>

          {/* Social Sign-Up Options */}
          <div className="mt-4 text-center">Or sign up with:</div>
          <div className="flex justify-center space-x-4 mt-3">
            <button className="bg-red-500 text-white p-2 rounded-md">
              <FaGoogle />
            </button>
            <button className="bg-blue-600 text-white p-2 rounded-md">
              <FaFacebook />
            </button>
            <button className="bg-blue-800 text-white p-2 rounded-md">
              <FaLinkedin />
            </button>
            <button className="bg-gray-900 text-white p-2 rounded-md">
              <FaGithub />
            </button>
          </div>

          {/* Link to Login Page */}
          <div className="text-center mt-4">
            <p className="dark:text-white">
              Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline ml-1">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
// In the SignUp component, we have the following features: