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
          className="w-full min-h-[40vh] sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] object-cover object-center"
        />

        <div className="w-full mx-auto p-4 sm:p-6 md:p-[5%] flex flex-col gap-6 md:gap-8 xl:flex-row xl:justify-between">
          {/* LEFT COLUMN */}
          <div className="w-full xl:w-[23rem] xl:h-[100%] bg-[#f5f3ec] p-4 sm:p-5 md:p-6 rounded-xl shadow-md flex flex-col items-center text-center flex-shrink-0">
            <img
              src={testimony.img}
              alt={testimony.name}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded-full mb-3 sm:mb-4"
            />
            <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">{testimony.name}</h2>
            <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-gray-700 mb-3 sm:mb-4">{testimony.work}</p>

            {bio.map((item, index) => (
              <div key={index} className="text-left w-full text-sm space-y-2">
                <div className="border-b-2 border-black mb-2 text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] py-3 sm:py-4 md:py-5">
                  <span className="font-semibold">{item.label} </span>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
            <blockquote className="italic text-gray-700 mt-4 sm:mt-5 md:mt-6 border-l-4 border-[#ccc] pl-3 sm:pl-4 text-[0.875rem] sm:text-[1rem] md:text-[1.125rem]">
              "{testimony.quote2}"
            </blockquote>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full xl:w-2/3 h-auto">
            <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-bold mb-2 leading-tight">
              {testimony.name}: {testimony.title}
            </h1>

            <p className="text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] italic text-gray-700 mb-3 sm:mb-4">
              "{testimony.quote1}"
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-7 md:mb-8">
              <span className="bg-[#fff9df] px-2 sm:px-2.5 md:px-3 py-1 rounded-md text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                {testimony.sector}
              </span>
              <span className="bg-[#fff9df] px-2 sm:px-2.5 md:px-3 py-1 rounded-md text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                {testimony.location}
              </span>
              <span className="bg-[#fff9df] px-2 sm:px-2.5 md:px-3 py-1 rounded-md text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                {testimony.month} {testimony.year}
              </span>
            </div>

            <section className="space-y-4 sm:space-y-5 md:space-y-6 leading-relaxed">
              <div>
                <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem] mb-1 font-semibold">Before the Program</h3>
                <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]">{testimony.beforeProgram}</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-7">
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem] mb-1 font-semibold">Support Received</h3>
                    <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                      {testimony.supportRecieved}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem] mb-1 font-semibold">What Changed</h3>
                    <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]">{testimony.whatChanged}</p>
                  </div>
                </div>
                <img 
                  src={testimony.img} 
                  alt="" 
                  className="w-full lg:w-1/2 h-[20rem] sm:h-[25rem] md:h-[28rem] lg:h-[30rem] xl:h-[35rem] object-cover rounded-md"
                />
              </div>

              <div>
                <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]">{testimony.conclusion}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StoryTestimony;