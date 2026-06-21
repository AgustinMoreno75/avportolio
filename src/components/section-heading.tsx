import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="kicker">{eyebrow}</p>
      <h2 className="mt-5 text-[2.6rem] leading-[1.02] sm:text-[3.5rem] lg:text-[4.5rem]">
        {title}
      </h2>
      {description ? <p className="editorial-lead mt-6">{description}</p> : null}
    </div>
  );
}