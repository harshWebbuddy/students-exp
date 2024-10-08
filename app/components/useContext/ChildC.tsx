import React, { useContext, useState } from "react";
import { ThemeContext, UserContext } from "../useContext";

const ChildC = () => {
    const user = useContext(UserContext);

    if (!user) {
      return <div>No user found</div>;
    }
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return <div>No theme found</div>;
  }
  const { theme, setTheme } = themeContext;
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Change theme{user.name}</button>
    </div>
  );
};

export default ChildC;
