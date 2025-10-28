import testimony1 from "../../assets/testimony1.webp";
import testimony2 from "../../assets/testimony2.webp";
import testimony3 from "../../assets/testimony3.webp";

interface Testimony {
  img: string;
  name: string;
  work: string;
  quote1: string;
  quote2: string;
  sector: string;
  program: string;
  location: string;
  year: string;
  type: string;
  title: string;
  beforeProgram: string;
  supportRecieved: string;
  whatChanged: string;
  conclusion: string;
}

export const TestimonyData: Testimony[] = [
  {
    img: testimony1,
    name: "Juan Dela Cruz",
    work: "Police Officer",
    quote1:
      "Thanks to the scholarship program, I was able to pursue my college degree and become a policeman.",
    quote2:
      "We can now respond faster and ensure the safety of our residents more effectively.",
    sector: "Public Safety",
    program: "Community Police Assistance Program",
    location: "Manila, Philippines",
    year: "2024",
    type: "Safety and Infrastructure",
    title: "Building a Safer Community",
    beforeProgram:
      "Before the program, our patrol units relied on old equipment and had limited communication access. Response times were often delayed due to lack of transport. It was difficult to cover all areas efficiently.",
    supportRecieved:
      "We received new patrol vehicles and upgraded radio systems.",
    whatChanged:
      "Our team can now reach incidents faster and communicate clearly during emergencies.",
    conclusion:
      "The support helped us rebuild trust with the community. People now feel safer knowing help is only a call away. Our work has become more efficient and meaningful than ever before.",
  },
  {
    img: testimony2,
    name: "Jose Fuentes",
    work: "Farmer",
    quote1:
      "The training we received helped us improve out harvest and increase our income.",
    quote2:
      "With better water supply, our yields have doubled, and we no longer worry during dry seasons.",
    sector: "Agriculture",
    program: "Farm Modernization Initiative",
    location: "Bukidnon, Philippines",
    year: "2024",
    type: "Agricultural Support",
    title: "Growing Prosperity from the Ground Up",
    beforeProgram:
      "Before the program, we relied heavily on rainfall to water our crops. Droughts often destroyed months of hard work. Many farmers in our area struggled to make enough income for their families.",
    supportRecieved:
      "We were provided with irrigation pumps and training on sustainable farming practices.",
    whatChanged:
      "Our farms now produce higher yields and we can plant all year round without fear of drought.",
    conclusion:
      "The project gave us stability and hope. Farming has become less of a struggle and more of a livelihood we are proud of. Our community is now thriving and looking forward to the future.",
  },
  {
    img: testimony3,
    name: "Maria Cruz",
    work: "Head Midwife",
    quote1:
      "This new facility means we can better care for expectant mothers in our barangay.",
    quote2:
      "The changes have made all the difference. The mothers are less worried and more supported.",
    sector: "Health",
    program: "Barangay Health Center",
    location: "San Vicente, Philippines",
    year: "2023",
    type: "Medical support",
    title: "A Safer Pregnancy Journey",
    beforeProgram:
      "Before the program, our health center lacked essential equipment and medicines. Many mothers had to travel far for prenatal care. We often struggled to accommodate everyone safely.",
    supportRecieved:
      "We received new medical supplies and training for our midwives.",
    whatChanged:
      "The mothers now receive timely check-ups and safer deliveries in our own barangay.",
    conclusion:
      "The improvements brought hope to our community. Expectant mothers feel more secure knowing care is close by. Our barangay has truly become a safer place for families to grow.",
  }
];

