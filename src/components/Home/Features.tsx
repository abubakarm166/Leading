"use client";
import { FEATURES } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import Reveal from "../common/Reveal";

const Features = () => {
  const [activeItem, setActiveItem] = useState(FEATURES[0]);

  return (
    <section className="relative w-screen overflow-x-hidden bg-primary-bg px-5 lg:px-[80px] pt-[50px] lg:pt-0">
      <div className="grid grid-cols-3 gap-y-5 lg:gap-y-0 lg:grid-cols-5 justify-items-center">
        {FEATURES.map((item) => (
          <Reveal key={item.id} delay={item.id * 0.2}>
            <div
              className={`w-[110px] h-[122px] lg:w-[175px] lg:h-[175px] 2xl:w-[225px] 2xl:h-[225px] rounded-[10px] lg:rounded-[32px] flex flex-col items-center justify-center px-[10px] 2xl:px-[33px] py-6 bg-white border border-dashed cursor-pointer ${
                item.id === activeItem.id
                  ? "opacity-100 border-primary"
                  : "opacity-70 border-transparent"
              }`}
              onClick={() => setActiveItem(item)}
            >
              <Image
                src={item.img}
                width={200}
                height={200}
                alt="img"
                className="w-[60px] h-[60px] lg:w-[80px] 2xl:w-[120px] lg:h-[80px] 2xl:h-[120px] object-cover"
              />
              <p
                className={`font-gilroy-bold ${
                  item.id === activeItem.id ? "font-semibold" : "font-normal"
                } hidden lg:block text-[16px] text-center ${
                  item.id === activeItem.id
                    ? "text-primary"
                    : "text-[#00000080]"
                }`}
              >
                {item.title}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="relative lg:ml-10 mt-10 lg:mt-[100px] flex flex-col lg:flex-row items-center">
        <Reveal className="max-w-full lg:max-w-[60%] 2xl:max-w-[70%] order-1 lg:order-0">
          <div>
            <p className="font-semibold text-[32px] font-league-spartan">
              {activeItem.subTitle}
            </p>
            <p className="font-gilroy-regular mt-5 lg:mt-10 text-[18px] max-w-full lg:max-w-[70%]">
              {activeItem.content}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3} className="-mt-7 lg:-mt-0 mb-7 lg:mb-0">
          <Image
            src={activeItem.contentImg}
            width={200}
            height={200}
            alt="img"
            className="w-[380px] h-[300px] object-contain hidden lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
