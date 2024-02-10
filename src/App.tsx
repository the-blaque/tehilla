import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './tsx/landing';

function App() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for stored theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    // Check for user's system preference for dark mode
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Determine the initial theme
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme); // Set the initial theme

    // Apply the initial theme
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    // Save the initial theme to localStorage
    localStorage.setItem("theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="App">
  < Landing theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
