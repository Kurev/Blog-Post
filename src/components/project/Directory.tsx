import { useState } from "react";
import school from "../../assets/s.webp";
import farming from "../../assets/farming.webp";
import electricity from "../../assets/electricity.webp";
import treePlanting from "../../assets/treePlanting.webp";
import culture from "../../assets/culture.webp";
import hospital from "../../assets/hospital.webp";

interface ProjectItem {
  project: string;
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
  const projectDirectory: ProjectItem[] = [
    {
      project: "School Improvement",
      img: school,
      overview: "School Support",
      date: "10/2/2021",
      area: "San Isidro, Makilala, Cotabato",
      scope: "Executive",
      sector: "Education",
      summary:
        "A project focused on enhancing educational facilities and providing better learning environments for students across local schools in Cotabato.",
      story:
        "The School Improvement Project aimed to uplift the quality of education in San Isidro by renovating classrooms, supplying essential learning materials, and training teachers. With community support, new school buildings and digital learning tools were introduced, resulting in higher student attendance and improved academic performance.",
      projectImg: [school, treePlanting, hospital],
    },
    {
      project: "Agricultural Support Program",
      img: farming,
      overview: "Farming Development",
      date: "3/15/2022",
      area: "Kibia, Makilala, Cotabato",
      scope: "Executive",
      sector: "Agriculture",
      summary:
        "An initiative to support local farmers with modern tools, training, and sustainable farming practices.",
      story:
        "The Agricultural Support Program provided farmers with access to quality seeds, fertilizers, and irrigation systems. It also introduced organic farming techniques and crop diversification strategies. This helped increase yield, improve livelihoods, and strengthen Cotabato's food security.",
      projectImg: [farming, treePlanting, school],
    },
    {
      project: "Barangay Electrification Initiative",
      img: electricity,
      overview: "Rural Power Access",
      date: "6/20/2022",
      area: "New Israel, Makilala, Cotabato",
      scope: "Legislative",
      sector: "Energy",
      summary:
        "A project dedicated to providing electricity to remote areas to improve living standards and economic growth.",
      story:
        "The Barangay Electrification Initiative connected hundreds of households to the power grid for the first time. Through collaboration with the local electric cooperative, solar-powered systems were also installed in areas unreachable by standard transmission lines, lighting up lives and enabling local businesses to grow.",
      projectImg: [electricity, school, farming],
    },
    {
      project: "Greening Cotabato Project",
      img: treePlanting,
      overview: "Tree Planting & Environmental Restoration",
      date: "9/5/2022",
      area: "Bialong, Matalam, Cotabato",
      scope: "Legislative",
      sector: "Environment",
      summary:
        "An environmental conservation effort focusing on reforestation and climate resilience in Cotabato's upland areas.",
      story:
        "Thousands of trees were planted under the Greening Cotabato Project, involving students, farmers, and local volunteers. The initiative helped prevent soil erosion, restore biodiversity, and promote environmental awareness in the community, contributing to a greener and cleaner Cotabato.",
      projectImg: [treePlanting, farming, culture],
    },
    {
      project: "Cultural Heritage Support",
      img: culture,
      overview: "Cultural Empowerment",
      date: "12/10/2021",
      area: "Poblacion, Kidapawan City, Cotabato",
      scope: "Executive",
      sector: "Culture",
      summary:
        "A cultural preservation project supporting the Badjao community through livelihood programs and heritage promotion.",
      story:
        "This initiative helped the Badjao people preserve their traditional crafts and dances while providing sustainable income opportunities. Cultural centers were established to showcase their art, music, and traditions, fostering inclusivity and pride within the community.",
      projectImg: [culture, school, treePlanting],
    },
    {
      project: "Community Hospital Renovation",
      img: hospital,
      overview: "Health Infrastructure",
      date: "5/8/2023",
      area: "Malasila, Makilala, Cotabato",
      scope: "Legislative",
      sector: "Healthcare",
      summary:
        "An infrastructure improvement project aimed at enhancing hospital facilities and medical services in local communities.",
      story:
        "The Community Hospital Renovation project upgraded the facility with new medical equipment, improved patient wards, and expanded outpatient services. Medical staff received training to handle modern systems, ensuring quality healthcare for residents of Makilala and nearby areas.",
      projectImg: [hospital, school, electricity],
    },
  ];

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
        project.project.toLowerCase().includes(keyword.toLowerCase()) ||
        project.overview.toLowerCase().includes(keyword.toLowerCase()) ||
        project.summary.toLowerCase().includes(keyword.toLowerCase()) ||
        project.area.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="px-[5%] flex justify-center font-times gap-10">
      <div>
        <div className="py-5">
          <h5 className="text-[1.5rem] text-[#5d4102] font-bold">
            PROJECT DIRECTORY
          </h5>
        </div>
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
            {filteredProjects.map((name, index) => (
              <li
                key={index}
                className="w-[21rem] h-[25rem] flex flex-col bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-1/2">
                  <img
                    src={name.img}
                    alt={name.project}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-1/2 flex flex-col justify-between p-4 text-gray-800">
                  <div>
                    <p className="text-lg font-semibold mb-2 line-clamp-2">
                      {name.project}
                    </p>
                    <div className="text-sm space-y-1 line-clamp-3">
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
            <p className="text-center text-gray-600 mt-10">
              No projects found matching your filters.
            </p>
          )}
        </div>
      </div>

      <div className="bg-[#f8f2d3] h-fit px-4 py-6 translate-y-[4.7rem]">
        <h6 className="text-[1.625rem] font-semibold text-center mb-4 text-[#6b4b00]">
          Filters
        </h6>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1.25rem] font-medium text-[#6b4b00]">
            Scope
          </label>
          <select
            name="Scope"
            value={selectedScope}
            onChange={(e) => setSelectedScope(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[0].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1.25rem] font-medium text-[#6b4b00]">
            Category
          </label>
          <select
            name="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[1].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1.25rem] font-medium text-[#6b4b00]">
            Year
          </label>
          <select
            name="Year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[2].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-[1.25rem] font-medium text-[#6b4b00]">
            Barangay
          </label>
          <select
            name="Barangay"
            value={selectedBarangay}
            onChange={(e) => setSelectedBarangay(e.target.value)}
            className="border border-[#6b4b00] rounded-sm bg-transparent p-2 text-[#6b4b00] focus:outline-none focus:ring-1 focus:ring-[#6b4b00]"
          >
            {filter[3].option.map((choice, i) => (
              <option key={i} value={choice}>
                {choice}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 text-sm font-medium text-[#6b4b00]">
            Keyword Search
          </label>
          <div className="flex items-center border border-[#6b4b00] rounded-sm bg-transparent p-2">
            <input
              type="text"
              placeholder="Type Here"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 bg-transparent text-[#6b4b00] placeholder-[#b89c65] focus:outline-none"
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
          className="w-full bg-[#6b4b00] text-white font-medium py-2 rounded-sm hover:bg-[#4a3300] transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Directory;