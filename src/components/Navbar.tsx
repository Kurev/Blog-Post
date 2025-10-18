import { Link } from "react-router-dom";

interface LinkTypes {
  name: string;
  link: string;
}

const Navbar = () => {
  const links: LinkTypes[] = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "LEGISLATIVE",
      link: "/legislative",
    },
    {
      name: "PROJECTS",
      link: "/projects",
    },
    {
      name: "NEWS & UPDATES",
      link: "/news",
    },
    {
      name: "LIVES TOUCHED",
      link: "/livesTouched",
    },
    {
      name: "CONTACT US",
      link: "/contact",
    },
  ];

  return (
    <nav className="w-full flex justify-between py-4 px-[2%] bg-[#cda26f] font-times sticky top-0 z-20">
      <p>HON. RUDY S. CAOAGDAN, DPA</p>
      <ul className=" flex gap-10">
        {links.map((link, index) => (
          <Link to={link.link}>
            <li className="cursor- text-sm" key={index}>
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
