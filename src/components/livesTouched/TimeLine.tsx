import React from "react";

const Timeline: React.FC = () => {
  const lines = Array.from({ length: 8 });

  const years: string[] = ["2020", "2021", "2022", "2023", "2024"];

  const timeLineData: string[] = [
    "Established Sample",
    "Turnover Sample",
    "Passed Bill Sample",
    "Established Sample",
    "Build Sample",
    "Signing Sample",
    "Passed Bill Sample",
    "Established Sample",
  ];

  return (
    <div className="w-full bg-[#d4c4a8] flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:h-[75vh] lg:h-[80vh] p-4 sm:p-8 md:p-12 lg:p-16 font-times">
      {/* Title */}
      <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.125rem] font-bold text-center mb-4 sm:mb-6 md:mb-8">
        Impact Timeline
      </h1>

      {/* Timeline container */}
      <div className="relative w-full flex flex-col">
        {/* Main horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black transform -translate-y-1/2 px-2 sm:px-4 md:px-6 lg:px-8 w-full" />

        {/* Timeline items */}
        <div className="flex justify-between items-center w-full">
          {years.map((year, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between items-center translate-y-[3rem] sm:translate-y-[3.5rem] md:translate-y-[4.2rem] lg:translate-y-[4.9rem]"
              >
                {/* Dot */}
                <div className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-black rounded-full mb-1 z-50"></div>

                {/* Year */}
                <p className="mt-1 sm:mt-1.5 md:mt-2 font-semibold text-[0.5rem] sm:text-[0.875rem] md:text-[1rem] lg:text-[1.125rem]">
                  {year}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between translate-y-4 sm:translate-y-6 md:translate-y-7 lg:translate-y-8 px-[3%] sm:px-[4%] md:px-[5%]">
          {lines.map((_, index) => (
            <div
              key={index}
              className="w-[2px] sm:w-[2.5px] md:w-[3px] h-12 sm:h-16 md:h-18 lg:h-20 bg-[#302e2e]"
            ></div>
          ))}
        </div>

        <div className="flex mt-2 sm:mt-2.5 md:mt-3 translate-y-[2rem] sm:translate-y-[2.5rem] md:translate-y-[3rem]">
          {timeLineData.map((label, i) => (
            <div className="w-full flex justify-around" key={i}>
              <p className="text-[0.45rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-base text-center px-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;