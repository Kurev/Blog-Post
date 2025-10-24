import { useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

const NewsUpdatePassed = () => {
  const location = useLocation();
  const news = location.state?.newsSelected;

  if (!news) {
    return (
      <MainLayout>
        <div className="py-20 text-center text-xl font-semibold text-gray-700">
          News not found.
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen py-10 px-4 sm:px-[8%] md:px-[5%] font-times text-[#3a2e1f]">
        {/* Header */}
        <div className="mb-12 pt-7">
          <h1 className="text-2xl sm:text-4xl md:text-[4.5rem] font-bold mb-10 text-black">
            {news.title}
          </h1>
          <div className="flex flex-wrap gap-20">
            <span className="bg-[#5d4102] text-white text-xs sm:text-sm md:text-[1.563rem] px-6 py-2 uppercase font-semibold">
              {news.type}
            </span>
            <span className="text-sm sm:text-base md:text-[1.75rem] font-bold text-[#5d4102]">
              {news.date}
            </span>
          </div>
        </div>

        {/* Main image */}
        <div className="flex justify-center mb-10">
          <img
            src={news.img}
            alt={news.title}
            className="shadow-md w-full h-[35rem] object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-10 text-justify text-[#3a2e1f] leading-relaxed">
          <div className="flex flex-col md:flex-row gap-15 items-start">
            <p className="md:w-1/2 text-base sm:text-lg">{news.firstPara}</p>
            <img
              src={news.img}
              alt=""
              className="w-1/2 h-[20rem] shadow-md object-cover"
            />
          </div>

          {/* Paragraph 2 and 3 with headings and image */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="text-base sm:text-lg mb-8">{news.secondPara}</p>
            <div className="flex justify-center mb-8">
              <img
                src={news.img}
                alt=""
               className="shadow-md w-full h-[37rem] object-cover"
              />
            </div>
            <p className="text-base sm:text-lg">{news.thirdPara}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewsUpdatePassed;
