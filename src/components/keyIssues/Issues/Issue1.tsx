import heroIssue from "../../../assets/10.webp";
import centerImg from "../../../assets/11.webp";

const Issue1 = () => {
  return (
    <div
      className="w-full bg-center bg-cover aspect-[16/9] font-times pt-[3rem] md:pt-[5rem] px-[5%]"
      style={{
        backgroundImage: `url(${heroIssue})`,
      }}
    >
      <div className="flex flex-col items-center gap-8 md:gap-14">
        <div className="flex flex-col items-center">
          <h1 className="text-[6vw] md:text-[3rem] text-[#875a0d] text-center">KEY ISSUE HEADLINE</h1>
          <h2 className="text-[4.5vw] md:text-[2.25rem] text-[#4e3100] font-medium text-center">Stance Bottomline</h2>
        </div>
        <img className="object-fit w-full md:max-w-[45rem]" src={centerImg} alt="" />
      </div>
      <div className="flex flex-col text-[#4e3100] gap-8 md:gap-14 text-justify mt-8 md:mt-0">
        <p className="text-[1rem] md:text-[1.5rem]">
          Details: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo.{" "}
        </p>
        <p className="text-[1rem] md:text-[1.5rem]">
          Stance: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo.{" "}
        </p>
      </div>
      <div className="flex justify-end items-center py-6 md:py-10 px-[5%]">
        <button className="text-[1.5rem] md:text-[2.375rem] font-times text-[#4e3100] cursor-pointer">{`> KEY ISSUE 2`}</button>
      </div>
    </div>
  );
};

export default Issue1;