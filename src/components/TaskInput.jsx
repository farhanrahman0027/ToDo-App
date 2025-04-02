import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";

function TaskInput() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTask({ id: uuidv4(), text: task, priority }));
    setTask("");
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row items-center gap-2">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded w-full md:w-1/2"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border p-2 rounded w-full md:w-auto">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button 
  onClick={handleAddTask} 
  className="ml-2 bg-green-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600"
>
  Add Task
</button>
    </div>
  );
}

export default TaskInput;