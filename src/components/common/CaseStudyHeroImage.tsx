import { cn } from "@/utils/helpers";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** `compact` = small centered hero; `sidebar` = left column on detail page; `full` = full width. */
  size?: "full" | "compact" | "sidebar";
};

/**
 * Case study hero images are often wide collages. Avoid fixed-height object-cover,
 * which crops through gaps between photo rows in the source file.
 */
const CaseStudyHeroImage = ({
  src,
  alt,
  priority,
  className,
  size = "full",
}: Props) => {
  const isCompact = size === "compact";
  const isSidebar = size === "sidebar";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[20px] bg-white",
        isCompact && "mx-auto w-full max-w-[520px] md:max-w-[600px]",
        (isSidebar || size === "full") && "w-full",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={600}
        priority={priority}
        sizes={
          isSidebar
            ? "(max-width: 1024px) 100vw, 480px"
            : isCompact
              ? "(max-width: 768px) 90vw, 600px"
              : "(max-width: 1280px) 100vw, 1180px"
        }
        className={cn(
          "h-auto w-full rounded-[20px] object-contain object-center",
          isCompact && "max-h-[160px] sm:max-h-[200px] md:max-h-[220px]",
          isSidebar && "max-h-[200px] sm:max-h-[240px] lg:max-h-none"
        )}
      />
    </div>
  );
};

export default CaseStudyHeroImage;
