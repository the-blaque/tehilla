import fret from "../assets/image0 (1).jpeg";
import deb from "../assets/image1.jpeg";
import dan from "../assets/image2.jpeg";
import Racheal from "../assets/image3.jpeg";
import Emmanuel from "../assets/image4.jpeg";
import Oreoluwa from "../assets/image5.jpeg";
import Rukevwe from "../assets/image7.jpeg";
import Trybe from "../assets/image8.jpeg";
import Victor from "../assets/image10.jpeg";
import Toyin from "../assets/image9.jpeg";
import Ayo from "../assets/ayo.jpg"

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2">
          <div className=" justify-center items-center">
          <iframe
              src="https://player.vimeo.com/video/993008930?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=0"
              allow="autoplay"
              title="Tehillah Teaser"
            ></iframe>
          </div>
          <div className="container px-4 md:px-6 text-left space-y-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Experience the Power of Praise
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] mx-auto">
              More Than Just a Concert
            </p>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[700px] mx-auto">
              Join David's Trybe for an uplifting worship experience that goes
              beyond music to touch the heart and soul. Experience captivating
              gospel melodies and powerful performances that inspire hope and
              joy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-2">
              <a
                href="https://www.eventbrite.com/e/tehillah-30-tickets-978672554957?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-indigo-900 text-white font-bold py-2 px-4 rounded">
                  Reserve Your Spot
                </button>
              </a>
              <a
                href="https://www.youtube.com/@freedomhouserccg/search?query=tehillah"
                className="inline-flex items-center gap-2 text-muted-foreground hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Past Concerts →
              </a>
            </div>
          </div>
          </div>
        </div>

        <section className="bg-muted py-2 items-center justify-center">
          <div className="container">
            <div className="mx-auto space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Event Details
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Join us for an unforgettable experience.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Date
                    </div>
                    <div className="text-2xl font-bold">September 20, 2024</div>
                  </div>
                </div>
                <div className="rounded-lg bg-background p-6 shadow-sm">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-sm font-medium text-muted-foreground text-center">
                      Time
                    </div>
                    <div className="text-2xl font-bold text-center">
                      5:00 PM - 11:00 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-background p-6 shadow-sm">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    Venue
                  </div>
                  <div className="text-lg font-medium">
                    Yates Memorial Centre/Sterndale Bennett Theatre - 1002 4 Ave
                    S, Lethbridge, AB T1J 0P5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="flex-1 items-center justify-center text-center">
          <section className="py-12 md:py-16 lg:py-20" id="about">
            <div className="container px-4 md:px-6 space-y-8">
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  About Tehillah
                </h2>
                <p className="text-base text-muted-foreground max-w-[700px] mx-auto">
                  Tehillah Gospel Concert by David&#39;s Trybe, supported by
                  Freedom House RCCG Lethbridge, is an exuberant and impactful
                  musical event that combines the power of gospel music with a
                  heartfelt message of faith and hope. Led by the talented and
                  charismatic David&#39;s Trybe members, this concert showcases
                  their exceptional musical skills, infectious energy, and
                  sincere devotion to spreading the gospel through their music.
                </p>
              </div>
              {/* <span className="my-10"><a
                href="#about"
                className="inline-flex items-center gap-2 text-muted-foreground hover:underline text-indigo-900"
              >
                Learn More →
              </a></span> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={deb}
                    width={400}
                    height={400}
                    alt="Debbie Ojo"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Debbie Ojo</h3>
                    <p className="text-muted-foreground">Calgary</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Rukevwe}
                    width={400}
                    height={400}
                    alt="Rukevwe"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Rukevwe Igbecha</h3>
                    <p className="text-muted-foreground">Toronto</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Victor}
                    width={400}
                    height={400}
                    alt="Victor Olaioye"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Victor Olaioye</h3>
                    <p className="text-muted-foreground">Edmonton</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={fret}
                    width={400}
                    height={400}
                    alt="Joel Olubunmi (Fretless)"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">
                      Joel Olubunmi (Fretless)
                    </h3>
                    <p className="text-muted-foreground">U.K</p>
                  </div>
                </div>
  
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={dan}
                    width={400}
                    height={400}
                    alt="Daniel Olubunmi"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Daniel Olubunmi</h3>
                    <p className="text-muted-foreground">U.K</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Racheal}
                    width={400}
                    height={400}
                    alt="Racheal Obasan"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Racheal Obasan</h3>
                    <p className="text-muted-foreground">Edmonton</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Emmanuel}
                    width={400}
                    height={400}
                    alt="Emmanuel Patrick Aka ETG- Emmanuel the Great"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">
                      Emmanuel Patrick <br /> (Aka ETG- Emmanuel the Great)
                    </h3>
                    <p className="text-muted-foreground">USA</p>
                  </div>
                </div>
                



                <div className="bg-card mx-auto rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Trybe}
                    width={400}
                    height={400}
                    alt="David's Trybe"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">David's Trybe</h3>
                    <h3 className="text-base font-semibold">Host</h3>
                    <p className="text-muted-foreground">Lethbridge</p>
                  </div>
                </div>

                

                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Oreoluwa}
                    width={400}
                    height={400}
                    alt="Oreoluwa Akanbi"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Oreoluwa Akanbi</h3>
                    <p className="text-muted-foreground">Calgary</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Toyin}
                    width={400}
                    height={400}
                    alt="Toyin Aladejebi"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Toyin Aladejebi</h3>
                    <p className="text-muted-foreground">Lethbridge</p>
                  </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src={Ayo}
                    width={400}
                    height={400}
                    alt="Ayo"
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Ayo</h3>
                    <p className="text-muted-foreground">Calgary</p>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Newlife Voices</h3>
                    <p className="text-muted-foreground">Lethbridge</p>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">John & Sounds of Praise</h3>
                    <p className="text-muted-foreground">Edmonton</p>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Excel Voices</h3>
                    <p className="text-muted-foreground">Lethbridge</p>
                  </div>

              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
