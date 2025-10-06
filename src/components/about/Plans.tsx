import planImg from "../../assets/hall.webp";
import icon from "../../assets/icon.svg";

interface TimeLineProps {
  timeLineItem: string;
  icon: string;
}

const Plans = () => {
  const timeLine: TimeLineProps[] = [
    {
      timeLineItem:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
      icon: icon,
    },
    {
      timeLineItem:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
      icon: icon,
    },
    {
      timeLineItem:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
      icon: icon,
    },
    {
      timeLineItem:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
      icon: icon,
    },
  ];

  return (
    <div>
      <div
        className="w-full bg-top bg-cover h-[20rem] bg-[#dbd2d237] bg-blend-color"
        style={{
          backgroundImage: `url(${planImg})`,
        }}
      >
      </div>
      <div className="bg-cover flex flex-col justify-center items-center text-center px-[5%] pt-[5rem]">
        <div className="flex flex-col gap-4 font-times text-[#4e3100]">
          <h1 className="text-[3rem] pb-5">PLAN HEADLINE</h1>
          <p className="text-justify text-[1.625rem]">
            Details: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
          <div className="flex items-start flex-col w-full py-9">
            <h2 className="text-[1.625rem]">TIMELINE</h2>
            <div className="flex flex-col gap-4 w-full pl-24">
              {timeLine.map((item, index) => (
                <div key={index} className="flex items-center gap-6 py-4">
                  <img src={item.icon} className="w-[7rem] h-[7rem]" />
                  <p className="text-[1.625rem]">
                    Step {index + 1}: {item.timeLineItem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center py-10 px-[5%]">
        <button className="text-[2.375rem] font-times text-[#4e3100] cursor-pointer">{`> Plan 2`}</button>
      </div>
    </div>
  );
};

export default Plans;
