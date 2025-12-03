import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { issue } from "../data/issueData";


const Issue = () => {
  const navigate = useNavigate();

  

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  // Get current items
  const offset = currentPage * itemsPerPage;
  const currentItems = issue.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(issue.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="font-times text-[#5d4102] py-[5rem]">
      <div className="flex justify-center mb-12">
        <h3 className="text-[1.5rem] sm:text-[5vw] md:text-[4vw] lg:text-[2.112rem] font-semibold">STANCE KEY ISSUES</h3>
      </div>

      <ul className="grid grid-cols-1 lg:grid-cols-3 px-[5%] md:px-[15%] lg:px-[5%] xl:px-[10%] gap-10 lg:gap-7 xl:gap-16 justify-items-center">
        {currentItems.map((data, index) => (
          <div
            key={data.id}
            className="lg:max-w-[25rem] flex flex-col gap-5 border-1 px-6 md:px-7 xl:px-4 py-5 md:py-10 cursor-pointer hover:bg-[#4e3100] hover:text-white hover:scale-110 duration-500"
            onClick={() => {
              navigate(`/about/issue/${data.id}`, {
                state: { selectedIssue: data, issues: issue },
              });
            }}
          >
            <h4>Key Issue {offset + index + 1}</h4>
            <li className="text-justify text-sm md:text-sm lg:text-[0.75rem] xl:text-sm">{data.issues}</li>
          </div>
        ))}
      </ul>

      {/* REACT PAGINATE */}
      <div className="flex justify-center mt-10">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={
            "flex gap-3 items-center flex-wrap justify-center"
          }
          pageClassName={
            "px-3 py-1 border rounded cursor-pointer hover:bg-[#4e3100] hover:text-white transition-colors"
          }
          pageLinkClassName={""}
          previousClassName={
            "px-4 py-2 border rounded cursor-pointer hover:bg-[#4e3100] hover:text-white transition-colors"
          }
          previousLinkClassName={""}
          nextClassName={
            "px-4 py-2 border rounded cursor-pointer hover:bg-[#4e3100] hover:text-white transition-colors"
          }
          nextLinkClassName={""}
          breakClassName={"px-3 py-1"}
          breakLinkClassName={""}
          activeClassName={"bg-[#4e3100] text-white"}
          disabledClassName={
            "opacity-40 cursor-not-allowed pointer-events-none"
          }
        />
      </div>
    </div>
  );
};

export default Issue;
