import heroImg from "../../assets/heroProductImg.webp";

const Hero = () => {
  return (
    <div
      className="font-times h-[70vh] md:min-h-screen flex flex-col justify-center gap-10 md:gap-16 lg:gap-20 bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(176, 173, 155, 0.79) 1%, rgba(237, 232, 208, 0.9) 100%), url(${heroImg})`,
      }}
    >
      <div>
        <div className="px-[5%]">
          <h1 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.688rem] font-bold text-[#5d4102]">
            HON. RUDY S. CAOAGDAN, DPA
          </h1>
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[2rem] sm:leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.5rem]">
            Building Communities, <br /> Changing Lives
          </h2>
        </div>
      </div>
      <div>
        <div className="flex justify-center px-[5%] md:pl-[15%] md:pr-[8%] lg:pl-[20%] lg:pr-[10%]">
          <h3 className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.8rem] lg:text-[2.581rem] font-bold text-justify text-[#5d4102]">
            Discover the initiatives that have shaped Makilala's growth and
            strengthened its communities. From roads and schools to livelihood
            programs, every project reflects a commitment to service and
            progress.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;