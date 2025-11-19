import livesHero from "../../assets/liveHero.webp";

interface StatItem {
  value: string;
  label: string;
}

const Hero = () => {
  const stats: StatItem[] = [
    { value: "6000+", label: "scholars" },
    { value: "87", label: "projects completed" },
    { value: "38", label: "barangays reached" },
  ];

  return (
    <div
      className="relative w-full py-[5rem] md:min-h-screen font-times bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: `url(${livesHero})`,
      }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-[#ffffff91] bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 px-[5%] sm:px-[6%] md:px-[7%] lg:px-[8%] text-black">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7.625rem] font-bold mb-3 sm:mb-4 leading-tight">
          Lives Touched
        </h1>
        <p className="text-[0.875rem] sm:text-[1.125rem] md:text-[1.5rem] lg:text-[2.5rem] mb-8 sm:mb-10 leading-relaxed">
          Read stories of how Cong. Rudy Caoagdan's projects and initiatives
          have made a difference in Makilala. These testimonies reflect positive
          changes in education, health, infrastructure, and more.
        </p>

        <div className="flex flex-row justify-between items-center gap-4 sm:gap-6 md:gap-12 lg:gap-20">
          {stats.map((item: StatItem, index: number) => (
            <div key={index} className="text-center">
              <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-semibold">
                {item.value}
              </h2>
              <p className="text-[0.625rem] sm:text-[0.875rem] md:text-[1.5rem] lg:text-[2.5rem]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;