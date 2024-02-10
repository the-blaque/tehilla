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
    <h3 className="text-lg font-semibold mt-8 mb-4">Projects</h3>
    <div className="space-y-6">
      <div>
        <h5 className="text-md font-semibold">FakeNews</h5>
        <p className="text-sm">A Machine Learning and Natural Language Processing Approach to Detecting Fake News</p>
      </div>
      <div>
      <h5 className="text-md font-semibold">Card Games</h5>
        <p className="text-sm">Generic text based cards game implemented using a variety of design patterns</p>
      </div>
      <div>
      <h5 className="text-md font-semibold flex items-center">
          Expression Calculator{" "}
          <span className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent bg-custom-orange text-white hover:bg-custom-orange/80 ml-2">
            Archived
          </span>
        </h5>
        <p className="text-sm">Software for calculating mathematical expressions as used inn calculators</p>
      </div>
      <div>
        <h5 className="text-md font-semibold">Portfolio</h5>
        <p className="text-sm">Source code for this portfolio</p>
      </div>
    </div>
  </section>
</main>
        </div>
      </div>
    );
  };
  
  export default Landing;