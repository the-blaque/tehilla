const Resume: React.FC = () => {
  return (
    <main>
      <section className="mb-8">
        <h3 className="text-lg font-semibold mt-4">Professional Experience</h3>
        <p className="mt-2 text-sm">
          experiences here{" "}
        </p>
        <p className="mt-2 text-sm">
          more stuff here
        </p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mt-8 mb-2">Education</h3>
        <div className="space-y-6">
          <div>
            <a
              href="https://github.com/the-blaque/FakeNews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange underline"
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
              className="hover:text-custom-orange underline"
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
              className="hover:text-custom-orange underline"
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
              className="hover:text-custom-orange underline"
            >
              <h5 className="text-md font-semibold">Portfolio</h5>
            </a>
            <p className="text-sm">Source code for this portfolio</p>
          </div>
        </div>
        < br/>
        < br/>
        <a
            href="/"
            className="text-sm text-custom-orange cursor-pointer hover:underline"
          >
            Go Back ←
          </a>
      </section>
    </main>
  );
};

export default Resume;
