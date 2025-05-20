"use client";

import { useState, useEffect, useCallback } from "react";


const brands = [
  {
    name: "Bosch",
    logo: "/images/chambs-logo.png" // Replace with actual Bosch logo
  },
  {
    name: "NGK",
    logo: "/images/chambs-logo.png" // Replace with actual NGK logo
  },
  {
    name: "Denso",
    logo: "/images/chambs-logo.png" // Replace with actual Denso logo
  },
  {
    name: "Continental",
    logo: "/images/chambs-logo.png" // Replace with actual Continental logo
  },
  {
    name: "Valvoline",
    logo: "/images/chambs-logo.png" // Replace with actual Valvoline logo
  },
  {
    name: "Honda",
    logo: "/images/chambs-logo.png" // Replace with actual Honda logo
  }
];

const CarouselChambs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate how many brands to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(4);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      // Loop back to beginning when reaching the end
      if (prevIndex >= brands.length - itemsToShow) {
        return 0;
      }
      return prevIndex + 1;
    });
  }, [itemsToShow]);

  // Automatic carousel movement
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [goToNext]);

  // Make sure currentIndex is valid when itemsToShow changes
  useEffect(() => {
    if (currentIndex > brands.length - itemsToShow) {
      setCurrentIndex(Math.max(0, brands.length - itemsToShow));
    }
  }, [itemsToShow, currentIndex]);

  return (
    <div className="relative w-full overflow-hidden py-8 md:py-12 bg-gray-100">
      <div >
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-800">Nuestras Marcas</h2>
        
        <div className="relative">
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {brands.map((brand, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-white rounded-lg p-3 md:p-6 h-20 sm:h-24 md:h-32 flex items-center justify-center">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselChambs;