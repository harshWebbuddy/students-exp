import React, { useEffect, useState } from "react";

const Light = () => {
  const [currentLight, setCurrentLight] = useState<string>("green");
  const [RedLight, setRedLight] = useState(15);

  const [GreenLight, setGreenLight] = useState(10);

  const [YellowLight, setYellowLight] = useState(5);
  const [manualmode, setmanualmode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const getCurrentduration = () => {
    switch (currentLight) {
      case "green":
        return GreenLight;
      case "red":
        return RedLight;
      case "yellow":
        return YellowLight;
      default:
        return 0;
    }
  };
  const [timer, setTimer] = useState(getCurrentduration());

  const handleManualLightChange = (color: string) => {
    setmanualmode(true);
    setCurrentLight(color);
    setTimer(getCurrentduration());
  };
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (!manualmode) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1; // Decrease timer every second
          } else {
            switch (currentLight) {
              case "green":
                setCurrentLight("yellow");
                setTimer(YellowLight); // Reset timer for yellow light
                break;
              case "yellow":
                setCurrentLight("red");
                setTimer(RedLight); // Reset timer for red light
                break;
              case "red":
                setCurrentLight("green");
                setTimer(GreenLight); // Reset timer for green light
                break;
              default:
                setCurrentLight("green");
            }
            return getCurrentduration(); // Reset timer for the next light
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentLight, manualmode]);
  const handleIncreaseTimer = (light: string, second: number) => {
    if (light === "red") {
      setRedLight(RedLight + second);
    } else if (light === "green") {
      setGreenLight(GreenLight + second);
    } else {
      setYellowLight(YellowLight + second);
    }
  };
  const handleoffmode = () => {
    setInputValue("");
    setmanualmode(false);
    setCurrentLight("green");
    setTimer(GreenLight);
  };
  return (
    <div className="text-white flex flex-col gap-y-6">
      <div>Time remaining: {timer}s</div>
      <button onClick={handleoffmode}>OFF</button>
      <button className="" onClick={() => handleManualLightChange("red")}>
        RedManualMode
      </button>

      <button className="" onClick={() => handleManualLightChange("yellow")}>
        YellowManualMode
      </button>
      <button className="" onClick={() => handleManualLightChange("green")}>
        GreenManualMode
      </button>
      <label>Increase Timer</label>
      <input
        value={inputValue}
        placeholder="if you want to increase timer"
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => handleIncreaseTimer("red", Number(inputValue))}
        className="text-black"
      />
      <div
        className={`w-20 h-20 rounded-full ${
          currentLight === "red" ? "bg-red-600" : "bg-white"
        }`}
      ></div>
      <div
        className={`w-20 h-20 rounded-full ${
          currentLight === "yellow" ? "bg-yellow-600" : "bg-white"
        }`}
      ></div>
      <div
        className={`w-20 h-20 rounded-full ${
          currentLight === "green" ? "bg-green-600" : "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default Light;
