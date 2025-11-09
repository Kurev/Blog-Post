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
  month: string;
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
    month: "March",
    year: "2024",
    type: "Safety and Infrastructure",
    title: "Building a Safer Community",
    beforeProgram:
      "Before the program, our patrol units relied on old and unreliable vehicles. Communication lines often failed during emergencies, making coordination difficult. Many communities felt unsafe because of slow response times.",
    supportRecieved:
      "We received new patrol cars, updated radios, and safety gear for our officers. The government also provided maintenance support and training on efficient community response. These resources gave us renewed confidence to serve better.",
    whatChanged:
      "Our team can now respond quickly to calls for help in every district. Coordination between stations has become smoother and more reliable. The presence of visible and active patrol units restored trust among residents.",
    conclusion:
      "The assistance completely transformed the way we operate. Our officers now feel more capable and motivated in their duties. Residents no longer hesitate to seek help because they know we will come. The program built stronger relationships between the police and the people. It proved that investment in public safety truly strengthens communities.",
  },
  {
    img: testimony2,
    name: "Jose Fuentes",
    work: "Farmer",
    quote1:
      "The training we received helped us improve our harvest and increase our income.",
    quote2:
      "With better water supply, our yields have doubled, and we no longer worry during dry seasons.",
    sector: "Agriculture",
    program: "Farm Modernization Initiative",
    location: "Bukidnon, Philippines",
    month: "January",
    year: "2024",
    type: "Agricultural Support",
    title: "Growing Prosperity from the Ground Up",
    beforeProgram:
      "Before the program, our crops often failed due to long dry seasons. We depended entirely on rainfall and had no irrigation system. Many families in our barangay struggled to earn enough from farming alone.",
    supportRecieved:
      "The program provided modern irrigation pumps and fertilizers to improve soil quality. We also received hands-on training in sustainable and organic farming. With technical guidance, we learned to manage resources more efficiently.",
    whatChanged:
      "Our farms now produce healthy and abundant crops all year round. The irrigation system ensures our plants survive even during droughts. We have also formed cooperatives to market our produce and share resources.",
    conclusion:
      "The project brought lasting improvement to our livelihoods. Farmers are now more knowledgeable and confident in managing their land. Our income has grown steadily, allowing us to provide better for our families. Young people in our community are now encouraged to stay and farm. We truly feel proud knowing our hard work contributes to local food security.",
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
    month: "August",
    year: "2023",
    type: "Medical support",
    title: "A Safer Pregnancy Journey",
    beforeProgram:
      "Before the program, our clinic was too small and lacked proper equipment. Pregnant mothers had to travel far just to get prenatal checkups. Many of them felt unsafe and anxious due to the lack of nearby medical care.",
    supportRecieved:
      "The project funded new medical equipment and expanded our facility. Midwives received updated training in maternal and infant health. We also gained access to regular medical supplies and emergency kits.",
    whatChanged:
      "Expectant mothers now receive consistent and timely care close to home. The new facility has made deliveries safer and more comfortable. Families trust our health center more than ever before.",
    conclusion:
      "The improvements gave us hope and strength as healthcare workers. Mothers no longer fear giving birth in our barangay because they feel safe. We have seen a big decrease in pregnancy-related complications. The community now views health care as accessible and reliable. This transformation has truly made our barangay a healthier and more caring place for everyone.",
  },
];
