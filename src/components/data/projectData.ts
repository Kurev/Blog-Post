import school from "../../assets/s.webp";
import farming from "../../assets/farming.webp";
import electricity from "../../assets/electricity.webp";
import treePlanting from "../../assets/treePlanting.webp";
import culture from "../../assets/culture.webp";
import hospital from "../../assets/hospital.webp";

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
      "This project enhanced the learning environment for students in San Isidro by constructing new classrooms, repairing facilities, and providing modern learning tools. It equipped teachers with updated educational resources and digital materials to improve lesson delivery. The initiative also aimed to reduce overcrowding and improve attendance among elementary and high school learners. Ultimately, it sought to raise the overall quality of education and ensure that every child had access to a safe, inclusive, and inspiring place to learn.",
    story:
      "The School Improvement Project began with consultations involving parents, teachers, and barangay leaders to identify pressing educational needs. Several schools in San Isidro lacked basic facilities such as proper roofing, seating, and sanitation. Construction crews were mobilized to build new classrooms, refurbish old ones, and install proper lighting and ventilation. The project provided textbooks, blackboards, and computer sets to support both traditional and digital learning. Teachers participated in workshops focused on modern teaching approaches and classroom management. Local volunteers helped repaint classrooms and plant trees around school compounds for a more pleasant environment. Parents also organized feeding programs to complement the learning experience. The project inspired stronger cooperation between schools and the community. As a result, dropout rates decreased while student engagement significantly increased. This initiative transformed San Isidro’s schools into thriving centers of growth and opportunity.",
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
      "The Agricultural Support Program was designed to improve farming productivity and promote sustainable agriculture in Kibia. It supplied farmers with quality seeds, fertilizers, and tools while introducing eco-friendly farming methods. The initiative also provided training on pest control, soil care, and post-harvest management. Through this project, small farmers gained better income opportunities and increased resilience against environmental challenges.",
    story:
      "The Agricultural Support Program started after an extensive survey of farming communities in Kibia revealed a need for modernization. Many local farmers depended on traditional methods that limited their harvest potential. The program distributed improved seed varieties and organic fertilizers to enhance yield. Training sessions were conducted by agricultural experts on soil management and integrated pest control. Demonstration farms were established to show how new practices could increase efficiency. Farmers also learned about crop diversification to protect against market fluctuations. Solar-powered irrigation systems were installed to ensure year-round production. Women’s groups were encouraged to participate in backyard vegetable production for additional income. Cooperative networks were formed to strengthen the local market system and ensure fair trade prices. Over time, the project empowered farmers to become self-reliant, productive, and more confident in sustainable farming.",
    projectImg: [farming, treePlanting, school],
    lat: 7.21,
    lng: 124.25,
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
      "The Barangay Electrification Initiative aimed to bring reliable electricity to remote areas of Cotabato, improving safety and quality of life. It connected hundreds of households and small businesses to the local power grid for the first time. Streetlights were installed to promote community security and nighttime mobility. The project empowered residents to access modern technology, boost productivity, and engage more actively in economic development.",
    story:
      "Before the project, families in New Israel relied on candles and kerosene lamps for lighting. The Barangay Electrification Initiative began with a technical survey to map households and design efficient power routes. Teams of engineers and electricians worked hand-in-hand with locals to install poles, transformers, and wirings. To ensure sustainability, residents were educated on electrical safety and energy-saving practices. Small enterprises like tailoring and food stalls began operating longer hours with electricity. Students could now study at night, improving their academic performance. The barangay hall was equipped with a solar backup system for emergencies. Local officials also used the new power access to improve communication and disaster preparedness. Over time, electricity opened new economic opportunities for families. The project symbolized progress and inclusion, bridging the gap between rural and urban communities.",
    projectImg: [electricity, school, farming],
    lat: 7.205,
    lng: 124.238,
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
      "The Greening Cotabato Project was an environmental restoration initiative that promoted reforestation and climate awareness. It mobilized volunteers to plant native tree species in degraded forest zones. The project also introduced community-based monitoring to ensure long-term sustainability of planted areas. Beyond environmental impact, it fostered a culture of responsibility, unity, and care for nature among Cotabateños.",
    story:
      "The project began after reports showed rising deforestation rates in the upland areas of Bialong. Environmental officers conducted site inspections and mapped out areas for rehabilitation. Thousands of volunteers from schools, civic groups, and government agencies joined tree-planting drives. More than 15,000 seedlings were planted during the first three phases. Protective barriers were built to safeguard young trees from grazing animals. Educational seminars on environmental conservation were held for local youth. Farmers were taught to combine fruit-bearing trees with crops to support agroforestry. Regular monitoring ensured tree survival and data tracking for growth rates. The initiative received recognition for its contribution to climate mitigation. Over time, the once-barren hills of Cotabato began to turn green again, reflecting the collective effort of the community.",
    projectImg: [treePlanting, farming, culture],
    lat: 7.207,
    lng: 124.243,
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
      "The Cultural Heritage Support project preserved traditional art, music, and craftsmanship within the Badjao community. It promoted local identity through workshops, performances, and exhibitions. The initiative empowered indigenous artisans and youth by providing livelihood and education support. This project became a symbol of unity and respect for the province’s cultural diversity.",
    story:
      "The project was launched to counter the decline of traditional practices among the Badjao community. Local elders shared their expertise in weaving, music, and storytelling with younger generations. Workshops were organized to teach traditional instruments and dances. Artists received assistance to market their crafts locally and online. Cultural exhibits were held to showcase heritage crafts to the public. The program partnered with schools to integrate cultural studies into the curriculum. Scholarships were granted to young artists passionate about preserving native art. A cultural center was established in Kidapawan City for regular performances and training. The initiative also attracted tourism, creating new income opportunities for artisans. Ultimately, the project strengthened cultural identity and pride, ensuring that the Badjao legacy continues to thrive.",
    projectImg: [culture, school, treePlanting],
    lat: 7.212,
    lng: 124.245,
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
      "The Community Hospital Renovation project revitalized health services in Malasila by upgrading outdated infrastructure and medical equipment. It aimed to ensure safer and more efficient healthcare for residents. New diagnostic machines, expanded wards, and better sanitation were introduced. The initiative strengthened the overall capacity of the local health system and improved patient satisfaction.",
    story:
      "The renovation project began after assessments revealed critical issues in Malasila’s public hospital facilities. Roof leaks, damaged walls, and outdated medical tools hindered operations. The project covered both physical repair and technological modernization. Contractors refurbished the emergency, maternity, and laboratory departments. New equipment such as X-ray and diagnostic machines were installed. Medical staff received training on new systems and record management. The hospital also introduced energy-efficient lighting and backup generators. Patients expressed gratitude for the improved comfort and shorter waiting times. Health campaigns were launched to raise awareness on preventive care. The renovated facility now stands as a beacon of quality healthcare for surrounding barangays, symbolizing progress and community well-being.",
    projectImg: [hospital, school, electricity],
    lat: 7.2105,
    lng: 124.248,
  },
];