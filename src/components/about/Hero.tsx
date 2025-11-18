import hero from "../../assets/7.webp";

const Hero = () => {
  return (
    <div
      className="bg-[#54431bb5] w-full h-[50rem] lg:h-screen flex justify-end items-end bg-center bg-cover"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="w-full md:w-[40rem] bg-[#4e3100] font-times text-white px-6 md:px-10 py-10 md:py-14 md:pb-35  lg:pb-40 flex flex-col gap-6 md:gap-8 translate-y-10 md:translate-y-16">
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.7rem] leading-tight font-bold">
          HON. RUDY S. CAOAGDAN, DPA
        </h1>
        <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] text-justify">
          Rudy S. Caoagdan is a public servant grounded in discipline,
          integrity, and a deep commitment to uplifting the lives of
          Cotabateños. From his years in military service to his leadership in
          local government and Congress, he has dedicated his life to bringing
          essential services closer to the people.
        </p>
      </div>
    </div>
  );
};

export default Hero;
