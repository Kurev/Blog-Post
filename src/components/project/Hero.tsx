import heroImg from "../../assets/heroProductImg.webp";

const Hero = () => {
  return (
    <div
      className="font-times min-h-screen flex flex-col justify-center gap-20 bg-center bg-cover "
      style={{
        backgroundImage: `linear-gradient(rgba(176, 173, 155, 0.79) 1%, rgba(237, 232, 208, 0.9) 100%), url(${heroImg})`,
      }}
    >
      <div>
        <div className="px-[5%]">
          <h1 className="text-[1.688rem] font-bold text-[#5d4102]">
            HON. RUDY S. CAOAGDAN, DPA
          </h1>
          <h2 className="text-[4.5rem] font-bold leading-[4.5rem]">
            Building Communities, <br /> Changing Lives
          </h2>
        </div>
      </div>
      <div>
        <div className="flex justify-center pl-[20%] pr-[10%]">
          <h3 className="text-[2.581rem] font-bold text-justify text-[#5d4102]">
            Discover the initiatives that have shaped Makilala’s growth and
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
