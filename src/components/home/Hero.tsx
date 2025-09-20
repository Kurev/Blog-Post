
const Hero = () => {
  return (
    <div className="flex justify-center items-center lg:h-[40rem] font-times">
      <div className="flex flex-col translate-y-8">
        <div className="">
          <h1 className="text-[3.738rem] font-bold leading-15 mb-4">
            HON. RUDY S.
            <br />
            CAOAGDAN, DPA
          </h1>
          <p className="text-[1.119rem] font-[500]">
            District Representative
            <br />
            Cotabato, 2nd District
          </p>
        </div>
        <div className="mt-7">
          <p className="max-w-[100rem] text-justify mb-8">
            Guided by integrity, discipline, and a deep commitment to public
            service, he has devoted his life to serving the people through the
            military, local governance, and national leadership. With advanced
            degrees in Public Administration and experience as a former Mayor
            and Philippine Army Commander, he brings both expertise and vision
            to public office. He now serves as Representative of Cotabato’s 2nd
            District, championing progress through meaningful legislation and
            dedicated service.
          </p>
          <button className="text-sm border-1 px-9 py-3 cursor-pointer hover:bg-[#110c0c] hover:text-white duration-500">Know More</button>
        </div>
      </div>

      <div className="w-full h-[20rem] bg-[#d8cc81] "></div>
    </div>
  );
};

export default Hero;
