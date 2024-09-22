import React, { useState } from 'react'

type Categories = "todo" | "progress" | "completed"

interface TaskListProps {
    name: string;
    children: React.ReactNode;
}
interface Task {
    id: string;
    title: string
    category: Categories
}
type TaskList = Record<Categories, Task[]>;
const initialTasks: TaskList = {
    todo: [
        {
            id: "1",
            title: "Task 1",
            category: "todo"
        }
    ],
  
     progress: [ {
            id: "1",
            title: "Task 1",
            category: "todo"
        }],
    completed: [ {
            id: "1",
            title: "Task 1",
            category: "todo"
        }]
};
const Task = () => {
    const [tasks, setTasks] = useState<TaskList>(initialTasks);
    const categories = React.useMemo(() => {
        return Object.keys(tasks);
    }, [tasks]);

    return (
        <div className='flex flex-row'>
            {categories.map(category => <TaskList key={category} name={category} >
                Render Our Cards 
                </TaskList>
                )}
        </div>
    )
}

export default Task
const TaskList: React.FC<TaskListProps> = ({ name, children }) => {
    return (
        <div className='flex flex-col gap-y-6 border w-full '>
       <div className='font-bold'>{name.toUpperCase()}</div> 
       {children}
       <div>Add Cards</div>
        </div>
    )
}