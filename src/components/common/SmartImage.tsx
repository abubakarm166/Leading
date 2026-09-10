import Image, { type ImageProps } from "next/image";

/**
 * Next.js image optimizer can serve local GIFs with
 * `Content-Disposition: attachment`, which breaks <img> display.
 * GIFs also should stay unoptimized to preserve animation.
 */
const SmartImage = ({
  alt = "",
  unoptimized,
  ...props
}: ImageProps) => {
  const src = typeof props.src === "string" ? props.src : "";
  const isGif = /\.gif($|\?)/i.test(src);

  return (
    <Image
      {...props}
      alt={alt}
      unoptimized={unoptimized ?? isGif}
    />
  );
};

export default SmartImage;
