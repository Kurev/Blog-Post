interface SectorData {
  title: string;
  description: string;
}

const Sector = () => {
  const sectors: SectorData[] = [
    {
      title: "Education",
      description:
        "Through scholarship programs, classroom construction, and learning material distribution, students from remote communities are gaining better access to quality education and opportunities for a brighter future.",
    },
    {
      title: "Agriculture",
      description:
        "Support for local farmers continues through farm-to-market roads, seed and fertilizer distribution, and training programs that improve productivity and sustainability across Makilala’s agricultural sector.",
    },
    {
      title: "Infrastructure",
      description:
        "Road development, water systems, and public facilities have been established to connect communities, enhance accessibility, and promote long-term economic growth throughout the region.",
    },
  ];

  return (
    <div className="bg-[#fff9e6] px-[5%] py-15 font-times">
      <h2 className="text-3xl md:text-[3.5rem] font-bold mb-10">
        Sector Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {sectors.map((sector: SectorData, index: number) => (
          <div key={index} className="text-[#5d4102]">
            <h3 className="text-[2.688rem] font-bold mb-2">{sector.title}</h3>
            <p className="text-[1.563rem]">{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sector;
