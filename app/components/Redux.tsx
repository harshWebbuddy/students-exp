"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { RootState } from "./reduxStore/store";

const Redux = () => {
  const [amount, setamount] = useState(0);
  const count = useSelector((state: RootState) => state.counter.value); // Typed state
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncrementAmount = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <div className="flex flex-col items-center">
      <button
        className="px-10 py-2 bg-green-500 text-white"
        onClick={handleIncrement}
      >
        +
      </button>
      <h2 className="my-4 text-2xl">Count: {count}</h2>
      <button
        className="px-10 py-2 bg-red-500 text-white"
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        className="px-10 mt-4 py-2 bg-red-500 text-white"
        onClick={handleReset}
      >
        Reset
      </button>{" "}
      <input
      className="text-black"      type="Number"
        placeholder="put value"
        value={amount}
        onChange={(e) => setamount(Number(e.target.value))}
      />
      <button
        className="px-10 mt-4 py-2 bg-red-500 text-white"
        onClick={handleIncrementAmount}
      >
        INCREASE
      </button>
    </div>
  );
};

export default Redux;
