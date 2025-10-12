import { FaRegFolderOpen, FaGraduationCap } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

interface LocationProps {
  icon: React.ReactNode;
  title: string;
}

const Location = () => {
  const stat: LocationProps[] = [
    { icon: <FaRegFolderOpen />, title: "87 Projects" },
    { icon: <FaGraduationCap />, title: "6000+ Scholar Graduates" },
    { icon: <IoPeopleSharp />, title: "38 Barangays" },
    { icon: <FaCalendarAlt />, title: "2010-2025" },
  ];

  return (
    <div className="w-full bg-[#5d4102] py-16 px-[5%]">
      <div className="flex flex-col md:flex-row items-stretch justify-center py-7 px-10 bg-[#fff9df] rounded-lg overflow-hidden shadow-lg gap-[5rem]">
        {/* STATS */}
        <div className="font-times flex-1 flex flex-col justify-between gap-4">
          <p className="text-[1.625rem] font-bold text-[#5d4102]">
            QUICK STATS
          </p>
          <ul className="px-8">
            {stat.map((name, index) => (
              <li
                key={index}
                className="flex items-center gap-3 my-3 text-[#5d4102] text-lg"
              >
                <i className="text-[2rem]">{name.icon}</i>
                <span>{name.title}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <select
                className="border-1 border-[#6b4b25] py-2 px-6 text-[1.5rem] text-[#5d4102] font-bold"
                name="Barangay"
                id=""
              >
                <option value="">Select Barangay</option>
              </select>
              <select
                className="border-1 border-[#6b4b25] py-2 px-6 text-[1.5rem] text-[#5d4102] font-bold"
                name="Year"
                id=""
              >
                <option value="">Select Year</option>
              </select>
            </div>

            <span className="text-[1.188rem] text-[#5d4102]">
              Click a pin on the map to learn more about each project.
            </span>
          </div>
        </div>

        {/* MAP */}
        <div className="flex-2">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.2068691603745!2d124.23265150228453!3d7.197392483051096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256398cf97623d5%3A0xaf4103351bc2fc84!2sCotabato%20City%20Hall!5e1!3m2!1sen!2sph!4v1760100114012!5m2!1sen!2sph"
            className="w-full h-full min-h-[250px] md:min-h-[150px] rounded-md border-4 border-white"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
