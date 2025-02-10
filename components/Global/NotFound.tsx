import Image from "next/image";
import Link from "next/link";

const NotFound = ({
  heading,
  subHeading,
  returnMsg,
  returnLink,
}: {
  heading: string;
  subHeading: string;
  returnMsg: string;
  returnLink: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center my-[230px] text-center">
      <div className="relative h-32 lg:w-80 w-52">
        <Image
          src="/logo-blue.png"
          alt="NCabin logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-contain"
        />
      </div>
      <h4 className="font-ebGaramond lg:text-5xl text-4xl">{heading}</h4>
      <p className="text-base font-light text-muted-foreground mt-10 max-w-[300px] lg:max-w-[400px]">
        {subHeading}
      </p>
      <p className="text-base font-light text-muted-foreground mt-5 max-w-[400px]">
        {returnMsg}{" "}
        <Link href={returnLink} className="font-bold">
          here
        </Link>
        .
      </p>
    </div>
  );
};
export default NotFound;
