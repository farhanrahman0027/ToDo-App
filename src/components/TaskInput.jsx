import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import axios from "axios";

function TaskInput() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = async () => {
    if (task.trim() === "") return;

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: task,
        priority: priority,
        completed: false,
      });

      dispatch(addTask({ id: response.data.id, text: task, priority }));
      setTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded max-w-full"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="ml-2 border p-2 rounded">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask} className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
