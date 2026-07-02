import React, { createContext, useContext, useState } from "react";

export const ContextApi = () => {
  return (
    <div>
      <h2>Context API</h2>
      <CreateThemeContext />

      <h3>Context API Modal Manager</h3>
    </div>
  );
};

const ThemeContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

function CreateThemeContext() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeButton />
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext)!;

  return (
    <button
      className="hook-button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}
