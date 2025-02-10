import { linksGroup } from "@/utils/constants";
import Logo from "../header/Logo";

const UsefulLinksTable = () => {
  return (
    <div className="hidden lg:grid grid-cols-4 py-6 capitalize">
      <div className="self-start">
        <Logo type="white" />
      </div>
      {linksGroup.map((gp) => {
        return (
          <div key={gp.title}>
            <ul className="flex-col gap-2 flex px-4">
              <li className="font-semibold mb-6">{gp.title}</li>
              {gp.subTitles.map((sb) => (
                <li
                  className="text-stone-200 hover:text-stone-100 cursor-pointer"
                  key={sb}
                >
                  {sb}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default UsefulLinksTable;
