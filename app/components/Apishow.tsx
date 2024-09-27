import { Comic_Neue } from "next/font/google";
import { todo } from "node:test";
import React, { useEffect, useRef, useState } from "react";
type Todo={
id:number;
todo:string;
completed:boolean;
}
const Apishow = () => {
  const reffered = useRef(null);

  const [Todos, settodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => settodos(data.todos));
  }, []);

  const addTask = () => {
    const task = reffered?.current?.value;
    if (task) {
      const newdata = {
        completed: false,
        id: Todos.length + 1, // Ensure a unique id for new task
        todo: task,
      };

      // Add the new task to the Todos array
      settodos([newdata, ...Todos]);

      // Clear the input field after adding a new task
    //   reffered.current.value = "";
    }
  };
  return (
    <div className="flex flex-col gap-y-4 ">
      <h1 className="font-bold text-4xl">Todo Application</h1>
      <input type="text" ref={reffered} className="p-8 border w-40 " />
      <button onClick={addTask}>Add</button>
      <div></div>
      {Todos?.map((item, index) => {
        console.log(item);
        return (
          <div key={index} className="mt-4">
            <h1 className="font-semibold text-xl">{item.todo}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Apishow;
