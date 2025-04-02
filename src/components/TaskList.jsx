import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="w-full md:w-3/4 mx-auto">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks available</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} onDelete={() => dispatch(deleteTask(task.id))} />)
      )}
    </div>
  );
}

export default TaskList;