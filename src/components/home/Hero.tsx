import { Link } from "react-router-dom";
import hero from "../../assets/hero.webp";

const Hero = () => {
  return (
    <>
      <div>
        <div className="inset-0 flex flex-col justify-center rounded-lg px-[5%] py-7 lg:hidden">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-[3.738rem] font-bold lg:leading-15 mb-4">
              HON. RUDY S.
              <br />
              CAOAGDAN, DPA
            </h1>
            <p className="text-sm lg:text-[1.119rem] font-[500]">
              2nd District Representative
              <br />
              Cotabato
            </p>
          </div>

          <div className="mt-7">
            <p className="text-[0.8rem] lg:text-sm  text-justify mb-8">
              Guided by integrity, discipline, and a deep commitment to public
              service, he has devoted his life to serving the people through the
              military, local governance, and national leadership. With advanced
              degrees in Public Administration and experience as a former Mayor
              and Philippine Army Commander, he brings both expertise and vision
              to public office. He now serves as Representative of Cotabato’s
              2nd District, championing progress through meaningful legislation
              and dedicated service.
            </p>
            <div className="flex justify-center">
              <button className="text-sm border-1 px-9 py-3 cursor-pointer hover:bg-[#110c0c] hover:text-white duration-500">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative aspect-video font-times bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Overlay Content */}
        <div className="absolute inset-0 hidden lg:flex flex-col justify-center rounded-lg px-[5%] ">
          <div>
            <h1 className="text-[4vw] lg:text-[3.738rem] xl:text-6xl font-bold lg:leading-15 mb-4">
              HON. RUDY S.
              <br />
              CAOAGDAN, DPA
            </h1>
            <p className="text-[2vw] lg:text-[1.119rem] xl:text-3xl font-[500]">
              2nd District Representative
              <br />
              Cotabato
            </p>
          </div>

          <div className="mt-7">
            <p className="text-[0.8rem] lg:text-sm xl:text-lg lg:w-[35rem] xl:w-[47rem] 2xl:w-[55rem] text-justify mb-8">
              Guided by integrity, discipline, and a deep commitment to public
              service, he has devoted his life to serving the people through the
              military, local governance, and national leadership. With advanced
              degrees in Public Administration and experience as a former Mayor
              and Philippine Army Commander, he brings both expertise and vision
              to public office. He now serves as Representative of Cotabato’s
              2nd District, championing progress through meaningful legislation
              and dedicated service.
            </p>
            <Link to="/about">
              <button className="text-sm lg:text-lg border-1 px-9 py-3 cursor-pointer hover:bg-[#110c0c] hover:text-white duration-500">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
