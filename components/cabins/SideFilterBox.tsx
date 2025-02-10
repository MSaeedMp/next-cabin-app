import BudgetFilter from "./BudgetFilter";
import FacilityFilter from "./FacilityFilter";
import TypeFilter from "./TypeFIlter";
import FilterArea from "./FilterArea";

const filters = [
  {
    heading: "Cabin facility",
    component: <FacilityFilter />,
  },
  {
    heading: "Your budget (per night)",
    component: <BudgetFilter />,
  },
  {
    heading: "Cabin type",
    component: <TypeFilter />,
  },
];

const SideFilterBox = () => {
  return (
    <aside className="md:flex md:flex-col hidden  mt-6 min-w-[250px]">
      <div className="border rounded-lg pb-4">
        <h3 className="font-bold text-lg border-b p-2">Filter by:</h3>
        <div>
          {filters.map(({ heading, component }, index) => (
            <FilterArea
              key={heading}
              heading={heading}
              isLast={index === filters.length - 1}
            >
              {component}
            </FilterArea>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideFilterBox;
