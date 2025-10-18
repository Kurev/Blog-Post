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
    <div className="py-6">
      <h4 className="text-[1.813rem] font-bold text-[#5d4102]">{title}</h4>
    </div>
  );

  // const Map = () => {
  //   return (
  //     <>
  //       {/* Map Section */}
  //     {project.lat && project.lng && (
  //       <div className="mt-10 relative">
  //         <Title title="Project Location Map" />

  //         <div
  //           ref={mapRef}
  //           id="map"
  //           className="w-full h-[400px] rounded-lg border-4 border-white shadow-md"
  //         ></div>

  //         {/* ✅ Project Card Popup (appears on marker click) */}
  //         {showCard && (
  //           <div className="absolute top-6 left-6 bg-white rounded-lg shadow-2xl overflow-hidden max-w-sm z-10 cursor-pointer">
  //             <button
  //               onClick={() => setShowCard(false)}
  //               className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 z-20"
  //             >
  //               ✕
  //             </button>

  //             <img
  //               src={project.img}
  //               alt={project.projectTitle}
  //               className="w-full h-[10rem] object-cover"
  //             />
  //             <div className="p-4">
  //               <h2 className="text-lg font-bold text-[#5d4102] mb-2 pr-6">
  //                 {project.projectTitle}
  //               </h2>
  //               <p className="text-sm text-[#5d4102] mb-3">
  //                 <span className="font-semibold">Overview:</span>{" "}
  //                 {project.overview}
  //               </p>
  //               <p className="text-sm text-[#5d4102] mb-1">
  //                 <span className="font-semibold">Date:</span> {project.date}
  //               </p>
  //               <p className="text-sm text-[#5d4102]">
  //                 <span className="font-semibold">Area:</span> {project.area}
  //               </p>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     )}
  //     </>
  //   );
  // };

  const ProjectImg = () => {
    return (
      <div className="grid grid-cols-3 gap-10 mt-7">
        {project.projectImg.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`Project ${index + 1}`}
            className="w-full h-[15rem] object-cover shadow-md"
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
      <div className="font-times px-[5%] py-[5%]">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-[1.3rem] px-7 py-1 bg-[#5d4102] text-white text-center">
            {project.sector}
          </h2>
          <h1 className="text-[4.5rem] font-bold">{project.projectTitle}</h1>
         
            <img
              src={project.img}
              alt={project.projectTitle}
              className="w-full h-full aspect-[3/1]"
            />
         
        </div>

        <Title title="Project Overview" />
        <div className="flex justify-between gap-16 text-[#5d4102]">
          {/* Left Box */}
          <div className="border border-[#5d4102] w-1/2 p-4">
            <div className="flex justify-between mb-2">
              <span className="text-[1.563rem] tracking-wide">
                DATE IMPLEMENTED
              </span>
              <span className="text-[1.3rem]">{project.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[1.563rem] tracking-wide">LOCATION</span>
              <span className="text-[1.3rem]">{project.area}</span>
            </div>
          </div>

          {/* Right Box */}
          <div className="border border-[#5d4102] w-1/2 p-4">
            <div className="flex justify-between mb-2">
              <span className="text-[1.563rem] tracking-wide">SCOPE</span>
              <span className="text-[1.3rem]">{project.scope}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[1.563rem] tracking-wide">SECTOR</span>
              <span className="text-[1.3rem]">{project.sector}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="w-1/2">
            <Title title="Impact Summary" />
            <p className="text-[1.563rem] text-[#6b4b25] text-justify">
              {project.summary}
            </p>
          </div>

          <div className="w-1/2">
            {project.lat && project.lng && (
              <div className="mt-10 relative">
                <div
                  ref={mapRef}
                  id="map"
                  className="w-full h-[25rem] rounded-lg border-4 border-white shadow-md"
                ></div>

                {/* ✅ Project Card Popup (appears on marker click) */}
                {showCard && (
                  <div className="absolute top-6 left-6 bg-white rounded-lg shadow-2xl overflow-hidden max-w-sm z-10 cursor-pointer">
                    <button
                      onClick={() => setShowCard(false)}
                      className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 z-20"
                    >
                      ✕
                    </button>

                    <img
                      src={project.img}
                      alt={project.projectTitle}
                      className="w-full h-[10rem] object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold text-[#5d4102] mb-2 pr-6">
                        {project.projectTitle}
                      </h2>
                      <p className="text-sm text-[#5d4102] mb-3">
                        <span className="font-semibold">Overview:</span>{" "}
                        {project.overview}
                      </p>
                      <p className="text-sm text-[#5d4102] mb-1">
                        <span className="font-semibold">Date:</span>{" "}
                        {project.date}
                      </p>
                      <p className="text-sm text-[#5d4102]">
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
          <p className="text-[1.563rem] text-[#6b4b25] text-justify">
            {project.story}
          </p>
        </div>

        <ProjectImg />
      </div>
    </MainLayout>
  );
};

export default ProjectPassed;
