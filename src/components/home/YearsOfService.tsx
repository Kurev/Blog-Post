
const YearsOfService = () => {
  const startYear = 2010; // 👈 adjust this to the actual start year
  const currentYear = new Date().getFullYear();
  const yearsOfService = currentYear - startYear;
  return (
    <div className="bg-[#5d4102]">
        <ul className="grid grid-cols-3 gap-[10rem] text-center font-times text-white">
            <li className="-translate-y-5"><p className="text-[4.8rem] translate-y-10 italic">3</p> <br/> <p className="text-[1.813rem]">BILLS PASSED</p></li>
            <li className="-translate-y-5"><p className="text-[4.8rem] translate-y-10 italic">{yearsOfService}</p> <br/> <p className="text-[1.813rem]">YEARS IN PUBLIC SERVICE</p></li>
            <li className="-translate-y-8"><p className="text-[4.8rem] translate-y-10 italic">50+</p> <br/> <p className="text-[1.813rem]">COMMUNITY PROJECTS <br/> IMPLEMENTED</p></li>
        </ul>
    </div>
  )
}

export default YearsOfService