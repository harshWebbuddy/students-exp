import React, { useState, createContext, ReactNode } from "react";
import ChildA from "./useContext/ChildA";

interface UserContextType {
  name: string;
}

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const UserContext = createContext<UserContextType | null>(null);
const ThemeContext = createContext<ThemeContextType | null>(null);
const UseContext2 = () => {
  const [user, setUser] = useState<UserContextType>({ name: "LOVE" });
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            className="w-20 h-10"
            style={{ backgroundColor: theme === "light" ? "red" : "YELLOW" }}
          >
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContext2;
export { UserContext };
export { ThemeContext };
