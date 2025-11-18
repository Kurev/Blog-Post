import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaInfoCircle, FaNewspaper, FaPhone } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

interface LinkTypes {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const Navbar = () => {
  const links: LinkTypes[] = [
    { name: "HOME", link: "/", icon: <IoMdHome /> },
    { name: "ABOUT", link: "/about", icon: <FaInfoCircle /> },
    { name: "LEGISLATIVE", link: "/legislative", icon: <IoDocumentText /> },
    { name: "PROJECTS", link: "/projects", icon: <MdWork /> },
    { name: "NEWS & UPDATES", link: "/news", icon: <FaNewspaper /> },
    { name: "LIVES TOUCHED", link: "/livesTouched", icon: <FaHeart /> },
    { name: "CONTACT US", link: "/contact", icon: <FaPhone /> },
  ];

  const [openModal, setOpenModal] = useState<Boolean>(false);

  return (
    
    <nav className="w-full sticky top-0 z-50">
      <div className="w-full flex items-center justify-between py-4 px-[5%] md:px-[3%] lg:px-[2%] bg-[#cda26f] font-times relative z-10">
        <h1 className="md:text-[1vw] lg:text-[1vw] xl:text-sm">
          HON. RUDY S. CAOAGDAN, DPA
        </h1>

        <ul className="flex gap-5 lg:gap-10 items-center">
          {links.map((link, index) => (
            <Link to={link.link} key={index}>
              <li className="cursor-pointer md:text-[1vw] xl:text-sm max-md:hidden">
                {link.name}
              </li>
            </Link>
          ))}

          {/* Mobile Button with Icon */}
          <button className="md:hidden text-xl" onClick={() => setOpenModal(!openModal)}>
            {openModal ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </ul>
      </div>

      {/* MOBILE NAV */}
      {openModal && (
        <motion.div
           className="absolute top-full left-0 w-full bg-[#e5d9ce] px-6 py-4 flex flex-col gap-4 md:hidden z-0"
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {links.map((items, index) => (
            <Link
              key={index}
              to={items.link}
              onClick={() => setOpenModal(false)}
            >
              <div className="flex items-center gap-5 font-times">
                <span className="text-[#573a1d] text-lg">{items.icon}</span>
                <p className="text-[#000000] text-base">{items.name}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;