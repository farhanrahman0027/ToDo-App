import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className=" sticky top-0 z-50 bg-gray-800 p-4 text-white flex flex-col md:flex-row justify-between items-center">
      <Link to="/" className="text-lg font-bold mb-2 md:mb-0">To-Do App</Link>
      {isAuthenticated ? (
        <button onClick={() => dispatch(logout())} className="bg-red-500 px-4 py-2 rounded w-full md:w-auto">Logout</button>
      ) : (
        <Link to="/login" className="bg-blue-500 px-4 py-2 rounded w-full md:w-auto">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
