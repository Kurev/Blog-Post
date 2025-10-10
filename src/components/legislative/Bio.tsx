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
      <div className="flex gap-9">
        <div>
          <img
            src={imgBio}
            alt="Profile"
            className="object-cover xl:w-[20rem]"
          />
        </div>
        <div className="flex flex-col justify-between ">
          <div>
            <h1 className="text-[2.313rem] text-[#4e3100] font-bold">
              HON. RUDY S. CAOAGDAN, DPA
            </h1>
            <h2 className="text-[2.063rem] text-[#545454]">
              2<sup>nd</sup>
              District Representative <br />
              <p>Cotabato</p>
            </h2>
          </div>
          <ul className="text-[2.063rem] text-[#545454]">
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
