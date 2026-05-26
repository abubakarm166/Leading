"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

type MockInsight = {
  id: number;
  cardTitle: string;
  dateLabel: string;
  excerpt: string;
  /** Pre-designed hero graphic (logo, titles, author in artwork). Renders full-bleed. */
  heroThumbnailSrc?: string;
  /** Built-in hero when no thumbnail — headline, author, portrait on the right */
  heroHeadline?: string;
  author?: string;
  portraitSrc?: string;
};

const MOCK_INSIGHTS: MockInsight[] = [
  {
    id: 1,
    heroThumbnailSrc: "/testing/insight-vikas-singh.png",
    cardTitle: "The Role and Value of Bridge Lending",
    dateLabel: "May-08-2026",
    excerpt:
      "How bridge lending supports complex property transactions — and why speed and certainty matter when timelines, chains, and funding structures do not line up.",
  },
  {
    id: 2,
    heroThumbnailSrc: "/testing/insight-lukas-mackevicius.png",
    cardTitle:
      "Behind the Bridge: Real Case Studies Showing Our Problem-Solving in Action",
    dateLabel: "May-08-2026",
    excerpt:
      "How bridge lending delivers fast, flexible solutions no matter the deal’s complexity — with real examples of how we structure lending around the problem.",
  },
  {
    id: 3,
    heroHeadline:
      "Specialist Auction Bridging Finance for Property Professionals",
    author: "Timothy Amour",
    portraitSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&q=80",
    cardTitle: "Specialist Auction Bridging Finance for Property Professionals",
    dateLabel: "Feb-23-2026",
    excerpt:
      "Auction purchases demand certainty of funds. Specialist bridging products align completion dates with hammer fall so professionals can bid with confidence.",
  },
];

const truncateTitle = (title: string, max = 50) =>
  title.length > max ? `${title.slice(0, max)}...` : title;

const truncateExcerpt = (text: string, max = 95) =>
  text.length > max ? `${text.slice(0, max)}...` : text;

function useResponsiveSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 500) setSlidesToShow(1);
      else if (w < 1025) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slidesToShow;
}

const LatestInsightsTestingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const responsiveSlides = useResponsiveSlidesToShow();
  const count = MOCK_INSIGHTS.length;

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= Math.max(0, count - responsiveSlides);

  return (
    <section className="relative w-screen overflow-x-hidden bg-[#142954] px-5 py-10 sm:px-6 lg:px-8 2xl:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#21558a]/35 via-transparent to-[#0a1628]/90"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
        <div className="mb-5 flex w-full shrink-0 flex-row items-center lg:mb-0 lg:max-w-[220px] lg:flex-col lg:items-start xl:max-w-[260px]">
          <Image
            src="/svg/calendar.svg"
            width={200}
            height={200}
            alt=""
            className="hidden h-[100px] w-[100px] shrink-0 object-cover lg:block lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px]"
          />
          <h2 className="mx-auto text-center font-league-spartan text-[40px] font-bold text-white sm:text-[48px] lg:mx-0 lg:mt-4 lg:text-left lg:text-[50px] xl:text-[55px]">
            Latest
            <br className="hidden lg:block" /> Insights
          </h2>
        </div>

        <div className="min-w-0 w-full flex-1">
          <div className="w-full min-w-0">
            <Slider
              ref={sliderRef}
              className="blogs-carousel -mx-1 sm:-mx-1.5"
              slidesToShow={3}
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
              {MOCK_INSIGHTS.map((item) => (
                <div key={item.id} className="box-border px-1 sm:px-1.5">
                  <article className="relative flex h-[520px] w-full cursor-pointer flex-col overflow-hidden rounded-[20px] bg-white">
                    <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-t-[20px] bg-[#1a2f4a]">
                      {item.heroThumbnailSrc ? (
                        <Image
                          src={item.heroThumbnailSrc}
                          alt={item.cardTitle}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 500px) 100vw, (max-width: 1025px) 50vw, 33vw"
                        />
                      ) : (
                        <>
                          <div
                            className="absolute inset-0 opacity-90"
                            aria-hidden
                            style={{
                              background:
                                "linear-gradient(135deg, #2563eb22 0%, transparent 45%, #0c1929 100%)",
                            }}
                          />
                          <div
                            className="absolute -right-4 top-0 h-[120%] w-[55%] skew-x-[-14deg] bg-[#3b82f6]/25"
                            aria-hidden
                          />
                          <div
                            className="absolute -left-8 bottom-0 h-[70%] w-[40%] skew-x-[12deg] bg-[#1e40af]/35"
                            aria-hidden
                          />

                          <div className="relative z-10 flex h-full items-stretch pl-4 pr-0 pt-4 sm:pl-5 sm:pt-5">
                            <div className="flex min-w-0 flex-1 flex-col pr-2">
                              <Image
                                src="/svg/logo.svg"
                                alt="Lending Bridge"
                                width={140}
                                height={28}
                                className="h-6 w-auto shrink-0 brightness-0 invert sm:h-7"
                              />
                              <p className="mt-3 line-clamp-4 font-league-spartan text-[13px] font-bold leading-snug text-white sm:text-[14px] lg:text-[15px]">
                                {item.heroHeadline}
                              </p>
                              <p className="mt-auto pb-1 font-gilroy-regular text-[12px] text-white/90 sm:text-[13px]">
                                By {item.author}
                              </p>
                            </div>
                            <div className="relative h-full w-[42%] max-w-[160px] shrink-0 sm:max-w-[180px]">
                              <Image
                                src={item.portraitSrc!}
                                alt=""
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 500px) 45vw, 180px"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="relative flex flex-1 flex-col p-5 pb-14">
                      <p className="font-league-spartan text-[20px] font-semibold leading-snug text-black">
                        {truncateTitle(item.cardTitle)}
                      </p>
                      <p className="mb-5 mt-[10px] font-gilroy-regular text-[16px] text-[#7D7C7C]">
                        {item.dateLabel}
                      </p>
                      <p className="font-gilroy-regular text-[16px] leading-relaxed text-black">
                        {truncateExcerpt(item.excerpt)}
                      </p>
                      <p className="absolute bottom-5 left-5 font-gilroy-medium text-[16px] text-black">
                        Read More...
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </Slider>

            <div className="mt-5 flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                disabled={isAtStart}
                className={`rounded-md p-0 transition ${
                  isAtStart
                    ? "cursor-not-allowed opacity-20"
                    : "cursor-pointer opacity-100 hover:opacity-80"
                }`}
                onClick={() => sliderRef.current?.slickPrev()}
              >
                <Image
                  src="/svg/chevron-left-white.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="h-10 w-10"
                />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                disabled={isAtEnd}
                className={`rounded-md p-0 transition ${
                  isAtEnd
                    ? "cursor-not-allowed opacity-20"
                    : "cursor-pointer opacity-100 hover:opacity-80"
                }`}
                onClick={() => sliderRef.current?.slickNext()}
              >
                <Image
                  src="/svg/chevron-right-white.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="h-10 w-10"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsTestingSection;
