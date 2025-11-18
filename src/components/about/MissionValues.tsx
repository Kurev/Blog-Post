const MissionValues = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center font-times text-[#5d4102] px-[5%] gap-8 md:gap-0">
      <div className="md:mb-10">
        <h2 className="text-[5vw] md:text-[1.512rem] font-bold">
          MISSION & VALUES
        </h2>
        <p className="text-[7vw] md:text-[2.188rem] font-bold">
          Decades of Leadership, <br /> Thousands of Lives Changed
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-14">
        <p className="text-justify text-lg lg:text-[1.119rem] ">
          Mission LLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <p className="text-justify text-lg lg:text-[1.119rem] ">
          Values LLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
    </div>
  );
};

export default MissionValues;
