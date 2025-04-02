import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import WeatherInfo from "../components/WeatherInfo";

function Home() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-6 md:p-20  mx-auto text-center bg-gray-50 rounded-lg ">
  <h1 className="text-3xl font-bold mb-4 text-gray-800 sm:text-4xl">
    Stay Organized, Stay Productive! ✅
  </h1>
  <p className="text-gray-600 mb-6 text-lg sm:text-xl">
    Your personal task manager is here! Add, prioritize, and track your tasks effortlessly.  
    Stay ahead of your goals and never miss an important task again.
  </p>

  {/* Responsive Wrapper */}
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 sm:p-8 sm:gap-6">
    <WeatherInfo />
    <TaskInput />
    <TaskList />
  </div>
</div>


  );
}

export default Home;