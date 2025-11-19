import { useLocation, useNavigate } from "react-router-dom";
import heroBill from "../../assets/14.webp";
import MainLayout from "../../layouts/MainLayout";
import logo from "../../assets/whiteFIleLogo.png";
import img15 from "../../assets/15.webp"
import img16 from "../../assets/16.webp"
import img17 from "../../assets/17.webp"
import img18 from "../../assets/18.webp"
import img19 from "../../assets/19.webp"
import img20 from "../../assets/20.webp"


const BillPassed = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bill = location.state?.bill;
  const bills = location.state?.bills;
  
  const images:string[] = [img15, img16, img17, img18, img19, img20];

  if (!bill) {
    return (
      <div className="p-10">
        <p>No bill data found.</p>
        <button
          onClick={() => navigate("/legislative")}
          className="underline text-blue-600"
        >
          Go back
        </button>
      </div>
    );
  }

  const currentIndex = bills?.findIndex(
    (b: any) => b.billCode === bill.billCode
  );

  // Loop: if last item, go back to first
  const nextBill = bills && bills.length > 0 ? bills[(currentIndex + 1) % bills.length] : null;

  const handleNext = () => {
    if (nextBill) {
      navigate(`/legislative/${nextBill.billCode}`, {
        state: { bill: nextBill, bills },
      });
    }
  };

  return (
    <MainLayout>
      <div>
        <div
          className="min-h-screen bg-cover w-full lg:aspect-[16/9] bg-center flex items-end font-times "
          style={{
            backgroundImage: `url(${heroBill})`,
          }}
        >
          <div className="bg-[#deaf686e] text-white px-[5%] py-6 md:py-8 w-full flex flex-col gap-4 md:gap-5">
            <div className="flex flex-col items-center">
              <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.625rem] font-bold">{bill.billCode}</h1>
              <h2 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2.5rem] text-justify leading-tight md:leading-[2.8rem]  md:text-justify">{bill.title}</h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between px-0 lg:px-[3%] gap-4 lg:gap-0">
              <div className="text-[0.875rem] md:text-[1rem] lg:text-sm leading-[1.2rem] md:leading-[1.5rem]">
                <p>Signature: {bill.signature}</p>
                <p>Date Filed: {bill.dateFiled}</p>
                <p>Principal Author(s): {bill.principal.join(", ")}</p>
                <p>Date Read: {bill.dateRead}</p>
                <p>Primary Referral: {bill.referral}</p>
                <p>Bill Status: {bill.status}</p>
              </div>
              <button className="flex items-center gap-3 border-2 border-white px-4 py-2 h-fit w-fit cursor-pointer" onClick={handleNext}>
                <img src={logo} alt="" className="w-[1.25rem] md:w-[1.5rem]" />
                <p className="text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-[#ffffff] font-bold">
                  Text as Filed
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 md:py-20 lg:py-30 px-[5%] md:px-[8%] lg:px-[10%] bg-[#fff9df]">
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-1">
            {images.map((img, index) => (
              <li key={index}>
                <img
                  src={img}
                  alt={`Bill image ${index + 1}`}
                  className="w-full h-[14rem] md:h-[16rem] lg:h-[18rem] object-cover rounded-sm shadow-md"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-16 md:h-20 bg-[#6b4b25] flex justify-end font-times">
          <button className="text-[1.5rem] md:text-[2rem] lg:text-[2.625rem] text-white font-bold px-6 md:px-10 cursor-pointer" onClick={handleNext}>
            {`>${bill.billCode}`}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default BillPassed;