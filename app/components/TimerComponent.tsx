import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [seconds, setseconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
        console.log("set interval")
      setseconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
        console.log("time to stop")
      clearInterval(intervalId);
    };
  },[]);
  return <div>Seconds {seconds}</div>;
};

export default TimerComponent;
