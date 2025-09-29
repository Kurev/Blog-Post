import hero from "../../assets/7.webp"

const Hero = () => {
  return (
    <div className="bg-[#54431bb5] w-full h-screen flex justify-end items-end bg-center bg-cover aspect-[16/9]"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >
      <div className="w-[40rem]  bg-[#4e3100] font-times text-white px-10 py-14 pb-40 flex flex-col gap-8 translate-y-16">
        <h1 className="text-[3.737rem] leading-14 font-bold">HON. RUDY S. CAOAGDAN, DPA</h1>
        <p className="text-[1rem] text-justify">Rudy S. Caoagdan is a public servant grounded in discipline, integrity, and a deep commitment to uplifting the lives of Cotabateños. From his years in military service to his leadership in local government and Congress, he has dedicated his life to bringing essential services closer to the people.</p>
      </div>
    </div>
  );
};

export default Hero;
