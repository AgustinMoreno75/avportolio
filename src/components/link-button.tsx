import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors",
        variant === "primary"
          ? "border-foreground bg-foreground text-background hover:bg-[#1f1f1f]"
          : "border-border bg-white text-foreground hover:bg-secondary",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-4" />
    </Link>
  );
}