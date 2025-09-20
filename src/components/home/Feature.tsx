interface FeatureProps {
  title: string;
  description: string;
}

const Feature = () => {
  const features: FeatureProps[] = [
    {
      title: "Strengthening Partnerships",
      description:
        "PRDP PSO Mindanao leaders paid a courtesy visit to Congressman Rudy S. Caoagdan to align programs and boost support for Cotabato’s 2nd District.",
    },
    {
      title: "Expanding CSR",
      description:
        "Congressman Rudy S. Caoagdan urged EDC to widen its CSR efforts, particularly in education, to aid more communities in Cotabato’s 2nd District.",
    },
    {
      title: "Tree Planting",
      description:
        "Congressman Rudy S. Caoagdan’s office joined EDC’s tree planting in Mt. Apo to help preserve forests and protect endangered species.",
    },
  ];

  return (
    <div className="font-times py-30 px-[5%]">
      <div className="flex items-center justify-center w-full mb-10">
        <p className="text-[2.438rem] font-semibold">Featured Projects</p>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#fff9df] max-w-[20rem] mx-auto">
            <div className="bg-[#e6c189] w-full h-[10rem]"></div>
            <div className="px-3">
              <p className="text-[1.175rem] py-3 font-semibold">
                {feature.title}
              </p>
              <p className="text-[#273b6f] text-[0.881rem] text-justify">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
