import { useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const NewsUpdatePassed = () => {
  const location = useLocation();
  const news = location.state?.newsSelected;

  if (!news) {
    return (
      <MainLayout>
        <div className="py-20 text-center text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          News not found.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen py-6 sm:py-8 md:py-10 px-[5%] sm:px-6 md:px-[8%] lg:px-[5%] font-times text-[#3a2e1f]">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 pt-4 sm:pt-5 md:pt-7">
          <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem] font-bold mb-6 sm:mb-8 md:mb-10 text-black leading-tight">
            {news.title}
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <span className="bg-[#5d4102] text-white text-[0.75rem] sm:text-[0.875rem] md:text-[1.125rem] lg:text-[1.563rem] px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 uppercase font-semibold">
              {news.type}
            </span>
            <span className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] font-bold text-[#5d4102]">
              {news.date}
            </span>
          </div>
        </div>

        {/* Main image */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <img
            src={news.img}
            alt={news.title}
            className="shadow-md w-full h-[18rem] sm:h-[22rem] md:h-[28rem] lg:h-[35rem] object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 text-justify text-[#3a2e1f] leading-relaxed">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-15 items-start">
            <p className="w-full md:w-1/2 text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]">
              {news.firstPara}
            </p>
            <img
              src={news.img}
              alt=""
              className="w-full md:w-1/2 h-[15rem] sm:h-[17rem] md:h-[18rem] lg:h-[20rem] shadow-md object-cover"
            />
          </div>

          {/* Paragraph 2 and 3 with headings and image */}
          <div>
            <h2 className="text-[1.125rem] sm:text-[1.375rem] md:text-[1.75rem] lg:text-[2rem] font-bold mb-3 sm:mb-4">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] mb-5 sm:mb-6 md:mb-8">
              {news.secondPara}
            </p>
            <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
              <img
                src={news.img}
                alt=""
                className="shadow-md w-full h-[20rem] sm:h-[25rem] md:h-[32rem] lg:h-[37rem] object-cover"
              />
            </div>
            <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem]">
              {news.thirdPara}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewsUpdatePassed;