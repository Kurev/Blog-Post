import imgBio from "../../assets/profile.webp";
import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";

const Bio = () => {
  return (
    <div
      className="min-h-screen px-[5%] flex flex-col justify-center font-times gap-10 py-20"
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
      <div>
        <p className="text-[2.313rem] text-[#4e3100] font-bold">Bills</p>
        <div className="flex flex-row justify-between">
          <div className="flex gap-8 ">
            <input
              className="border-b-2 border-[#00000061] text-[2.063rem]"
              type="text"
              placeholder="Bill No, Title, or Keyword"
            />
            <button className="bg-white px-4 py-1 rounded-[17px] border-1 border-black cursor-pointer">
              <p className="text-[#4e3100] text-[2.5rem]">
                <IoIosSearch />
              </p>
            </button>
          </div>
          <div className="flex py-1 px-4 gap-10 items-center border-1 border-[#5d5d5d] text-[1.563rem] cursor-pointer">
            <p>5</p>
            <p>
              <SlArrowDown />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
