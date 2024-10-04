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
// import React, { useEffect, useState } from "react";

// // Define a Node structure for the circular linked list
// class LightNode {
//   constructor(
//     public color: string,
//     public duration: number,
//     public next: LightNode | null = null
//   ) {}
// }

// const Light = () => {
//   const [manualmode, setmanualmode] = useState(false);
//   const [inputValue, setInputValue] = useState(""); // For managing the input field
//   const [timer, setTimer] = useState<number>(10); // Timer state
//   const [currentNode, setCurrentNode] = useState<LightNode | null>(null); // Current light

//   // Initialize the circular linked list
//   useEffect(() => {
//     const greenNode = new LightNode("green", 10);
//     const yellowNode = new LightNode("yellow", 5);
//     const redNode = new LightNode("red", 15);

//     // Link them in a circular manner
//     greenNode.next = yellowNode;
//     yellowNode.next = redNode;
//     redNode.next = greenNode;

//     // Set the initial current node to green
//     setCurrentNode(greenNode);
//     setTimer(greenNode.duration);
//   }, []);

//   useEffect(() => {
//     let interval: string | number | NodeJS.Timeout | undefined;
//     if (!manualmode && currentNode) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer > 0) {
//             return prevTimer - 1;
//           } else {
//             // Move to the next light in the circular linked list
//             const nextNode = currentNode.next;
//             if (nextNode) {
//               setCurrentNode(nextNode);
//               return nextNode.duration;
//             }
//             return prevTimer;
//           }
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [currentNode, manualmode]);

//   // Manual mode light change
//   const handleManualLightChange = (color: string) => {
//     setmanualmode(true);
//     if (currentNode) {
//       let current = currentNode;
//       // Find the node matching the selected color
//       while (current.color !== color && current.next) {
//         current = current.next;
//       }
//       setCurrentNode(current);
//       setTimer(current.duration);
//     }
//   };

//   // Increase timer logic
//   const handleIncreaseTimer = (second: number) => {
//     if (currentNode) {
//       currentNode.duration += second;
//       setTimer(currentNode.duration);
//     }
//   };

//   // Reset to automatic mode and green light
//   const handleoffmode = () => {
//     setmanualmode(false);
//     setInputValue(""); // Clear the input
//     if (currentNode) {
//       let current = currentNode;
//       // Find green light to reset
//       while (current.color !== "green" && current.next) {
//         current = current.next;
//       }
//       setCurrentNode(current);
//       setTimer(current.duration);
//     }
//   };

//   return (
//     <div className="text-white flex flex-col gap-y-6">
//       <button onClick={handleoffmode}>OFF</button>
//       <button className="" onClick={() => handleManualLightChange("red")}>
//         RedManualMode
//       </button>
//       <button className="" onClick={() => handleManualLightChange("yellow")}>
//         YellowManualMode
//       </button>
//       <button className="" onClick={() => handleManualLightChange("green")}>
//         GreenManualMode
//       </button>

//       <label>Increase Timer</label>
//       <input
//         value={inputValue}
//         placeholder="if you want to increase timer"
//         onChange={(e) => setInputValue(e.target.value)} // Update input value
//         onBlur={() => handleIncreaseTimer(Number(inputValue))} // Update timer on blur
//         className="text-black"
//       />

//       <div>Time remaining: {timer}s</div> {/* Display remaining time */}

//       {/* Display light based on the current color */}
//       <div
//         className={`w-20 h-20 rounded-full ${
//           currentNode?.color === "red" ? "bg-red-600" : "bg-white"
//         }`}
//       ></div>
//       <div
//         className={`w-20 h-20 rounded-full ${  
//           currentNode?.color === "yellow" ? "bg-yellow-600" : "bg-white"
//         }`}
//       ></div>
//       <div
//         className={`w-20 h-20 rounded-full ${
//           currentNode?.color === "green" ? "bg-green-600" : "bg-white"
 //         }`}
//       ></div>
//     </div>
//   );
// };

// export default Light;
