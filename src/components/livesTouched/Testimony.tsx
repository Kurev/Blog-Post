import { useNavigate } from "react-router-dom";
import { TestimonyData } from "../data/testimony";

const Testimony = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#f5f0de] py-16 px-6 font-times">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-2xl md:text-[3.438rem] font-bold mb-10">
          Stories & Testimonies
        </h4>

        <div className="grid gap-8 md:grid-cols-3">
          {TestimonyData.map((testimony, index) => (
            <div
              key={index}
              className="bg-[#f8f5e7] shadow-md rounded-md overflow-hidden flex flex-col"
              onClick={() =>
                navigate(`/livesTouched/${testimony.name}` ,{
                  state: {selected: testimony, TestimonyData }
                })
              }
            >
              <img
                src={testimony.img}
                alt={testimony.name}
                className="w-full h-[25rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] object-cover"
              />

              {/* Make the content area flex and evenly aligned */}
              <div className="p-6 flex flex-col items-start flex-1">
                <p className="text-gray-800 text-[1.5rem] md:text-sm lg:text-[1.4rem] xl:text-[2.2rem] mb-4 text-left">
                  “{testimony.quote1}”
                </p>

                <div className="mt-auto">
                  <h3 className="font-bold text-gray-900 text-xl md:text-lg lg:text-[1.813rem]">
                    {testimony.name}
                  </h3>
                 
                </div>
                <div>
                   <p className="text-gray-600 text-lg md:text-sm lg:text-[1.438rem]">
                    {testimony.work}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
