import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { TbSunset2 } from "react-icons/tb";
import { GiMoonBats } from "react-icons/gi";
import Logo from "./assets/logo.png";

import "./App.css";
import Landing from "./tsx/landing";
import Footer from "./tsx/footer";

function App() {
  const [theme, setTheme] = useState("light");

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
    document.documentElement.classList.toggle(
      "light",
      initialTheme === "light"
    );
    // Save the initial theme to localStorage
    localStorage.setItem("theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="App">
      <div className="min-h-screen max-w-full overflow-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="flex flex-col">
          <header className=" bg-white dark:bg-black flex fixed w-full top-0 justify-between items-center">
            <div className=" w-6/12 md:w-6/12  lg:w-2/12 p-12 pt-0 pb-0">
              <img
                src={Logo}
                alt="David's trybe"
                className={`${theme === "light" ? "invert" : ""}`}
              />
            </div>

            <div className="flex items-center space-x-4 py-0 px-8 text-xs md:text-base lg:text-base text-center">
              <Link
                to="home" // ID of the target section for "About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-semibold cursor-pointer hover:text-indigo-900  transition-colors duration-300"
              >
                Tehillah 3.0
              </Link>
              <a
                href="mailto:your-email@example.com" // Replace this with your actual email address
                className="bg-indigo-900 p-2 rounded-md text-white cursor-pointer transition-colors duration-300"
              >
                Contact
              </a>
              {theme === "light" ? (
                <GiMoonBats
                  className="h-6 w-6 hover:text-indigo-900 transition-colors duration-300 cursor-pointer"
                  onClick={toggleTheme}
                />
              ) : (
                <TbSunset2
                  className="h-6 w-6 hover:text-indigo-900  transition-colors duration-300 cursor-pointer"
                  onClick={toggleTheme}
                />
              )}
            </div>
          </header>
          <div className="w-screen lg:h-screen p-0">
            <iframe
              src="https://player.vimeo.com/video/993008930?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;background=1&amp;muted=1"
              allow="autoplay;clipboard-write"
              title="Tehillah Teaser"
              className=" w-screen h-3/4 md:h-screen p-0 m-0 mt-10"
            ></iframe>
          </div>
          <div className="max-w-4xl mx-auto px-8">
            <div id="home" className="">
              <Landing />
            </div>
            <div id="about"></div>
          </div>

          <footer>
            <div className="footer bg-muted w-full bg-indigo-500 text-muted-foreground py-8 md:py-12">
              <div className="container max-w-4xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-white">
                  &copy; 2024 Tehillah Gospel Concert. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-secondary-hover bg-white text-indigo-900 font-bold py-2 px-4 rounded">
                    Reserve Your Spot
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
