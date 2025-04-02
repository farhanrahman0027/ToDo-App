function TaskItem({ task, onDelete }) {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center p-2 border rounded mb-2 w-full">
        <span className={`font-semibold ${task.priority === "High" ? "text-red-500" : task.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
          {task.text} ({task.priority})
        </span>
        <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded mt-2 md:mt-0">Delete</button>
      </div>
    );
  }
  
  export default TaskItem;