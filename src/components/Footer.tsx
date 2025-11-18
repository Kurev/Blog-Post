import { FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

interface FooterProps {
  name: string;
}

const Footer = () => {
  const mainLinks: FooterProps[] = [
    { name: "HOME" },
    { name: "ABOUT US" },
    { name: "LEGISLATIVE" },
    { name: "SERVICES" },
  ];

  const extraLinks: FooterProps[] = [
    { name: "NEWS & UPDATES" },
    { name: "LIVES TOUCHED" },
    { name: "CONTACT US" },
  ];

  return (
    <div className="bg-[#ede8d0] font-times py-6 md:py-8">
      <div className="bg-[#ede8d0] text-[#5d4102] flex flex-col md:flex-row justify-between px-[5%] pb-7 gap-8 md:gap-4">
        {/* Logo/Title */}
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-xl lg:text-[1.313rem] text-[#5d4102] font-bold">
            HON. RUDY S. CAOAGDAN, DPA
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[10rem] text-center md:text-left">
            <div>
              <p className="font-bold mb-2">NAVIGATION</p>
              <ul className="space-y-1">
                {mainLinks.map((list, index) => (
                  <li key={index} className="text-sm md:text-base">
                    {list.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="md:translate-y-8">
                <ul className="space-y-1">
                  {extraLinks.map((list, index) => (
                    <li key={index} className="text-sm md:text-base">
                      {list.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start items-start">
          <div>
            <FaFacebook size={48} className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5d4102] rounded-full flex justify-center items-center">
            <TfiEmail size={20} className="md:w-6 md:h-6" color="white" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-4">
        <span className="flex justify-center text-center font-light text-sm md:text-base lg:text-[1.188rem] text-[#5d4102]">
          © 2025 Office of Congressman Rudy S. Caoagdan. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
