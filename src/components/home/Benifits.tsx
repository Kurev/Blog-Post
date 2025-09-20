

interface BenifitsProps {
    title: React.ReactNode;
    color: string;
}

const Benifits = () => {
    const benefits:BenifitsProps[] = [
        { 
            title: <>Education <br/> for AlL</>,
            color: "bg-black"
        },
        {
            title: <>Agricultural & <br/> Rural <br/> Development</>,
            color: "bg-[#999582]"
        },
        {
            title: <>Good <br/> Governance & <br/> Public Service</>,
            color: "bg-[#cda26f]"
        },

    ]
  return (
    <div>
        <ul className="grid grid-cols-3">
            {benefits.map((name, index) => (
                <li className={`${name.color} px-10 py-12 flex items-center justify-center text-white font-times text-[1.513rem]`} key={index}>{name.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Benifits