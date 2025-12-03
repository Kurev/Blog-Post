import heroIssue from "../../assets/10.webp";
import centerImg from "../../assets/11.webp";
import MainLayout from "../../layouts/MainLayout";
import { useLocation, useNavigate } from "react-router-dom";

const IssuePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const issue = location.state?.selectedIssue;
  const issues = location.state?.issues;

  // Prevent undefined crash
  if (!issue || !issues) {
    return (
      <div className="p-10">
        <p>No issue data found.</p>
        <button
          onClick={() => navigate("/about")}
          className="underline text-blue-600"
        >
          Go back
        </button>
      </div>
    );
  }

  const currentIndex = issues.findIndex((i: any) => i.id === issue.id);

  const nextIndex = (currentIndex + 1) % issues.length;
  const nextIssue = issues[nextIndex];

  const handleNext = () => {
    navigate(`/about/issue/${nextIssue.id}`, {
      state: { selectedIssue: nextIssue, issues },
    });
  };

  return (
    <MainLayout>
      <div
        className="w-full bg-center bg-cover aspect-[16/9] font-times pt-[3rem] md:pt-[5rem] px-[5%]"
        style={{ backgroundImage: `url(${heroIssue})` }}
      >
        <div className="flex flex-col items-center gap-8 md:gap-14">
          <div className="flex flex-col items-center">
            <h1 className="text-[6vw] md:text-[3rem] text-[#875a0d] text-center">
              KEY ISSUE HEADLINE
            </h1>
            <h2 className="text-[4.5vw] md:text-[2.25rem] text-[#4e3100] font-medium text-center">
              Stance Bottomline
            </h2>
          </div>

          <img
            className="object-fit w-full md:max-w-[45rem]"
            src={centerImg}
            alt=""
          />
        </div>

        <div className="flex flex-col text-[#4e3100] gap-8 md:gap-14 text-justify mt-8 md:mt-0">
          <p className="text-[1rem] md:text-[1.5rem]">Detail: {issue.details}</p>
          <p className="text-[1rem] md:text-[1.5rem]">Stance: {issue.stance}</p>
        </div>

        <div className="flex justify-end items-center py-6 md:py-10 px-[5%]">
          <button
            className="text-[1.5rem] md:text-[2.375rem] font-times text-[#4e3100] cursor-pointer"
            onClick={handleNext}
          >
            {`> KEY ISSUE ${nextIssue.id}`}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default IssuePage;
