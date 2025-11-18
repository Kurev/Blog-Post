import planImg from "../../assets/9.webp"

interface PlanProps {
  plan: string;
}

const Plan = () => {
  const plan: PlanProps[] = [
    { plan: "Lorem ipsum dolor" },
    { plan: "Lorem ipsum dolor" },
    { plan: "Lorem ipsum dolor" },
    { plan: "Lorem ipsum dolor" },
    { plan: "Lorem ipsum dolor" },
  ];

  return (
    <div className="font-times flex justify-center items-center w-full gap-16 bg-cover bg-center aspect-[16/9] px-[5%] "
      style={{
        backgroundImage: `url(${planImg})`
      }}
    >
      
      <ul className="flex flex-col items-center gap-3 md:gap-4 w-full md:w-auto">
        {plan.map((item, index) => (
          <li key={index} className="flex items-center">
            {/* Left triangle */}
            <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-b-[8px] md:border-b-[10px] border-r-[16px] md:border-r-[20px] border-t-transparent border-b-transparent border-r-[#4B2E05]" />
            
            {/* Rectangle with text */}
            <div className="bg-[#4B2E05] text-white px-4 md:px-6 py-2 w-[10rem]  md:w-[20rem] lg:w-[35rem] font-semibold">
              <p className="text-[0.5rem] md:text-[0.6rem] lg:text-[1.3rem]">PLAN {index + 1} {item.plan}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;