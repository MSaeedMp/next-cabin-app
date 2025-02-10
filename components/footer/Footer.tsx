import UsefulLinksTable from "./UsefulLinksTable";
import UsefulLinksAccordion from "./UsefulLinksAccordion";
import CopyRight from "./CopyRight";
import SocialMediaLinks from "./SocialMediaLinks";
import Container from "../layout/Container";
import { cn } from "@/lib/utils";

const Footer = ({ bgColor }: { bgColor?: string }) => {
  return (
    <div
      className={cn(
        "p-10  mt-14 text-stone-50 flex flex-col justify-between",
        bgColor
          ? bgColor
          : "bg-gradient-to-br from-primary via-blue-800 to-blue-700"
      )}
    >
      <Container>
        <UsefulLinksTable />
        <UsefulLinksAccordion />
        <div className="flex-col md:border-t md:border-stone-300 pt-4 md:flex-row flex md:justify-between items-center gap-4 mt-10 md:mt-14">
          <SocialMediaLinks />
          <CopyRight />
        </div>
      </Container>
    </div>
  );
};
export default Footer;
