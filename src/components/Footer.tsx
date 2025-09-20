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
    <div className="bg-[#ede8d0] font-times py-[1.5rem]">
      <div className="bg-[#ede8d0] text-[#5d4102] flex justify-between px-[5%] pb-7">
        <div>
          <h1 className="text-[1.313rem] text-[#5d4102] font-bold">
            HON. RUDY S. CAOAGDAN, DPA
          </h1>
        </div>
        <div className="flex gap-[10rem]">
          <div>
            <p className="font-bold mb-2">NAVIGATION</p>
            <ul>
              {mainLinks.map((list, index) => (
                <li key={index}>{list.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="translate-y-8">
              <ul>
                {extraLinks.map((list, index) => (
                  <li key={index}>{list.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-[3rem] h-[3rem] bg-[#38330f] rounded-full"></div>
          <div className="w-[3rem] h-[3rem] bg-[#38330f] rounded-full"></div>
        </div>
      </div>
      <div>
        <span className="flex justify-center font-light text-[1.188rem] text-[#5d4102]">© 2025 Office of Congressman Rudy S. Caoagdan. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
