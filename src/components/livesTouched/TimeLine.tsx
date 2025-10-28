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
    <div className="w-full bg-[#d4c4a8] flex flex-col items-center justify-center h-[80vh] p-16 font-times">
      {/* Title */}
      <h1 className="text-[4.125rem] font-bold text-center">Impact Timeline</h1>

      {/* Timeline container */}
      <div className="relative w-full flex flex-col">
        {/* Main horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black transform -translate-y-1/2 px-8 w-full" />

        {/* Timeline items */}
        <div className=" flex justify-between items-center w-full">
          {years.map((year, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between items-center translate-y-[4.9rem]"
              >
                {/* Dot */}
                <div className="w-5 h-5 bg-black rounded-full mb-1"></div>

                {/* Year */}
                <p className="mt-2 font-semibold">{year}</p>

                {/* Bottom text */}
              </div>
            );
          })}
        </div>
        <div className="flex justify-between translate-y-8 px-[5%]">
          {lines.map((_, index) => (
            <div key={index} className="w-[3px] h-20 bg-[#302e2e]"></div>
          ))}
        </div>

        <div className="flex mt-3 translate-y-[3rem]">
          {timeLineData.map((label, i) => (
            <div className="w-full flex justify-around">
              <p className="text-base" key={i}>
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
