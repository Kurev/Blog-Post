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
    <div className="font-times flex justify-center items-center bg-amber-300 w-full h-[70vh] gap-16">
      <div className="bg-[#7d6836] h-[10rem] w-[20rem]"></div>
      
      <ul className="flex flex-col gap-4">
        {plan.map((item, index) => (
          <li key={index} className="flex items-center">
            {/* Left triangle */}
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[20px] border-t-transparent border-b-transparent border-r-[#4B2E05]" />
            
            {/* Rectangle with text */}
            <div className="bg-[#4B2E05] text-white px-6 py-2 font-semibold">
              <p className="text-[1.3rem]">PLAN {index + 1} {item.plan}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plan;
