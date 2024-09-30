// import { Comic_Neue } from "next/font/google";
// import { todo } from "node:test";
// import React, { useEffect, useRef, useState } from "react";
// type Todo={
// id:number;
// todo:string;
// completed:boolean;
// }
// const Apishow = () => {
//   const reffered = useRef(null);

//   const [Todos, settodos] = useState<Todo[]>([]);
//   useEffect(() => {
//     fetch("https://dummyjson.com/todos")
//       .then((res) => res.json())
//       .then((data) => settodos(data.todos));
//   }, []);

//   const addTask = () => {
//     const task = reffered?.current?.value;
//     if (task) {
//       const newdata = {
//         completed: false,
//         id: Todos.length + 1, 
//         todo: task,
//       };

//       settodos([newdata, ...Todos]);

    
//       if (reffered.current) reffered.current.value = "";
//     }
//   };
//   return (
//     <div className="flex flex-col gap-y-4 ">
//       <h1 className="font-bold text-4xl">Todo Application</h1>
//       <input type="text" ref={reffered} className="p-8 border w-40 " />
//       <button onClick={addTask}>Add</button>
//       <div></div>
//       {Todos?.map((item, index) => {
//         console.log(item);
//         return (
//           <div key={index} className="mt-4">
//             <h1 className="font-semibold text-xl">{item.todo}</h1>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Apishow;
import React, { useEffect, useRef, useState } from "react";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

const Apishow = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [Todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, []);

  const addTask = () => {
    const task = inputRef?.current?.value;
    if (task) {
      const newTodo = {
        completed: false,
        id: Todos.length + 1, // Use the length + 1 to generate a new id
        todo: task,
      };

      setTodos([newTodo, ...Todos]);

      // Clear the input field after adding the task
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-y-4 ">
      <h1 className="font-bold text-4xl">Todo Application</h1>
      <input
        type="text"
        ref={inputRef}
        className="p-2 border w-40"
        placeholder="Enter a new task"
      />
      <button
        onClick={addTask}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
      <div>
        {Todos?.map((item) => (
          <div key={item.id} className="mt-4">
            <h1 className="font-semibold text-xl">{item.todo}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apishow;
