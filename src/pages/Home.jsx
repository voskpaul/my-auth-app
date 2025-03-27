import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to My Auth App</h1>
      <div className="mt-6 space-x-4">
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Login
        </Link>
        <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
