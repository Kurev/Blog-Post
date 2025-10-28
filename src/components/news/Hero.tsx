import wideHero from "../../assets/wideHero.webp"

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${wideHero})`,
      }}
    ></div>
  );
};

export default Hero;
