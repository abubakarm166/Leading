import { TCaseStudy } from "@/types";
import { listCaseStudies } from "@/utils/api/caseStudy";
import { useEffectAsync } from "@/utils/hooks";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

const CaseStudiesCarousel = () => {
  const [caseStudies, setCaseStudies] = useState<TCaseStudy[]>([]);

  const sliderRef = useRef<Slider>(null);

  useEffectAsync(async () => {
    const res = await listCaseStudies();
    setCaseStudies(res);
  }, []);

  return (
    <div>
      {caseStudies?.length > 0 && (
        <Slider
          ref={sliderRef}
          slidesToShow={3}
          slidesToScroll={1}
          dots={false}
          infinite={false}
          arrows={false}
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
          {caseStudies?.map((item) => (
            <div
              className="max-w-[90%] 2xl:max-w-[80%] h-[400px] rounded-[20px] relative overflow-hidden cursor-pointer"
              key={item.id}
            >
              <Image
                src={item.img}
                width={200}
                height={200}
                alt={item.location}
                className="w-full h-full object-cover rounded-[20px]"
              />
              <div className="bg-primary-bg rounded-[10px] flex flex-col space-y-[5px] p-5 absolute bottom-12 2xl:bottom-5 left-1/2 -translate-x-1/2 w-[80%]">
                <div className="flex flex-row items-center space-x-10 text-[16px]">
                  <p className="w-[30%]">Location</p>
                  <p>:</p>
                  <p className="text-primary">{item.location}</p>
                </div>
                <div className="flex flex-row items-center space-x-10 text-[16px]">
                  <p className="w-[30%]">Value of Loan</p>
                  <p>:</p>
                  <p className="text-primary">{item.loan}</p>
                </div>
                <div className="flex flex-row items-center space-x-10 text-[16px]">
                  <p className="w-[30%]">LTV</p>
                  <p>:</p>
                  <p className="text-primary">{item.ltv}%</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <div className="flex flex-row items-center justify-end space-x-2 mt-5">
        <Image
          src="/svg/chevron-left-black.svg"
          width={40}
          height={40}
          alt="chevron-left"
          className="w-10 h-10 cursor-pointer"
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <Image
          src="/svg/chevron-right-black.svg"
          width={40}
          height={40}
          alt="chevron-right"
          className="w-10 h-10 cursor-pointer"
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
    </div>
  );
};

export default CaseStudiesCarousel;
