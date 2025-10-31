import { TCaseStudy } from "@/types";
import { listCaseStudies } from "@/utils/api/caseStudy";
import { useEffectAsync } from "@/utils/hooks";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import CaseStudiesModal from "../CaseStudies/CaseStudiesModal";
import { useRouter } from "next/navigation";

const CastStudyItem = ({ item, openViewMoreModal }: { item: TCaseStudy; openViewMoreModal: (item: TCaseStudy) => void }) => {
  const router = useRouter();

  const formattedContent = useMemo(() => {
    if (item && item?.description) {
      return item.description.replace(/<p><\/p>/g, "");
    }

    return "";
  }, [item]);

  return (
    <div className="max-w-full lg:max-w-[90%] h-[535px] rounded-[10px] overflow-hidden border border-black relative mr-2">
      <Image
        src={item.img}
        width={500}
        height={500}
        alt="case-study"
        className="w-full h-[200px] object-cover object-top-right"
      />
      <div className="bg-primary-bg overflow-hidden w-full h-[65%] border-t border-t-black rounded-t-[10px] px-4 md:px-5 py-5 flex flex-col gap-y-1">
        <div className="flex flex-row items-center">
          <p className="font-gilroy-bold text-[18px] w-[40%]">Location</p>
          <p className="w-[15%]">:</p>
          <p className="font-gilroy-regular text-[18px] text-primary">
            {item?.location?.length > 10 ? `${item?.location?.slice(0, 10)}...` : item?.location}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <p className="font-gilroy-bold text-[18px] w-[40%]">Value of loan</p>
          <p className="w-[15%]">:</p>
          <p className="font-gilroy-regular text-[18px] text-primary">
            {new Intl.NumberFormat("en-us").format(Number(item?.loan || 0))}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <p className="font-gilroy-bold text-[18px] w-[40%]">LTV</p>
          <p className="w-[15%]">:</p>
          <p className="font-gilroy-regular text-[18px] text-primary">{item?.ltv}%</p>
        </div>
        {item?.propertyType && (
          <div className="flex flex-row items-center">
            <p className="font-gilroy-bold text-[18px] w-[40%]">Property Type</p>
            <p className="w-[15%]">:</p>
            <p className="font-gilroy-regular text-[18px] text-primary">{item?.propertyType}</p>
          </div>
        )}
        {item?.dealType && (
          <div className="flex flex-row items-center">
            <p className="font-gilroy-bold text-[18px] w-[40%]">Type of Deal</p>
            <p className="w-[15%]">:</p>
            <p className="font-gilroy-regular text-[18px] text-primary">{item?.dealType}</p>
          </div>
        )}
        {formattedContent.length > 0 ? (
          <div className="flex-1 flex flex-col items-start">
            <p
              className="mt-5 font-gilroy-regular text-[16px]"
              dangerouslySetInnerHTML={{
                __html: `${item?.description?.slice(0, 160)}${item?.description?.length > 160 ? "..." : ""}`,
              }}
            />
            <button
              className="text-primary mt-auto font-gilroy-medium cursor-pointer inline"
              // onClick={() => openViewMoreModal(item)}
              onClick={() => router.push(`/case-studies/${item.slug || item?.id}`)}
            >
              <p>Read More</p>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const CaseStudiesCarousel = () => {
  const [caseStudies, setCaseStudies] = useState<TCaseStudy[]>([]);
  const [activeCaseStudy, setActiveCaseStudy] = useState<TCaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<Slider>(null);

  const handleOpenViewMoreModal = (item: TCaseStudy) => {
    setActiveCaseStudy(item);
    setIsModalOpen(true);
  };

  const slidesToShow = 3;

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= caseStudies?.length - slidesToShow;

  useEffectAsync(async () => {
    const res = await listCaseStudies();
    setCaseStudies(res);
  }, []);

  return (
    <div>
      {caseStudies?.length > 0 && (
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
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {caseStudies?.map((item) => (
            <CastStudyItem key={item.id} item={item} openViewMoreModal={handleOpenViewMoreModal} />
          ))}
        </Slider>
      )}
      <div className="flex flex-row items-center justify-end space-x-2 mt-5">
        <Image
          src="/svg/chevron-left-black.svg"
          width={40}
          height={40}
          alt="chevron-left"
          className={`w-10 h-10 ${isAtStart ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <Image
          src="/svg/chevron-right-black.svg"
          width={40}
          height={40}
          alt="chevron-right"
          className={`w-10 h-10 ${isAtEnd ? "opacity-20 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
          onClick={() => sliderRef.current?.slickNext()}
        />
      </div>
      <CaseStudiesModal isOpen={isModalOpen} activeCaseStudy={activeCaseStudy} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CaseStudiesCarousel;
