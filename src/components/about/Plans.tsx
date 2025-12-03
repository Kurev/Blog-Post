import { useLocation, useNavigate } from "react-router-dom";
import planImg from "../../assets/hall.webp";
import MainLayout from "../../layouts/MainLayout";

const Plans = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedPlan = location.state?.selectedPlan;
  const plans = location.state?.plans;
  const index = location.state?.index;

  if (!selectedPlan) return <div>No plan found.</div>;

  return (
    <MainLayout>
      <div>
        {/* HEADER IMAGE */}
        <div
          className="w-full bg-top bg-cover h-[15rem] md:h-[18rem] lg:h-[20rem] bg-[#dbd2d237] bg-blend-color"
          style={{
            backgroundImage: `url(${planImg})`,
          }}
        ></div>

        <div className="bg-cover flex flex-col justify-center items-center text-center px-[5%] md:px-[7%] pt-[3rem] md:pt-[5rem]">
          <div className="flex flex-col gap-4 font-times text-[#4e3100] w-full ">

            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] pb-5">
              PLAN HEADLINE
            </h1>

            <p className="text-justify text-[1rem] md:text-[1.3rem] lg:text-[1.625rem] leading-relaxed">
              Details:{selectedPlan.detail}
            </p>

            {/* TIMELINE */}
            <div className="flex items-start flex-col w-full py-9">
              <h2 className="text-[1.25rem] md:text-[1.4rem] lg:text-[1.625rem]">
                TIMELINE
              </h2>

              <div className="flex flex-col gap-4 w-full pl-6 md:pl-16 lg:pl-24">

                {selectedPlan.timeLineItem.map((step: string, stepIndex: number) => (
                  <div
                    key={stepIndex}
                    className="flex items-start md:items-center gap-4 md:gap-6 py-4"
                  >
                    <img
                      src={selectedPlan.icon}
                      className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] lg:w-[5rem] lg:h-[5rem]"
                    />

                    <p className="text-[1rem] md:text-[1.3rem] lg:text-[1.625rem] text-left">
                      Step {stepIndex + 1}: {step}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* NEXT PLAN BUTTON */}
        <div className="flex justify-end items-center py-10 px-[5%]">
          {index + 1 < plans.length && (
            <button
              className="text-[1.5rem] md:text-[2rem] lg:text-[2.375rem] font-times text-[#4e3100] cursor-pointer"
              onClick={() =>
                navigate(`/about/plans/${index + 2}`, {
                  state: {
                    selectedPlan: plans[index + 1],
                    plans,
                    index: index + 1,
                  },
                })
              }
            >
              {`> Plan ${index + 2}`}
            </button>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Plans;
