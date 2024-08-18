import React, { useState, useEffect } from 'react';
import logo1 from "../assets/sponsors/IMG_7903.jpg"
import logo2 from "../assets/sponsors/IMG_8063.jpg"
import logo3 from "../assets/sponsors/IMG_8064.jpg"
import logo4 from "../assets/sponsors/IMG_8065.jpg"
import logo5 from "../assets/sponsors/IMG_8092.jpg"
import logo6 from "../assets/sponsors/rom828.jpg"
import logo7 from "../assets/sponsors/phovid.jpg"
import logo8 from "../assets/strat.png"

interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
}

const SponsorCarousel: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching sponsors from an API
    const fetchSponsors = async () => {
      setIsLoading(true);
      try {
        // Simulating an API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        const fetchedSponsors: Sponsor[] = [
          { id: 1, name: "Sponsor 1", logoUrl: logo1 },
          { id: 2, name: "Sponsor 2", logoUrl: logo2 },
          { id: 3, name: "Sponsor 3", logoUrl: logo3 },
          { id: 4, name: "Sponsor 4", logoUrl: logo4 },
          { id: 5, name: "Sponsor 5", logoUrl: logo5 },
          { id: 6, name: "Sponsor 6", logoUrl: logo6 },
          { id: 7, name: "Sponsor 7", logoUrl: logo7 },
          { id: 7, name: "Stratum Labs", logoUrl: logo8 },
        ];
        setSponsors(fetchedSponsors);
      } catch (error) {
        console.error("Failed to fetch sponsors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  const nextSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
  };

  const prevSponsor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsors.length) % sponsors.length);
  };

  const getVisibleSponsors = () => {
    if (sponsors.length === 0) return [];
    const prev = (currentIndex - 1 + sponsors.length) % sponsors.length;
    const next = (currentIndex + 1) % sponsors.length;
    return [sponsors[prev], sponsors[currentIndex], sponsors[next]];
  };

  if (isLoading) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center">
        </div>
      </section>
    );
  }

  if (sponsors.length === 0) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center">
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">This event is powered by David's Trybe of Freedom House RCCG </h3>
          <br />
          <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">Proudly supported by:</h2>
        </div>
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
          <div className="flex items-center justify-center">
            {getVisibleSponsors().map((sponsor, index) => (
              <div 
                key={sponsor.id} 
                className={`flex-shrink-0 transition-all duration-300 ease-in-out ${
                  index === 1 ? 'w-1/2 opacity-100 scale-100' : 'w-1/4 opacity-50 scale-75'
                }`}
              >
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src={sponsor.logoUrl}
                    width="250"
                    height="100"
                    alt={`${sponsor.name} Logo`}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={prevSponsor} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-lg z-10"
          >
            &#8249;
          </button>
          <button 
            onClick={nextSponsor} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-lg z-10"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorCarousel;