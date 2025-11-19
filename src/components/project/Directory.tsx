import { useState } from "react";
import { projectDirectory } from "../data/projectData"
import { useNavigate } from "react-router-dom";
interface ProjectItem {
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
}

interface FilterProps {
  filterName: string;
  option: string[];
}

const Directory = () => {
  
  const navigate = useNavigate();
  
  const filter: FilterProps[] = [
    {
      filterName: "Scope",
      option: ["All", "Legislative", "Executive"],
    },
    {
      filterName: "Category",
      option: ["All", "Education", "Agriculture", "Culture", "Energy", "Environment", "Healthcare"],
    },
    {
      filterName: "Year",
      option: ["All", "2020", "2021", "2022", "2023", "2024", "2025"],
    },
    {
      filterName: "Barangay",
      option: [
        "All",
        "Bagua I",
        "Bagua II",
        "Rosary Heights I",
        "Tamontaka I",
        "Poblacion I",
      ],
    },
  ];

  // State for filters
  const [selectedScope, setSelectedScope] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedBarangay, setSelectedBarangay] = useState<string>("All");
  const [keyword, setKeyword] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>(projectDirectory);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleApplyFilters = () => {
    let filtered = [...projectDirectory];

    if (selectedScope !== "All") {
      filtered = filtered.filter(project => project.scope === selectedScope);
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.sector === selectedCategory);
    }

    if (selectedYear !== "All") {
      filtered = filtered.filter(project => {
        const projectYear = new Date(project.date).getFullYear().toString();
        return projectYear === selectedYear;
      });
    }

    if (selectedBarangay !== "All") {
      filtered = filtered.filter(project => 
        project.area.toLowerCase().includes(selectedBarangay.toLowerCase())
      );
    }

    if (keyword.trim() !== "") {
      filtered = filtered.filter(project =>
        project.projectTitle.toLowerCase().includes(keyword.toLowerCase()) ||
        project.overview.toLowerCase().includes(keyword.toLowerCase()) ||
        project.summary.toLowerCase().includes(keyword.toLowerCase()) ||
        project.area.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
    setShowFilters(false);
  };

  return (
    <div className="px-[5%] flex flex-col lg:flex-row justify-center font-times gap-6 lg:gap-10 py-5">
      {/* Mobile/Tablet Filter Toggle Button */}
      <button 
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden w-full bg-[#6b4b00] text-white font-medium py-3 rounded-sm mb-4"
      >
        Show Filters
      </button>

      {/* Modal Overlay for Mobile/Tablet */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-[#181717d4] bg-opacity-50 z-50 flex items-center justify-center p-4 w-full">
          <div className="bg-[#f8f2d3] rounded-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#f8f2d3] px-4 pt-6 pb-4 border-b border-[#6b4b00]/20 flex justify-between items-center">
              <h6 className="text-[1.25rem] md:text-[1.625rem] font-semibold text-[#6b4b00]">
                Filters
              </h6>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-[#6b4b00] hover:text-[#4a3300]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 py-6 w">
              <div className="flex flex-col mb-4 w-full">
                <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
                  Scope
                </label>
                <select
                  name="Scope"
                  value={selectedScope}
                  onChange={(e) => setSelectedScope(e.target.value)}
                  className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
                >
                  {filter[0].option.map((choice, i) => (
                    <option key={i} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
                  Category
                </label>
                <select
                  name="Category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
                >
                  {filter[1].option.map((choice, i) => (
                    <option key={i} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
                  Year
                </label>
                <select
                  name="Year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
                >
                  {filter[2].option.map((choice, i) => (
                    <option key={i} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
                  Barangay
                </label>
                <select
                  name="Barangay"
                  value={selectedBarangay}
                  onChange={(e) => setSelectedBarangay(e.target.value)}
                  className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
                >
                  {filter[3].option.map((choice, i) => (
                    <option key={i} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-4">
                <label className="mb-1 text-xs md:text-sm font-medium text-[#6b4b00]">
                  Keyword Search
                </label>
                <div className="flex items-center border border-[#6b4b00] rounded-sm bg-transparent p-2">
                  <input
                    type="text"
                    placeholder="Type Here"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="flex-1 bg-transparent text-sm md:text-base text-[#6b4b00] placeholder-[#b89c65] focus:outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#6b4b00]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </div>
              </div>

              <button 
                onClick={handleApplyFilters}
                className="w-full bg-[#6b4b00] text-white font-medium py-2 text-sm md:text-base rounded-sm hover:bg-[#4a3300] transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1">
        <div className="py-5">
          <h4 className="text-[1.25rem] md:text-[1.5rem] text-[#5d4102] font-bold">
            PROJECT DIRECTORY
          </h4>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 md:gap-8 lg:gap-10">
            {filteredProjects.map((name, index) => (
              <li
                key={index}
                className="w-full max-w-[21rem] h-[22rem] md:h-[25rem] flex flex-col bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                 onClick={() =>
                  navigate(`/projects/${name.projectTitle}`, {
                    state: { project: name, projectDirectory },
                  })
                }
              >
                <div className="h-1/2">
                  <img
                    src={name.img}
                    alt={name.projectTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-1/2 flex flex-col justify-between p-3 md:p-4 text-gray-800">
                  <div>
                    <p className="text-base md:text-lg font-semibold mb-2 line-clamp-2">
                      {name.projectTitle}
                    </p>
                    <div className="text-xs md:text-sm space-y-1 line-clamp-3">
                      <p>
                        <span className="font-medium">Overview:</span>{" "}
                        {name.overview}
                      </p>
                      <p>
                        <span className="font-medium">Date:</span> {name.date}
                      </p>
                      <p>
                        <span className="font-medium">Area:</span> {name.area}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-600 mt-10 text-sm md:text-base">
              No projects found matching your filters.
            </p>
          )}
        </div>
      </div>

      {/* Desktop Filter Sidebar */}
      <div className="hidden lg:block bg-[#f8f2d3] h-fit px-4 py-6 lg:translate-y-[4.7rem] w-full lg:w-auto lg:min-w-[250px]">
        <h6 className="text-[1.25rem] md:text-[1.625rem] font-semibold text-center mb-4 text-[#6b4b00]">
          Filters
        </h6>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
            Scope
          </label>
          <select
            name="Scope"
            value={selectedScope}
            onChange={(e) => setSelectedScope(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[0].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
            Category
          </label>
          <select
            name="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[1].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
            Year
          </label>
          <select
            name="Year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[2].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
            Barangay
          </label>
          <select
            name="Barangay"
            value={selectedBarangay}
            onChange={(e) => setSelectedBarangay(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[3].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-xs md:text-sm font-medium text-[#6b4b00]">
            Keyword Search
          </label>
          <div className="flex items-center border border-[#6b4b00] rounded-sm bg-transparent p-2">
            <input
              type="text"
              placeholder="Type Here"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 bg-transparent text-sm md:text-base text-[#6b4b00] placeholder-[#b89c65] focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#6b4b00]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>

        <button 
          onClick={handleApplyFilters}
          className="w-full bg-[#6b4b00] text-white font-medium py-2 text-sm md:text-base rounded-sm hover:bg-[#4a3300] transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Directory;