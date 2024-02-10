import { TbSunset2 } from "react-icons/tb";
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { GiMoonBats } from 'react-icons/gi';

interface LandingProps {
    theme: string;
    toggleTheme: () => void; // Function that toggles the theme
  }
  
  const Landing: React.FC<LandingProps> = ({ theme, toggleTheme }) =>  {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto p-8">
          <header className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-xl font-bold">AJ Seeni</h1>
              <p className="text-sm">Software engineer</p>
            </div>
            <div className="flex items-center space-x-4">
 
              <IoLogoLinkedin className="h-6 w-6 hover:text-custom-orange transition-colors duration-300" />

              <AiFillGithub className="h-6 w-6 hover:text-custom-orange transition-colors duration-300" />

               {/* Conditionally render the icon based on the theme */}
               {theme === "dark" ? (
                <TbSunset2 className="h-6 w-6 hover:text-custom-orange transition-colors duration-300 cursor-pointer" onClick={toggleTheme} />
              ) : (
                <GiMoonBats className="h-6 w-6 hover:text-custom-orange transition-colors duration-300 cursor-pointer" onClick={toggleTheme} />
              )}
            </div>
          </header>
          <main>
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">projects</h2>
              <div className="space-y-6">
                {/* Project items */}
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  };
  
  export default Landing;