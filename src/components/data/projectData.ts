import school from "../../assets/s.webp";
import farming from "../../assets/farming.webp";
import electricity from "../../assets/electricity.webp";
import treePlanting from "../../assets/treePlanting.webp";
import culture from "../../assets/culture.webp";
import hospital from "../../assets/hospital.webp"

export interface ProjectItem {
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

export const projectDirectory: ProjectItem[] = [
  {
    projectTitle: "School Improvement",
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
    lat: 7.2089,
    lng: 124.2415,
  },
  {
    projectTitle: "Agricultural Support Program",
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
    lat: 7.2100,
    lng: 124.2500,
  },
  {
    projectTitle: "Barangay Electrification Initiative",
    img: electricity,
    overview: "Rural Power Access",
    date: "6/20/2022",
    area: "New Israel, Makilala, Cotabato",
    scope: "Legislative",
    sector: "Energy",
    summary:
      "A project dedicated to providing electricity to remote areas to improve living standards and economic growth.",
    story:
      "The Barangay Electrification Initiative connected hundreds of households to the power grid for the first time...",
    projectImg: [electricity, school, farming],
    lat: 7.2050,
    lng: 124.2380,
  },
  {
    projectTitle: "Greening Cotabato Project",
    img: treePlanting,
    overview: "Tree Planting & Environmental Restoration",
    date: "9/5/2022",
    area: "Bialong, Matalam, Cotabato",
    scope: "Legislative",
    sector: "Environment",
    summary:
      "An environmental conservation effort focusing on reforestation and climate resilience...",
    story:
      "Thousands of trees were planted under the Greening Cotabato Project...",
    projectImg: [treePlanting, farming, culture],
    lat: 7.2070,
    lng: 124.2430,
  },
  {
    projectTitle: "Cultural Heritage Support",
    img: culture,
    overview: "Cultural Empowerment",
    date: "12/10/2021",
    area: "Poblacion, Kidapawan City, Cotabato",
    scope: "Executive",
    sector: "Culture",
    summary:
      "A cultural preservation project supporting the Badjao community...",
    story:
      "This initiative helped the Badjao people preserve their traditional crafts...",
    projectImg: [culture, school, treePlanting],
    lat: 7.2120,
    lng: 124.2450,
  },
  {
    projectTitle: "Community Hospital Renovation",
    img: hospital,
    overview: "Health Infrastructure",
    date: "5/8/2023",
    area: "Malasila, Makilala, Cotabato",
    scope: "Legislative",
    sector: "Healthcare",
    summary:
      "An infrastructure improvement project aimed at enhancing hospital facilities...",
    story:
      "The Community Hospital Renovation project upgraded the facility...",
    projectImg: [hospital, school, electricity],
    lat: 7.2105,
    lng: 124.2480,
  },
];
