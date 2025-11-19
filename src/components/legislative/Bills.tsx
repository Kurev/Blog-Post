import { useNavigate } from "react-router-dom";
import logo from "../../assets/fileLogo.png";
import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";

interface BillProps {
  billCode: string;
  title: string;
  signature: string;
  dateFiled: string;
  principal: string[];
  dateRead: string;
  referral: string;
  status: string;
}

const Bills = () => {
  const navigate = useNavigate();

  const bills: BillProps[] = [
    {
      billCode: "HB00758",
      title:
        "AN ACT CONVERTING THE MAKILALA INSTITUTE OF SCIENCE AND TECHNOLOGY IN THE MUNICIPALITY OF MAKILALA, PROVINCE OF COTABATO, INTO A STATE COLLEGE AND APPROPRIATING FUNDS THEREFOR",
      signature: "Local",
      dateFiled: "2025-07-01",
      principal: ["CAOAGDAN, RUDY S., DPA"],
      dateRead: "2025-07-29",
      referral: "HIGHER AND TECHNICAL EDUCATION",
      status:
        "Pending with the Committee on HIGHER R AND TECHNICAL EDUCATION since 2025-07-29",
    },
    {
      billCode: "HB00759",
      title:
        "AN ACT CONVERTING THE COTABATO FOUNDATION COLLEGE OF SCIENCE AND TECHNOLOGY IN THE MUNICIPALITY OF ARAKAN, PROVINCE OF COTABATO INTO A STATE UNIVERSITY AND APPROPRIATING FUNDS THEREFOR",
      signature: "Local",
      dateFiled: "2025-07-01",
      principal: ["CAOAGDAN, RUDY S., DPA"],
      dateRead: "2025-07-29",
      referral: "HIGHER AND TECHNICAL EDUCATION",
      status:
        "Pending with the Committee on HIGHER R AND TECHNICAL EDUCATION since 2025-07-29",
    },
    {
      billCode: "HB02917",
      title:
        "AN ACT GRANTING A FRANCHISE TO THE COTABATO ELECTRIC COOPERATIVE, INC. TO CONSTRUCT, INSTALL, ESTABLISH, OPERATE, OWN, MANAGE AND MAINTAIN DISTRIBUTION SYSTEMS FOR THE CONVEYANCE OF ELECTRIC POWER TO THE END-USERS IN THE CITY OF KIDAPAWAN AND MUNICIPALITIES OF ANTIPAS, ARAKAN, BANISILAN, CARMEN, KABACAN, MAGPET, MAKILALA, MATALAM, MLANG, PRESIDENT ROXAS AND TULUNAN, PROVINCE OF COTABATO",
      signature: "Local",
      dateFiled: "2025-07-01",
      principal: [
        "CAOAGDAN, RUDY S., DPA",
        "DAGOOC, SERGIO C",
        "DE JESUS, PRESLEY C.",
      ],
      dateRead: "2025-07-29",
      referral: "HIGHER AND TECHNICAL EDUCATION",
      status:
        "Pending with the Committee on HIGHER R AND TECHNICAL EDUCATION since 2025-07-29",
    },
  ];

  return (
    <div className="px-[5%] flex flex-col gap-10 md:gap-20">
      <div>
        <p className="text-[1.5rem] md:text-[2.313rem] text-[#4e3100] font-bold">
          Bills
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
          <div className="flex gap-4 md:gap-8 items-center">
            <input
              className="border-b-2 border-[#00000061] text-[1rem] md:text-[1.5rem] lg:text-[2.063rem] flex-1 md:flex-none"
              type="text"
              placeholder="Bill No, Title, or Keyword"
            />
            <button className="bg-white px-3 md:px-4 py-1 rounded-[17px] border-1 border-black cursor-pointer">
              <p className="text-[#4e3100] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]">
                <IoIosSearch />
              </p>
            </button>
          </div>
          <div className="flex py-1 px-4 gap-10 items-center border-1 border-[#5d5d5d] text-[1.25rem] md:text-[1.563rem] cursor-pointer w-fit">
            <p>5</p>
            <p>
              <SlArrowDown />
            </p>
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-6 md:gap-10">
        {bills.map((bill, index) => (
          <li
            key={index}
            className="bg-[#fff9df] font-times p-5 md:p-10 pb-4 md:pb-5 flex flex-col gap-4 md:gap-5"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
              <button
                className="rounded-3xl border-1 border-black px-4 py-2 text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#4e3100] font-bold cursor-pointer w-fit"
                onClick={() =>
                  navigate(`/legislative/${bill.billCode}`, {
                    state: { bill, bills },
                  })
                }
              >
                {bill.billCode}
              </button>
              <h4 className="text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-[#4e3100] font-bold">
                {bill.title}
              </h4>
            </div>

            <div className="text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] text-[#545454]">
              <p>Signature: {bill.signature}</p>
              <p>Date Filed: {bill.dateFiled}</p>
              <p>Principal Author(s): {bill.principal.join(", ")}</p>
              <p>Date Read: {bill.dateRead}</p>
              <p>Primary Referral: {bill.referral}</p>
              <p>Bill Status: {bill.status}</p>
            </div>
            <div className="flex items-center cursor-pointer gap-3">
              <img src={logo} alt="" className="w-[1.25rem] md:w-[1.5rem]" />
              <p className="text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] text-[#4e3100] font-bold">
                Text as Filed
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bills;
