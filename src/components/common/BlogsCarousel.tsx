"use client";
import { TBlog } from "@/types";
import { listBlogs } from "@/utils/api/blogs";
import { useEffectAsync } from "@/utils/hooks";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Slider from "react-slick";

interface Props {
  slidesToShow?: number;
}

const BlogsCarousel: React.FC<Props> = ({ slidesToShow = 3 }) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<Slider>(null);

  const router = useRouter();

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= blogs?.length - slidesToShow;

  useEffectAsync(async () => {
    const res = await listBlogs();
    setBlogs(res);
  }, []);

  return (
    <div className="w-full">
      {blogs?.length > 0 && (
        <Slider
          ref={sliderRef}
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
          ]}
        >
          {blogs?.map((item) => (
            <div
              key={item.id}
              className="max-w-full lg:max-w-[90%] 2xl:max-w-[80%] h-[480px] bg-white rounded-[20px] overflow-hidden cursor-pointer relative"
              onClick={() => router.push(`/blogs/${item.slug || item.id}`)}
            >
              <img
                src={item.img}
                width={200}
                height={200}
                alt={item.title}
                className="w-full h-[190px] object-cover object-top-right"
              />
              <div className="p-5">
                <p className="font-semibold text-[20px] font-league-spartan">
                  {item.title?.length > 50 ? `${item.title?.slice(0, 50)}...` : item.title}
                </p>
                <p className="text-[#7D7C7C] mt-[10px] mb-5 text-[16px]">{moment(item.createdAt).format("MMM-DD-YYYY")}</p>
                <p
                  className="font-gilroy-regular text-[16px]"
                  dangerouslySetInnerHTML={{
                    __html: item.content.length > 80 ? `${item.content.slice(0, 80)}...` : item.content,
                  }}
                />
                <p className="absolute bottom-5 left-5 font-gilroy-medium text-[16px]">Read More...</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <div className="flex flex-row items-center justify-end space-x-2 mt-5">
        <Image
          src="/svg/chevron-left-white.svg"
          width={40}
          height={40}
          alt="chevron-left"
          className={`w-10 h-10 ${isAtStart ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <Image
          src="/svg/chevron-right-white.svg"
          width={40}
          height={40}
          alt="chevron-right"
          className={`w-10 h-10 ${isAtEnd ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
    </div>
  );
};

export default BlogsCarousel;
