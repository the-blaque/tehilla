import { TbSunset2 } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { GiMoonBats } from "react-icons/gi";

interface LandingProps {
  theme: string;
  toggleTheme: () => void; // Function that toggles the theme
}

const Landing: React.FC<LandingProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto p-8">
        <header className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-xl font-bold">AJ Seeni</h1>
            <div className="relative text-sm">
              <span className="absolute inset-0 overflow-hidden">
                <span className="block animate-slide absolute h-full w-full -translate-y-full" >Software Engineer</span>
                <span className="block animate-slide absolute h-full w-full -translate-y-full" style={{ animationDelay: "3s" }}>Product Lead</span>
                <span className="block animate-slide absolute h-full w-full -translate-y-full" style={{ animationDelay: "5s" }}>Creative</span>
              </span>
              {/* Placeholder text to maintain the space */}
              <span className="invisible">Software Engineer</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/oluwaseeni-ajayi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange transition-colors duration-300"
            >
              <IoLogoLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/the-blaque"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange transition-colors duration-300"
            >
              <AiFillGithub className="h-6 w-6" />
            </a>
            {theme === "dark" ? (
              <TbSunset2
                className="h-6 w-6 hover:text-custom-orange transition-colors duration-300 cursor-pointer"
                onClick={toggleTheme}
              />
            ) : (
              <GiMoonBats
                className="h-6 w-6 hover:text-custom-orange transition-colors duration-300 cursor-pointer"
                onClick={toggleTheme}
              />
            )}
          </div>
        </header>
        <main>
        <section className="mb-8">
            <h3 className="text-lg font-semibold mt-8">Bio</h3>
            <p className="mt-4 text-sm">
            A jack of many trades, oftentimes better than a master of one. Worked in full-stack development, sales, marketing and product, and design. </p>
            <p className="mt-4 text-sm">
            All work and no play makes me a dull boy; thus, when I'm not stuck behind a computer screen, I enjoy cooking and traveling, always seeking new perspectives and inspiration.
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold mt-8 mb-4">Projects</h3>
            <div className="space-y-6">
              {/* Project links updated to open in new tabs */}
              <div>
                <a
                  href="https://github.com/the-blaque/FakeNews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-custom-orange"
                >
                  <h5 className="text-md font-semibold">FakeNews</h5>
                </a>
                <p className="text-sm">
                  A Machine Learning and Natural Language Processing Approach to
                  Detecting Fake News
                </p>
              </div>
              <div>
                <a
                  href="https://github.com/the-blaque/Software-Development-CPSC-2720-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-custom-orange"
                >
                  <h5 className="text-md font-semibold">Card Games</h5>
                </a>
                <p className="text-sm">
                  Generic text-based cards game implemented using a variety of
                  design patterns
                </p>
              </div>
              <div>
                <a
                  href="https://github.com/the-blaque/EXPRESSION-CALCULATOR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-custom-orange"
                >
                  <h5 className="text-md font-semibold flex items-center">
                    Expression Calculator
                  </h5>
                </a>
                <p className="text-sm">
                  Software for calculating mathematical expressions as used in
                  calculators
                </p>
              </div>
              <div>
                <a
                  href="https://github.com/the-blaque/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-custom-orange"
                >
                  <h5 className="text-md font-semibold">Portfolio</h5>
                </a>
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
