  import React, { useRef, useState } from "react";

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
        id: "2",
        title: "Task 2",
        category: "progress",
      },
    ],
    completed: [
      {
        id: "3",
        title: "Task 3",
        category: "completed",
      },
    ],
  };

  const options = [
    { label: "Todo", value: "todo" },
    { label: "Progress", value: "progress" },
    { label: "Completed", value: "completed" },
  ];

  const TaskCard = ({
    task,
    setAsEditing,
  }: {
    task: Task;
    setAsEditing: (task: Task) => void;
  }) => {
    return (
      <div>
        <p>{task.title}</p>
        <button onClick={() => setAsEditing(task)}>Edit</button>
      </div>
    );
  };

  const TaskForm = ({
    addNewTaskHandler,
    editTaskHandler,
    mode,
    task,
  }: {
    addNewTaskHandler: (payload: Task) => void;
    editTaskHandler: (payload: Task) => void;
    mode: "add" | "edit";
    task?: Task;
  }) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const optionRef = useRef<HTMLSelectElement>(null);
  
    // Populate form fields when editing a task
    React.useEffect(() => {
      if (task && titleRef.current && optionRef.current) {
        titleRef.current.value = task.title;
        optionRef.current.value = task.category;
      }
    }, [task]);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (titleRef.current && optionRef.current) {
        const payload: Task = {
          id: mode === "add" ? self.crypto.randomUUID() : task!.id,
          title: titleRef.current.value,
          category: optionRef.current.value as Categories,
        };
  
        if (mode === "add") {
          addNewTaskHandler(payload);
        } else {
          editTaskHandler(payload);
        }
  
        // Clear form after submission
        titleRef.current.value = "";
        optionRef.current.value = "todo"; // Default value
      }
    };
  
    return (
      <div>
        <h2>{mode === "add" ? "Create a new task" : "Edit task"}</h2>
        <form onSubmit={handleSubmit} className="flex flex-row">
          <input
            ref={titleRef}
            type="text"
            placeholder="Task title"
          />
          <select ref={optionRef}>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                selected={task?.category === option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <button type="submit">
            {mode === "add" ? "Add task" : "Edit task"}
          </button>
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
    const [editingTask, setEditingTask] = useState<Task | undefined>();

    const categories = React.useMemo(() => {
      return Object.keys(tasks) as Categories[];
    }, [tasks]);

    const addNewTaskHandler = (payload: Task) => {
      const tempTaskList = [...tasks[payload.category]];
      tempTaskList.push(payload);
      setTasks((prev) => ({
        ...prev,
        [payload.category]: tempTaskList,
      }));
    }; 

    const editTaskHandler = (payload: Task) => {
      const oldTask = editingTask!;
      
      // If the category hasn't changed, replace the task in the same category
      if (oldTask.category === payload.category) {
        const updatedList = tasks[oldTask.category].map(task =>
          task.id === oldTask.id ? payload : task
        );
        
        setTasks(prev => ({
          ...prev,
          [oldTask.category]: updatedList,
        }));
      } else {
        // Remove from old category and add to new category if category changed
        const oldList = tasks[oldTask.category].filter(task => task.id !== oldTask.id);
        const newList = [...tasks[payload.category], payload];
    
        setTasks(prev => ({
          ...prev,
          [oldTask.category]: oldList,
          [payload.category]: newList,
        }));
      }
    
      // Reset editingTask
      setEditingTask(undefined);
    };
    
    

    return (
      <div className="flex flex-row">
        <TaskForm
          addNewTaskHandler={addNewTaskHandler}
          editTaskHandler={editTaskHandler}
          mode={editingTask ? "edit" : "add"}
          task={editingTask}
        />
        {categories.map((category, index) => (
          <TaskList key={index} name={category}>
            {tasks[category].map((task) => (
              <div key={task.id}>
                <TaskCard task={task} setAsEditing={setEditingTask} />
              </div>
            ))}
          </TaskList>
        ))}
      </div>
    );
  };

  export default Task;
