import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-14 text-[2.2rem] leading-[1.02] sm:text-[2.8rem]" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-10 text-[1.65rem] leading-tight sm:text-[2rem]" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc space-y-3 pl-6 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal space-y-3 pl-6 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l border-black pl-6 text-2xl leading-tight text-foreground sm:text-3xl" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-12 border-border" {...props} />
  ),
  a: ({ className, ...props }: AnchorProps) => (
    <a className={["underline decoration-black/25 underline-offset-4 hover:decoration-black", className].filter(Boolean).join(" ")} {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
};