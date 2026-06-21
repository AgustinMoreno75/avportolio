import Image from "next/image";

import { brandLogo } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  alt?: string;
  priority?: boolean;
};

export function BrandMark({
  className,
  imageClassName,
  alt = "Augusto Valmont logo",
  priority = false,
}: BrandMarkProps) {
  return (
    <div className={cn("relative shrink-0 overflow-hidden", className)}>
      <Image
        src={brandLogo}
        alt={alt}
        priority={priority}
        className={cn("h-full w-full object-contain", imageClassName)}
      />
    </div>
  );
}