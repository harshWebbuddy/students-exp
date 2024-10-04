import React, { useEffect, useRef, useState } from "react";

const Hooks = () => {
  const [name, setname] = useState("");
  const [counter, setcounter] = useState(0);

  const inputEl = useRef<HTMLInputElement | null>(null);
  console.log(inputEl);
  const resetinput = () => {
    setname("");
    if (inputEl.current) {
      inputEl.current.focus();
      console.log(inputEl.current.value);
      inputEl.current.value = "";
    }
  };
  const previousCounterRef = useRef<number>(0);

  useEffect(() => {
    previousCounterRef.current = counter;
  }, [counter]);
  return (
    <div className="text-white">
      <div>
        <input
          ref={inputEl}
          name="name"
          autoComplete="off"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="text-black"
        />
        <button className="text-white" onClick={resetinput}>
          Reset
        </button>
      </div>
      <h2>My name is {name}</h2>
      <h2>Random Counter :{counter}</h2>
      {
        typeof previousCounterRef.current!=="undefined" &&(
<h2>Previous Counter:{previousCounterRef.current} </h2>
        )
      }
      <button onClick={(e) => setcounter(Math.ceil(Math.random() * 100))}>
        Generate Number
      </button>
    </div>
  );
};

export default Hooks;
