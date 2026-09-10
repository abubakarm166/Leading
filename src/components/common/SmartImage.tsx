import Image, { type ImageProps } from "next/image";

/**
 * Next.js image optimizer can serve local GIFs with
 * `Content-Disposition: attachment`, which breaks <img> display.
 * GIFs also should stay unoptimized to preserve animation.
 */
const SmartImage = (props: ImageProps) => {
  const src = typeof props.src === "string" ? props.src : "";
  const isGif = /\.gif($|\?)/i.test(src);

  return <Image {...props} unoptimized={props.unoptimized ?? isGif} />;
};

export default SmartImage;
