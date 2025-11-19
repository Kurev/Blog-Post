import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const ProjectPassed = () => {
  const location = useLocation();
  const project = location.state?.project;
  const mapRef = useRef<HTMLDivElement>(null);
  const [showCard, setShowCard] = useState(false);

  if (!project) {
    return <div>No project data found.</div>;
  }

  const Title = ({ title }: { title: string }) => (
    <div className="py-4 md:py-6">
      <h4 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.813rem] font-bold text-[#5d4102]">{title}</h4>
    </div>
  );

  const ProjectImg = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-5 md:mt-7">
        {project.projectImg.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`Project ${index + 1}`}
            className="w-full h-[12rem] sm:h-[13rem] md:h-[14rem] lg:h-[15rem] object-cover shadow-md"
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (project.lat && project.lng && mapRef.current) {
      if (!window.google) {
        const script = document.createElement("script");
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgZi1O1mC2Kgx9vMrYgUp1Em8BMDVl4YY";
        script.async = true;
        script.defer = true;
        script.onload = () => initMap();
        document.head.appendChild(script);
      } else {
        initMap();
      }
    }

    function initMap() {
      const map = new window.google.maps.Map(mapRef.current!, {
        center: { lat: project.lat, lng: project.lng },
        zoom: 19,
        mapTypeId: "roadmap",
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      let pinColor = "#8B4513";
      const marker = new window.google.maps.Marker({
        position: { lat: project.lat, lng: project.lng },
        map,
        title: project.projectTitle,
        icon: {
          path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
          fillColor: pinColor,
          fillOpacity: 1,
          strokeColor: "#FFFFFF",
          strokeWeight: 2,
          scale: 1.5,
          anchor: new window.google.maps.Point(12, 22),
        },
      });

      marker.addListener("click", () => {
        setShowCard(true);
      });
    }
  }, [project]);

  return (
    <MainLayout>
      <div className="font-times px-[5%] py-6 sm:py-[5%]">
        <div className="flex flex-col items-start gap-3 sm:gap-4">
          <h2 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] px-4 sm:px-6 md:px-7 py-1 bg-[#5d4102] text-white text-center">
            {project.sector}
          </h2>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight">
            {project.projectTitle}
          </h1>
         
          <img
            src={project.img}
            alt={project.projectTitle}
            className="w-full h-full bg-cover lg:aspect-[3/1]"
          />
        </div>

        <Title title="Project Overview" />
        <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 md:gap-10 lg:gap-16 text-[#5d4102]">
          {/* Left Box */}
          <div className="border border-[#5d4102] w-full lg:w-1/2 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between mb-2 gap-1 sm:gap-0">
              <span className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.563rem] tracking-wide">
                DATE IMPLEMENTED
              </span>
              <span className="text-[0.9rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.3rem]">{project.date}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
              <span className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.563rem] tracking-wide">LOCATION</span>
              <span className="text-[0.9rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.3rem]">{project.area}</span>
            </div>
          </div>

          {/* Right Box */}
          <div className="border border-[#5d4102] w-full lg:w-1/2 p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row justify-between mb-2 gap-1 sm:gap-0">
              <span className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.563rem] tracking-wide">SCOPE</span>
              <span className="text-[0.9rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.3rem]">{project.scope}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
              <span className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.563rem] tracking-wide">SECTOR</span>
              <span className="text-[0.9rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.3rem]">{project.sector}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <Title title="Impact Summary" />
            <p className="text-[1rem] sm:text-[1.15rem] md:text-[1.3rem] lg:text-[1.563rem] text-[#6b4b25] text-justify">
              {project.summary}
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            {project.lat && project.lng && (
              <div className="mt-6 sm:mt-8 md:mt-10 relative">
                <div
                  ref={mapRef}
                  id="map"
                  className="w-full h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[25rem] rounded-lg border-4 border-white shadow-md"
                ></div>

                {/* ✅ Project Card Popup (appears on marker click) */}
                {showCard && (
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white rounded-lg shadow-2xl overflow-hidden max-w-[90%] sm:max-w-sm z-10 cursor-pointer">
                    <button
                      onClick={() => setShowCard(false)}
                      className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 z-20"
                    >
                      ✕
                    </button>

                    <img
                      src={project.img}
                      alt={project.projectTitle}
                      className="w-full h-[8rem] sm:h-[10rem] object-cover"
                    />
                    <div className="p-3 sm:p-4">
                      <h2 className="text-base sm:text-lg font-bold text-[#5d4102] mb-2 pr-6">
                        {project.projectTitle}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#5d4102] mb-3">
                        <span className="font-semibold">Overview:</span>{" "}
                        {project.overview}
                      </p>
                      <p className="text-xs sm:text-sm text-[#5d4102] mb-1">
                        <span className="font-semibold">Date:</span>{" "}
                        {project.date}
                      </p>
                      <p className="text-xs sm:text-sm text-[#5d4102]">
                        <span className="font-semibold">Area:</span>{" "}
                        {project.area}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Title title="FULL PROJECT STORY" />
        <div>
          <p className="text-[1rem] sm:text-[1.15rem] md:text-[1.3rem] lg:text-[1.563rem] text-[#6b4b25] text-justify">
            {project.story}
          </p>
        </div>

        <ProjectImg />
      </div>
    </MainLayout>
  );
};

export default ProjectPassed;