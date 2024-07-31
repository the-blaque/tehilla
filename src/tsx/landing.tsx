import CountdownTimer from "./countdown";
import About from "./about";
// import VideoPlayer from "./videoplayer";

const Landing: React.FC = () => {
  const targetDate = new Date("2024-09-13T18:30:00");

  return (
    <main>
      <div>
        <div className="items-center justify-center text-center">
          <div id="top" className=" py-10 space-y-4">
          <h1 className="text-3xl text-indigo-900 md:text-4xl lg:text-5xl font-bold tracking-tight">
              Tehillah 3.0
            </h1>
            <p className="text-lg text-indigo-500">
              The fruit of our lips
            </p>
            <p className="text-base max-w-[800px] mx-auto">
            "Through Jesus, therefore, let us continually offer to God a sacrifice of praise—the fruit of lips that openly profess his name.""
            </p>
            <p className="text-sm max-w-[800px] mx-auto">
              Hebrews 13:15
            </p>
          </div>
          <CountdownTimer targetDate={targetDate} />
          <About />
        </div>
      </div>
    </main>
  );
};

export default Landing;
