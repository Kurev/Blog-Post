import { useState } from "react";
import { newsdata } from "../data/newUpdate";

const NewsUpdate = () => {
  const filterNews = ["ALL", "PRESS RELEASES", "ARTICLES", "MEDIA HIGHLIGHTS"];
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredNews =
    selectedFilter === "ALL"
      ? newsdata
      : newsdata.filter(
          (news) => news.type.toLowerCase() === selectedFilter.toLowerCase()
        );

  return (
    <div className="bg-[#f7f3e7] min-h-screen py-10 md:py-20 px-4 md:px-[5%] font-times">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-black tracking-wide leading-tight">
          NEWS & UPDATES
        </h1>
        <p className="text-[#5d4102] text-[1.25rem] sm:text-[1.75rem] lg:text-[2.438rem]">
          Latest Stories, Press Releases, and Media Highlights
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 sm:gap-4 mb-10 justify-start">
        {filterNews.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`text-[1rem] sm:text-[1.25rem] md:text-[1.375rem] font-bold py-2 px-2 sm:px-[5rem] rounded-full transition-all cursor-pointer ${
              selectedFilter === filter
                ? "bg-[#5d4102] text-white"
                : "text-[#5d4102] hover:bg-[#3a2e1f] hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* News Cards */}
      <div className="grid gap-10 sm:gap-12 md:gap-15 grid-cols-1 md:grid-cols-2 cursor-pointer">
        {filteredNews.map((news, index) => (
          <div
            key={index}
            className="bg-[#fffaf0] border border-[#e5decf] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Image */}
            <div
              className="w-full h-[18rem] sm:h-[25rem] lg:h-[30rem] bg-center bg-cover px-4 sm:px-6 py-6 sm:py-8 flex items-start"
              style={{
                backgroundImage: `url(${news.img})`,
              }}
            >
              <span className="inline-block bg-white text-black text-[0.875rem] sm:text-[1rem] md:text-[1.063rem] px-4 sm:px-6 py-2 sm:py-3 rounded-full uppercase mb-3 shadow-md">
                {news.type}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
              {/* Top section */}
              <div>
                <p className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] text-[#545454] mb-1">
                  {news.date}
                </p>
                <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] font-bold text-[#545454] leading-snug mb-2">
                  {news.title}
                </h2>
              </div>

              {/* Bottom section */}
              <div className="flex flex-col items-start gap-6 sm:gap-8 mt-4">
                <p className="text-[1rem] sm:text-[1.25rem] md:text-[1.438rem] text-[#545454] text-justify leading-relaxed">
                  {news.description}
                </p>
                <button className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] hover:text-[#6a523b] transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdate;
