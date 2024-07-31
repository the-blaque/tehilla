const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-indigo-900 text-white font-bold py-2 px-4 rounded">
                Reserve Your Spot
              </button>
              <a
                href="https://www.youtube.com/@freedomhouserccg/search?query=tehillah"
                className="inline-flex items-center gap-2 text-muted-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Past Concerts →
              </a>
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
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-sm font-medium text-muted-foreground">
                      Time
                    </div>
                    <div className="text-2xl font-bold">5:00 PM - 11:00 PM</div>
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
                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={400}
                    alt="David"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">David</h3>
                    <p className="text-muted-foreground">Lead Vocalist</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={400}
                    alt="Esther"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Esther</h3>
                    <p className="text-muted-foreground">Worship Leader</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={400}
                    alt="Michael"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">Michael</h3>
                    <p className="text-muted-foreground">Instrumentalist</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={400}
                    alt="David"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">David</h3>
                    <p className="text-muted-foreground">Lead Vocalist</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={400}
                    alt="David"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">David</h3>
                    <p className="text-muted-foreground">Lead Vocalist</p>
                  </div>
                </div>
                <div className="bg-card rounded-lg overflow-hidden shadow-lg items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={400}
                    alt="David"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold">David</h3>
                    <p className="text-muted-foreground">Lead Vocalist</p>
                  </div>
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
