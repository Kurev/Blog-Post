import { useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

interface BioProps {
  label: string;
  value: string;
}

const StoryTestimony = () => {
  const location = useLocation();
  const testimony = location.state?.selected;

  const bio: BioProps[] = [
    {
      label: "Sector",
      value: testimony.sector,
    },
    {
      label: "Program/Project",
      value: testimony.program,
    },
    {
      label: "Location",
      value: testimony.location,
    },
    {
      label: "Year of Implementation",
      value: testimony.year,
    },
    {
      label: "Type of Assistance",
      value: testimony.type,
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen font-times">
        {/* Top Banner Image */}
        <img
          src={testimony.img}
          alt={testimony.name}
          className="w-full min-h-[60vh] object-cover object-center"
        />

        <div className="w-full mx-auto p-[5%] flex flex-col justify-between md:flex-row">
          {/* LEFT COLUMN */}
          <div className="w-[23rem] h-[100%] bg-[#f5f3ec] p-6 rounded-xl shadow-md flex flex-col items-center text-center flex-shrink-0">
            <img
              src={testimony.img}
              alt={testimony.name}
              className="w-60 h-60 object-cover rounded-full mb-4"
            />
            <h2 className="font-bold text-[2.5rem]">{testimony.name}</h2>
            <p className="text-[1.5rem] text-gray-700 mb-4">{testimony.work}</p>

            {bio.map((item, index) => (
              <div key={index} className="text-left w-full text-sm space-y-2">
                <div className="border-b-2 border-black mb-2 text-[1.5rem] py-5">
                  <span className="font-semibold">{item.label} </span>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
            <blockquote className="italic text-gray-700 mt-6 border-l-4 border-[#ccc] pl-4">
              “{testimony.quote2}”
            </blockquote>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:w-2/3 h-auto">
            <h1 className="text-3xl md:text-[6rem] font-bold mb-2">
              {testimony.name}: {testimony.title}
            </h1>

            <p className="text-[3rem] italic text-gray-700 mb-4">
              “{testimony.quote1}”
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <span className="bg-[#fff9df] px-3 py-1 rounded-md text-[1.5rem]">
                {testimony.sector}
              </span>
              <span className="bg-[#fff9df] px-3 py-1 rounded-md text-[1.5rem]">
                {testimony.location}
              </span>
              <span className="bg-[#fff9df] px-3 py-1 rounded-md text-[1.5rem]">
                {testimony.month} {testimony.year}
              </span>
            </div>

            <section className="space-y-6 text-[15px] leading-relaxed">
              <div>
                <h3 className="text-[3rem] mb-1">Before the Program</h3>
                <p className="text-[1.5rem]">{testimony.beforeProgram}</p>
              </div>

              <div className="flex gap-7">
                <div className="w-1/2">
                  <div>
                    <h3 className=" text-[3rem] mb-1">Support Received</h3>
                    <p className="text-[1.5rem]">
                      {testimony.supportRecieved}
                    </p>
                  </div>

                  <div>
                    <h3 className=" text-[3rem] mb-1">What Changed</h3>
                    <p className="text-[1.5rem]">{testimony.whatChanged}</p>
                  </div>
                </div>
                <img src={testimony.img} alt="" className="w-1/2 h-[35rem] object-cover"/>
              </div>

              <div>
                <p className="text-[1.5rem]">{testimony.conclusion}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StoryTestimony;
