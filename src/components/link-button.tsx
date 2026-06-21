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
        "inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm uppercase tracking-[0.2em] transition-colors",
        variant === "primary"
          ? "border-black bg-black text-white hover:bg-zinc-800"
          : "border-border bg-white text-black hover:bg-zinc-50",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-4" />
    </Link>
  );
}