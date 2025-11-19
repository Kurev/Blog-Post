import imgBio from "../../assets/profile.webp";


const Bio = () => {
  return (
    <div
      className="min-h-[85vh] px-[5%] flex flex-col justify-center font-times gap-10 pt-12 pb-4"
      style={{
        backgroundColor: "#f0f0f0",
        background:
          "linear-gradient(0deg,rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.37) 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-9">
        <div className="flex justify-center md:justify-start">
          <img
            src={imgBio}
            alt="Profile"
            className="object-cover w-[15rem] md:w-[18rem] xl:w-[20rem]"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 md:gap-0">
          <div>
            <h1 className="text-[1.5rem] md:text-[2rem] xl:text-[2.313rem] text-[#4e3100] font-bold text-center md:text-left">
              HON. RUDY S. CAOAGDAN, DPA
            </h1>
            <h2 className="text-[1.25rem] md:text-[1.75rem] xl:text-[2.063rem] text-[#545454] text-center md:text-left">
              2<sup>nd</sup>
              District Representative <br />
              <p>Cotabato</p>
            </h2>
          </div>
          <ul className="text-[1rem] md:text-[1.5rem] xl:text-[2.063rem] text-[#545454] text-center md:text-left">
            <li>House of Representatives, Quezon City</li>
            <li>Rm. NW-218</li>
            <li>Phone: (632) 8931-5001, Local: 7397</li>
            <li>Direct: 8931-5172</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Bio;