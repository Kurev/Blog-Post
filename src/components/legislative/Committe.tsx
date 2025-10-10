interface CommitteeProps {
  id: number;
  committee: string;
  position: string;
  journalNo: string;
}

const CollapsedTable = () => {
  const committeeList: CommitteeProps[] = [
    { id: 1, committee: "AGRICULTURE AND FOOD", position: "Member of the Majority", journalNo: "006" },
    { id: 2, committee: "FOOD SECURITY", position: "Member of the Majority", journalNo: "006" },
    { id: 3, committee: "HIGHER AND TECHNICAL EDUCATION", position: "Member of the Majority", journalNo: "005" },
    { id: 4, committee: "INDIGENOUS CULTURAL COMMUNITIES AND INDIGENOUS PEOPLES", position: "Member of the Majority", journalNo: "005" },
    { id: 5, committee: "NATIONAL DEFENSE AND SECURITY", position: "Member of the Majority", journalNo: "005" },
    { id: 6, committee: "SCIENCE AND TECHNOLOGY", position: "Member of the Majority", journalNo: "007" },
    { id: 7, committee: "TOURISM", position: "Member of the Majority", journalNo: "005" },
    { id: 8, committee: "VETERANS AFFAIRS AND WELFARE", position: "Chairperson", journalNo: "003" },
  ];

  return (
    <div className="px-[5%] py-[4rem] text-[#4e3100] font-times">
      <table className="w-full border border-black border-collapse text-left">
        <thead >
          <tr className="text-[1.438rem]">
            <th className="border-2 border-[#c8c3a9] px-3 py-2 w-[5%]"></th>
            <th className="border-2 border-[#c8c3a9] px-3 py-2 font-normal">Committee</th>
            <th className="border-2 border-[#c8c3a9] px-3 py-2 font-normal">Position</th>
            <th className="border-2 border-[#c8c3a9] px-3 py-2"></th>
          </tr>
        </thead>

        <tbody className="text-[1.438rem]">
          {committeeList.map((item) => (
            <tr key={item.id} >
              <td className="border-2 border-[#c8c3a9] px-3 py-2 font-semibold">{item.id}</td>
              <td className="border-2 border-[#c8c3a9] px-3 py-2">{item.committee}</td>
              <td className="border-2 border-[#c8c3a9] px-3 py-2">{item.position}</td>
              <td className="border-2 border-[#c8c3a9] px-3 py-2">Journal No. {item.journalNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollapsedTable;
