import React, { use, useReducer, useRef, useState } from "react";
type Categories = "todo" | "progress" | "completed";
interface TaskListProps {
  name: string;
  children: React.ReactNode;
}
interface Task {
  id: string;
  title: string;
  category: Categories;
}
type TaskList = Record<Categories, Task[]>;
const initialTasks: TaskList = {
  todo: [
    {
      id: "1",
      title: "Task 1",
      category: "todo",
    },
  ],
  progress: [
    {
      id: "1",
      title: "Task 1",
      category: "todo",
    },
  ],
  completed: [
    {
      id: "1",
      title: "Task 1",
      category: "todo",
    },
  ],
};
const options = [
  { label: "Todo", value: "todo" },
  { label: "Progress", value: "progress" },
  { label: "Completed", value: "completed" },
];
const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div>
      <p>{task.title}</p>
    </div>
  );
};

const AddTaskForm = ({
  addNewTaskHandler,
}: {
  addNewTaskHandler: (payload: Task) => void;
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const optionRef = useRef<HTMLSelectElement>(null);
  const [title, setTitle] = useState();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titleRef.current && optionRef.current) {
      const payload: Task = {
        id: self.crypto.randomUUID(),
        title: titleRef.current.value,
        category: optionRef.current.value as Categories,
      };
      addNewTaskHandler(payload);
      titleRef.current.value = "";
    }
  };
  return (
    <div>
      <h2>Create a new task</h2>
      <form onSubmit={handleSubmit} className="flex flex-row">
        <input ref={titleRef} type="text" placeholder="Task title" />
        <select ref={optionRef}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <button type="submit">Add Button</button>
      </form>
    </div>
  );
};
const TaskList: React.FC<TaskListProps> = ({ name, children }) => {
  return (
    <div className="flex flex-col gap-y-10 border w-full ">
      <div className="font-bold">{name.toUpperCase()}</div>
      <div>{children}</div>
      <div>Add Cards</div>
    </div>
  );
};
const Task = () => {
  const [tasks, setTasks] = useState<TaskList>(initialTasks);
  const categories = React.useMemo(() => {
    return Object.keys(tasks) as Categories[];
  }, [tasks]);
  const addNewTaskHandler = (payload: Task) => {
    const TempTaskList = [...tasks[payload.category]];
    TempTaskList.push(payload);
    setTasks((prev) => ({
      ...prev,
      [payload.category]: TempTaskList,
    }));
  };
  return (
    <div className="flex flex-row">
      <AddTaskForm addNewTaskHandler={addNewTaskHandler} />
      {categories.map((category, index) => (
        <TaskList key={index} name={category}>
          {tasks[category].map((task) => (
            <div key={task.id}>
              <TaskCard task={task} />
            </div>
          ))}
        </TaskList>
      ))}
    </div>
  );
};
export default Task;
