import { cn } from "@/utils/helpers";

type Props = {
  html: string;
  className?: string;
};

/** Renders product copy that may include inline links (e.g. Bridging Loans). */
const ProductContentHtml = ({ html, className }: Props) => {
  if (!html) return null;

  return (
    <div
      className={cn(
        "font-gilroy-regular leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-[3px] [&_u]:underline",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ProductContentHtml;
