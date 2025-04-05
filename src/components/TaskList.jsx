import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks, deleteTask } from "../redux/taskSlice";
import TaskItem from "./TaskItem";
import axios from "axios";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const formattedTasks = response.data.map((task) => ({
          id: task.id,
          text: task.title,
          priority: "Medium",
        }));
        dispatch(setTasks(formattedTasks));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} onDelete={() => dispatch(deleteTask(task.id))} />)
      )}
    </div>
  );
}

export default TaskList;
