import { useState } from "react";
import { projectDirectory } from "../data/projectData";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Directory = () => {
  const navigate = useNavigate();

  // FILTER STATES
  const [selectedScope, setSelectedScope] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedBarangay, setSelectedBarangay] = useState<string>("All");
  const [keyword, setKeyword] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState<number>(0);
  const projectsPerPage = 6;

  // FILTERS CONFIG
  const filter = [
    { filterName: "Scope", option: ["All", "Legislative", "Executive"] },
    {
      filterName: "Category",
      option: [
        "All",
        "Education",
        "Agriculture",
        "Culture",
        "Energy",
        "Environment",
        "Healthcare",
      ],
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

  // APPLY FILTERS BUTTON
  const handleApplyFilters = () => {
    setCurrentPage(0); // reset page when filters applied
    setShowFilters(false);
  };

  // FILTER PROJECTS
  const filteredProjects = projectDirectory
    .filter((p) => selectedScope === "All" || p.scope === selectedScope)
    .filter((p) => selectedCategory === "All" || p.sector === selectedCategory)
    .filter(
      (p) =>
        selectedYear === "All" ||
        new Date(p.date).getFullYear().toString() === selectedYear
    )
    .filter(
      (p) =>
        selectedBarangay === "All" ||
        p.area.toLowerCase().includes(selectedBarangay.toLowerCase())
    )
    .filter((p) => {
      if (!keyword.trim()) return true;
      return (
        p.projectTitle.toLowerCase().includes(keyword.toLowerCase()) ||
        p.overview.toLowerCase().includes(keyword.toLowerCase()) ||
        p.summary.toLowerCase().includes(keyword.toLowerCase()) ||
        p.area.toLowerCase().includes(keyword.toLowerCase())
      );
    });

  // PAGINATION
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const offset = currentPage * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    offset,
    offset + projectsPerPage
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="px-[5%] flex flex-col lg:flex-row justify-center font-times gap-6 lg:gap-10 py-5">
      {/* MOBILE FILTER TOGGLE */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden w-full bg-[#6b4b00] text-white font-medium py-3 rounded-sm mb-4"
      >
        Show Filters
      </button>

      {/* MOBILE FILTER MODAL */}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 py-6">
              {filter.map((f, i) => (
                <div key={i} className="flex flex-col mb-4">
                  <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
                    {f.filterName}
                  </label>
                  <select
                    value={
                      f.filterName === "Scope"
                        ? selectedScope
                        : f.filterName === "Category"
                        ? selectedCategory
                        : f.filterName === "Year"
                        ? selectedYear
                        : selectedBarangay
                    }
                    onChange={(e) => {
                      const val = e.target.value;
                      if (f.filterName === "Scope") setSelectedScope(val);
                      if (f.filterName === "Category") setSelectedCategory(val);
                      if (f.filterName === "Year") setSelectedYear(val);
                      if (f.filterName === "Barangay") setSelectedBarangay(val);
                      setCurrentPage(0); // reset page on filter change
                    }}
                    className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
                  >
                    {f.option.map((choice, idx) => (
                      <option key={idx} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <div className="flex flex-col mb-4">
                <label className="mb-1 text-xs md:text-sm font-medium text-[#6b4b00]">
                  Keyword Search
                </label>
                <div className="flex items-center border border-[#6b4b00] rounded-sm bg-transparent p-2">
                  <input
                    type="text"
                    placeholder="Type Here"
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      setCurrentPage(0); // reset page on keyword change
                    }}
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

      {/* PROJECTS */}
      <div className="flex-1 text-[#5d4102]">
        <div className="py-5">
          <h4 className="text-[1.25rem] md:text-[1.5rem] text-[#5d4102] font-bold">
            PROJECT DIRECTORY
          </h4>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 md:gap-8 lg:gap-10">
            {currentProjects.map((project, index) => (
              <li
                key={index}
                className="w-full max-w-[21rem] h-[22rem] md:h-[25rem] flex flex-col bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() =>
                  navigate(`/projects/${project.projectTitle}`, {
                    state: { project, projectDirectory },
                  })
                }
              >
                <div className="h-1/2">
                  <img
                    src={project.img}
                    alt={project.projectTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-1/2 flex flex-col justify-between p-3 md:p-4 text-gray-800">
                  <div className="flex flex-col">
                    <p className="text-base md:text-lg font-semibold mb-2 line-clamp-2">
                      {project.projectTitle}
                    </p>
                    <div className="text-xs md:text-sm space-y-1">
                      <p>
                        <span className="font-medium">Overview:</span>{" "}
                        {project.overview}
                      </p>
                      <p>
                        <span className="font-medium">Date:</span>{" "}
                        {project.date}
                      </p>
                      <p>
                        <span className="font-medium">Area:</span>{" "}
                        {project.area}
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

          {/* REACT PAGINATE */}
          {pageCount > 1 && (
            <div className="mt-10 flex justify-center">
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                forcePage={currentPage}
                containerClassName={
                  "flex gap-3 items-center flex-wrap justify-center"
                }
                pageClassName={
                  "px-3 py-1 border rounded cursor-pointer hover:bg-[#4e3100] hover:text-white transition-colors"
                }
                pageLinkClassName={""}
                previousClassName={
                  "px-4 py-2 border rounded cursor-pointer hover:bg-[#4e3100] hover:text-white transition-colors"
                }
                previousLinkClassName={""}
                nextClassName={
                  "px-4 py-2 border rounded cursor-pointer hover:bg-[#4e3100] hover:text-white transition-colors"
                }
                nextLinkClassName={""}
                breakClassName={"px-3 py-1"}
                breakLinkClassName={""}
                activeClassName={"bg-[#4e3100] text-white"}
                disabledClassName={
                  "opacity-40 cursor-not-allowed pointer-events-none"
                }
              />
            </div>
          )}
        </div>
      </div>

      {/* DESKTOP FILTER SIDEBAR */}
      <div className="hidden lg:block bg-[#f8f2d3] h-fit px-4 py-6 lg:translate-y-[4.7rem] w-full lg:w-auto lg:min-w-[250px]">
        <h6 className="text-[1.25rem] md:text-[1.625rem] font-semibold text-center mb-4 text-[#6b4b00]">
          Filters
        </h6>
        {filter.map((f, i) => (
          <div key={i} className="flex flex-col mb-4">
            <label className="mb-1 text-[1rem] md:text-[1.25rem] font-medium text-[#6b4b00]">
              {f.filterName}
            </label>
            <select
              value={
                f.filterName === "Scope"
                  ? selectedScope
                  : f.filterName === "Category"
                  ? selectedCategory
                  : f.filterName === "Year"
                  ? selectedYear
                  : selectedBarangay
              }
              onChange={(e) => {
                const val = e.target.value;
                if (f.filterName === "Scope") setSelectedScope(val);
                if (f.filterName === "Category") setSelectedCategory(val);
                if (f.filterName === "Year") setSelectedYear(val);
                if (f.filterName === "Barangay") setSelectedBarangay(val);
                setCurrentPage(0); // reset page on filter change
              }}
              className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-sm md:text-base text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
            >
              {f.option.map((choice, idx) => (
                <option key={idx} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
          </div>
        ))}

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-xs md:text-sm font-medium text-[#6b4b00]">
            Keyword Search
          </label>
          <div className="flex items-center border border-[#6b4b00] rounded-sm bg-transparent p-2">
            <input
              type="text"
              placeholder="Type Here"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                setCurrentPage(0); // reset page on keyword change
              }}
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
