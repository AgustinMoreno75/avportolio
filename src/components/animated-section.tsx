"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 20,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}