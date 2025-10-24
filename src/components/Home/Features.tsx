"use client";
import { FEATURES } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import Reveal from "../common/Reveal";

const Features = () => {
  const [activeItem, setActiveItem] = useState(FEATURES[0]);

  return (
    <section className="relative w-screen overflow-x-hidden bg-primary-bg px-5 sm:px-10 lg:px-[80px] pt-[40px] sm:pt-[50px] lg:pt-[60px] 2xl:pt-[40px]">
      {/* Feature icons grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-x-5 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:gap-x-10 lg:gap-y-0">
        {FEATURES.map((item) => (
          <Reveal key={item.id} delay={item.id * 0.2}>
            <div
              className={`w-[110px] h-[122px] sm:w-[130px] sm:h-[130px] lg:w-[175px] lg:h-[175px] 2xl:w-[225px] 2xl:h-[225px] rounded-[10px] lg:rounded-[32px] flex flex-col items-center justify-center px-[10px] 2xl:px-[33px] py-6 bg-white border border-dashed cursor-pointer transition-all duration-200 ${
                item.id === activeItem.id
                  ? "opacity-100 border-primary shadow-md"
                  : "opacity-80 border-transparent hover:opacity-100"
              }`}
              onClick={() => setActiveItem(item)}
            >
              <Image
                src={item.img}
                width={200}
                height={200}
                alt="feature"
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[80px] 2xl:w-[120px] lg:h-[80px] 2xl:h-[120px] object-contain"
              />
              <p
                className={`font-gilroy-bold mt-2 sm:mt-3 text-[12px] sm:text-[14px] lg:text-[16px] text-center ${
                  item.id === activeItem.id
                    ? "text-primary font-semibold"
                    : "text-[#00000080] font-normal"
                }`}
              >
                {item.title}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Active content section */}
      <div className="relative mt-10 lg:mt-[100px] 2xl:mt-[60px] flex flex-col lg:flex-row items-center lg:items-start lg:ml-10 gap-8">
        <Reveal className="max-w-full lg:max-w-[60%] 2xl:max-w-[70%] order-1 lg:order-0">
          <div className="text-center lg:text-left">
            <p className="font-semibold text-[24px] sm:text-[28px] lg:text-[32px] font-league-spartan">
              {activeItem.subTitle}
            </p>
            <p className="font-gilroy-regular mt-4 sm:mt-6 lg:mt-10 text-[16px] sm:text-[18px] max-w-full lg:max-w-[70%] mx-auto lg:mx-0 text-[#333] leading-relaxed">
              {activeItem.content}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="order-0 lg:order-1">
          <Image
            src={activeItem.contentImg}
            width={400}
            height={300}
            alt="feature content"
            className="w-[280px] sm:w-[340px] lg:w-[380px] 2xl:w-[480px] h-auto object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
