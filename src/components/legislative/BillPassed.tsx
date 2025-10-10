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
  const nextBill =
    bills && bills.length > 0 ? bills[(currentIndex + 1) % bills.length] : null;

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
          className="min-h-screen bg-cover lg:aspect-[16/9] bg-center flex items-end font-times"
          style={{
            backgroundImage: `url(${heroBill})`,
          }}
        >
          <div className="bg-[#deaf686e] text-white px-[5%] py-8 w-full flex flex-col gap-5">
            <div className="flex flex-col items-center">
              <h1 className="text-[2.625rem] font-bold">{bill.billCode}</h1>
              <h2 className="text-[2.5rem] text-justify leading-[2.8rem]">{bill.title}</h2>
            </div>
            <div className="flex flex-row justify-between px-[3%]">
              <div className="text-[1.2rem] leading-[1.5rem]">
                <p>Signature: {bill.signature}</p>
                <p>Date Filed: {bill.dateFiled}</p>
                <p>Principal Author(s): {bill.principal.join(", ")}</p>
                <p>Date Read: {bill.dateRead}</p>
                <p>Primary Referral: {bill.referral}</p>
                <p>Bill Status: {bill.status}</p>
              </div>
              <div className="flex items-center cursor-pointer gap-3 border-2 border-white px-4 py-2 h-fit " onClick={handleNext}>
                <img src={logo} alt="" className="w-[1.5rem]" />
                <p className="text-[1.25rem] text-[#ffffff] font-bold">
                  Text as Filed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-30 px-[10%] bg-[#fff9df]">
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {images.map((img, index) => (
              <li key={index}>
                <img
                  src={img}
                  alt={`Bill image ${index + 1}`}
                  className="w-full h-[18rem] object-cover rounded-sm shadow-md"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-20 bg-[#6b4b25] flex justify-end font-times">
          <button className="text-[2.625rem] text-white font-bold px-10 cursor-pointer" onClick={handleNext}>
            {`>${bill.billCode}`}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default BillPassed;
