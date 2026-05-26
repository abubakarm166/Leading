"use client";
import { TBlog } from "@/types";
import { listBlogs } from "@/utils/api/blogs";
import { stripHtmlToPlainText, truncatePlainText } from "@/utils/helpers";
import { useEffectAsync } from "@/utils/hooks";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Slider from "react-slick";

interface Props {
  slidesToShow?: number;
  arrowTheme?: "light" | "dark";
}

const BlogsCarousel: React.FC<Props> = ({
  slidesToShow = 3,
  arrowTheme = "dark",
}) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<Slider>(null);

  const router = useRouter();

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= blogs?.length - slidesToShow;
  const leftChevronSrc =
    arrowTheme === "light"
      ? "/svg/chevron-left-white.svg"
      : "/svg/chevron-left-black.svg";
  const rightChevronSrc =
    arrowTheme === "light"
      ? "/svg/chevron-right-white.svg"
      : "/svg/chevron-right-black.svg";

  useEffectAsync(async () => {
    const res = await listBlogs();
    setBlogs(res);
  }, []);

  return (
    <div className="w-full min-w-0">
      {blogs?.length > 0 && (
        <Slider
          ref={sliderRef}
          className="blogs-carousel -mx-1 sm:-mx-1.5"
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          dots={false}
          infinite={false}
          arrows={false}
          beforeChange={(_, next) => setCurrentSlide(next)}
          responsive={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {blogs?.map((item) => (
            <div key={item.id} className="box-border px-1 sm:px-1.5">
              <div
                className="flex h-[520px] w-full flex-col bg-white rounded-[20px] overflow-hidden cursor-pointer relative"
                onClick={() => router.push(`/blogs/${item.slug || item.id}`)}
              >
              <div className="relative h-[240px] w-full shrink-0 bg-[#142954]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 500px) 100vw, (max-width: 1025px) 50vw, 30vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 pb-14">
                <p className="font-semibold text-[20px] font-league-spartan">
                  {item.title?.length > 50
                    ? `${item.title?.slice(0, 50)}...`
                    : item.title}
                </p>
                <p className="text-[#7D7C7C] mt-[10px] mb-5 text-[16px]">
                  {moment(item.createdAt).format("MMM-DD-YYYY")}
                </p>
                <p className="font-gilroy-regular text-[16px]">
                  {truncatePlainText(stripHtmlToPlainText(item.content), 80)}
                </p>
                <p className="absolute bottom-5 left-5 font-gilroy-medium text-[16px]">
                  Read More...
                </p>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <div className="flex flex-row items-center justify-end space-x-2 mt-5">
        <Image
          src={leftChevronSrc}
          width={40}
          height={40}
          alt="chevron-left"
          className={`w-10 h-10 ${
            isAtStart
              ? "opacity-20 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <Image
          src={rightChevronSrc}
          width={40}
          height={40}
          alt="chevron-right"
          className={`w-10 h-10 ${
            isAtEnd
              ? "opacity-20 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
    </div>
  );
};

export default BlogsCarousel;
