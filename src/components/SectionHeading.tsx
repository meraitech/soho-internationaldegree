import { link } from "fs";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import MyLink from "./ui/my-link";

interface SectionHeadingProps {
  title: string;
  description: string;
  link?: { href: string; label: string };
}

export default function SectionHeading({ title, description, link }: SectionHeadingProps) {
  return (
    <div className="w-full grid md:grid-cols-2 md:gap-6 gap-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium leading-tight">
        {title}
      </h2>
      <div className="flex flex-col max-md:text-sm gap-2">
        <p className="">
          {description}
        </p>
        {link && (
          <MyLink link={link} />
        )}
      </div>
    </div>
  );
}
