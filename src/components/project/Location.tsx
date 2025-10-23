import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFolderOpen, FaGraduationCap } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { projectDirectory } from "../data/projectData"; 

interface LocationProps {
  icon: React.ReactNode;
  title: string;
}

interface Project {
  projectTitle: string;
  img: string;
  overview: string;
  date: string;
  area: string;
  scope: string;
  sector: string;
  summary: string;
  story: string;
  projectImg: string[];
  lat?: number;
  lng?: number;
}

const Location = () => {
  const navigate = useNavigate();

  const [selectedBarangay, setSelectedBarangay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const stat: LocationProps[] = [
    { icon: <FaRegFolderOpen />, title: "87 Projects" },
    { icon: <FaGraduationCap />, title: "6000+ Scholar Graduates" },
    { icon: <IoPeopleSharp />, title: "38 Barangays" },
    { icon: <FaCalendarAlt />, title: "2010-2025" },
  ];

  const barangays = [
    "Barangay 1",
    "Barangay 2",
    "Barangay 3",
    "Barangay 4",
    "Barangay 5",
    "Poblacion",
    "San Miguel",
    "Santa Cruz",
    "San Jose",
  ];

  const years = Array.from({ length: 16 }, (_, i) => 2010 + i);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initMap();
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const initMap = () => {
    const mapElement = document.getElementById("map");
    if (mapElement && window.google) {
      const map = new window.google.maps.Map(mapElement, {
        center: { lat: 7.2089, lng: 124.2415 },
        zoom: 13,
        mapTypeId: "roadmap",
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "on" }],
          },
        ],
      });


      projectDirectory.forEach((proj) => {
        if (proj.lat && proj.lng) {
          const marker = new window.google.maps.Marker({
            position: { lat: proj.lat, lng: proj.lng },
            map: map,
            title: proj.projectTitle, 
            icon: {
              path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
              fillColor: "#8B4513",
              fillOpacity: 1,
              strokeColor: "#FFFFFF",
              strokeWeight: 2,
              scale: 1.5,
              anchor: new window.google.maps.Point(12, 22),
            },
          });

          // ✅ Correct click event (no change needed)
          marker.addListener("click", () => {
            setSelectedProject(proj);
          });
        }
      });
    }
  };

  return (
    <div className="w-full bg-[#5d4102] py-16 px-[5%]">
      <div className="flex flex-col md:flex-row items-stretch justify-center py-7 px-10 bg-[#fff9df] rounded-lg overflow-hidden shadow-lg gap-8 md:gap-20">
        {/* STATS */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <p className="text-[1.625rem] font-bold text-[#5d4102] font-serif">
            QUICK STATS
          </p>
          <ul className="px-8 list-none">
            {stat.map((name, index) => (
              <li
                key={index}
                className="flex items-center gap-3 my-3 text-[#5d4102] text-lg"
              >
                <i className="text-[2rem]">{name.icon}</i>
                <span className="font-serif">{name.title}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                className="border border-[#6b4b25] py-2 px-4 text-base sm:text-lg text-[#5d4102] font-bold font-serif bg-white rounded"
                value={selectedBarangay}
                onChange={(e) => setSelectedBarangay(e.target.value)}
              >
                <option value="">Select Barangay</option>
                {barangays.map((brgy, idx) => (
                  <option key={idx} value={brgy}>
                    {brgy}
                  </option>
                ))}
              </select>

              <select
                className="border border-[#6b4b25] py-2 px-4 text-base sm:text-lg text-[#5d4102] font-bold font-serif bg-white rounded"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {(selectedBarangay || selectedYear) && (
              <div className="bg-white p-3 rounded border-l-4 border-[#5d4102]">
                <p className="text-[#5d4102] font-semibold">
                  Filtered View: {selectedBarangay && `${selectedBarangay}`}
                  {selectedBarangay && selectedYear && " - "}
                  {selectedYear && `${selectedYear}`}
                </p>
              </div>
            )}

            <span className="text-base sm:text-[1.188rem] text-[#5d4102] font-serif">
              Click a pin on the map to learn more about each project.
            </span>
          </div>
        </div>

        <div className="flex-1 md:flex-[1.5] relative">
          <div
            id="map"
            className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-md border-4 border-white shadow-md"
          ></div>

          {selectedProject && (
            <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-2xl overflow-hidden max-w-sm z-10 cursor-pointer">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 z-20"
              >
                ✕
              </button>

              <img
                src={selectedProject.img}
                alt={selectedProject.projectTitle}
                className="w-full h-[10rem] object-cover"
                onClick={() =>
                  navigate(`/projects/${selectedProject.projectTitle}`, {
                    state: { project: selectedProject, projectDirectory },
                  })
                }
              />

              <div
                className="p-4"
                onClick={() =>
                  navigate(`/projects/${selectedProject.projectTitle}`, {
                    state: { project: selectedProject, projectDirectory },
                  })
                }
              >
                <h2 className="text-lg font-bold text-[#5d4102] mb-2 pr-6">
                  {selectedProject.projectTitle}
                </h2>
                <p className="text-sm text-[#5d4102] mb-3">
                  <span className="font-semibold">Overview:</span>{" "}
                  {selectedProject.overview}
                </p>
                <p className="text-sm text-[#5d4102] mb-1">
                  <span className="font-semibold">Date:</span>{" "}
                  {selectedProject.date}
                </p>
                <p className="text-sm text-[#5d4102]">
                  <span className="font-semibold">Area:</span>{" "}
                  {selectedProject.area}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
