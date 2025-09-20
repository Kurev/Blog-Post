

interface LinkTypes {
  name: string;
}

const Navbar = () => {

  const links: LinkTypes[] = [
    {name: "HOME"},
    {name: "ABOUT"},
    {name: "LEGISLATIVE"},
    {name: "PROJECTS"},
    {name: "LIVES TOUCHED"},
    {name: "CONTACT US"},
  ]


  return (
    <nav className="w-full flex justify-between py-4 px-[2%] bg-[#cda26f] font-times sticky top-0 z-20">
      <p>HON. RUDY S. CAOAGDAN, DPA</p>
      <ul className=" flex gap-10">
        {links.map((link, index) => (
          <li className="cursor- text-sm" key={index}>{link.name}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar