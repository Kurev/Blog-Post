import img1 from "../../assets/2.webp";
import img2 from "../../assets/3.webp";

interface BenifitsProps {
  title: React.ReactNode;
  color: string;
  imgs?: string;
}

const Benifits = () => {
  const benefits: BenifitsProps[] = [
    {
      title: (
        <>
          Education
        </>
      ),
      color: "bg-black",
      imgs: img1,
    },
    {
      title: (
        <>
          Agricultural & <br /> Rural <br /> Development
        </>
      ),
      color: "bg-[#999582]",
      imgs: img2,
    },
    {
      title: (
        <>
          Good <br /> Governance
        </>
      ),
      color: "bg-[#cda26f]",
    },
  ];
  return (
    <div>
      <ul className="grid grid-cols-3">
        {benefits.map((name, index) => (
          <li
            key={index}
            className={`${name.color} px-10 py-12 flex items-center justify-center text-white bg-cover bg-center aspect-[2/1] font-times text-[1.513rem] bg-blend-multiply`}
            style={{
              backgroundImage: name.imgs ? `url(${name.imgs})` : "none",
              backgroundColor: "#cda26f",
            }}
          >
            {name.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benifits;
