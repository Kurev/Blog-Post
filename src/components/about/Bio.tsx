import cong from "../../assets/new8.webp"


interface BioProps {
  desc: string;
}

const Bio = () => {
  const biodesc:BioProps[] = [
    {
      desc: "Born and raised in Makilala, Cotabato, Rudy Caoagdan's journey reflects the values of hard work, discipline, and a genuine commitment to service. His early years instilled in him a deep sense of responsibility to community and country, which he carried into his career as a Battalion Commander in the Philippine Army, where he honed his leadership, integrity, and resilience in service to the nation. After his military career, he continued his dedication to public service by working as Budget Officer in the Municipal Government of Makilala, ensuring that local resources were allocated fairly and used efficiently for the benefit of the people.",
    },
    {
      desc: "In 2010, he was entrusted with greater responsibility as Mayor of Makilala, where he prioritized programs in education, agriculture, and community development, laying foundations that improved opportunities for students, strengthened support for farmers, and promoted unity across barangays. His initiatives as mayor showcased his vision for inclusive growth and responsive governance, earning him the trust and respect of his constituents.",
    },
    {
      desc: "Since 2019, he has been serving as the Representative of Cotabato's 2nd District in Congress. In this role, he has worked tirelessly to ensure that national resources reach the grassroots level and that local voices are not only heard but are actively considered in policymaking. By authoring and supporting legislation that addresses pressing issues in education, rural development, and good governance, he continues to champion progress for Cotabateños and uphold his lifelong belief that leadership is best measured through service that transforms lives.",
    },
  ];
  return (
    <div className="flex justify-end w-full flex-col lg:flex-row py-[2rem] md:py-[4rem]">
      
      <img src={cong} alt="" className="w-full lg:w-[40rem] bg-center bg-cover "/>
      <div className="bg-[#cda26f] w-full lg:w-[45rem] flex flex-col gap-7 md:gap-5 sm:gap-4 py-[5%] px-[5%] font-times text-white">
        {biodesc.map((list, index) => (
          <p className="text-sm md:text-[1.125rem] xl:text-md text-justify" key={index}>{list.desc}</p>
        ))}
      </div>
    </div>
  );
};

export default Bio;