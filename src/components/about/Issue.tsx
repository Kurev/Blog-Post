interface IssueProps {
  issues: string;
}

const Issue = () => {
  const issue: IssueProps[] = [
    {
      issues:
        "Stance Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.  ",
    },
    {
      issues:
        "Stance Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.  ",
    },
    {
      issues:
        "Stance Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.  ",
    },
  ];
  return (
    <div className="font-times text-[#5d4102] py-[5rem]">
        <div className="flex justify-center mb-12">
            <h3 className="text-[2.112rem] font-semibold">STANCE PF KEY ISSUES</h3>
        </div>
      
      <ul className="grid grid-cols-1 xl:grid-cols-3 px-[5%] md:px-[15%] xl:px-[10%] gap-10 md:gap-16 ">
        {issue.map((name, index) => (
          <div className="w-full flex flex-col gap-5 border-1 px-6 md:px-7 xl:px-4 py-10 cursor-pointer hover:bg-[#4e3100] hover:text-white hover:scale-110 duration-500">
            <h4>Key Issue {index + 1}</h4>
            <li className="text-justify text-xl xl:text-sm" key={index}>{name.issues}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Issue;
