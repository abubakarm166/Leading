"use client";
import { FEATURES } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import Reveal from "../common/Reveal";

const Features = () => {
  const [activeItem, setActiveItem] = useState(FEATURES[0]);

  return (
    <section className="relative w-screen overflow-x-hidden bg-primary-bg px-[100px] pb-[300px]">
      <div className="grid grid-cols-5">
        {FEATURES.map((item) => (
          <Reveal key={item.id} delay={item.id * 0.2}>
            <div
              className={`w-[175px] h-[175px] 2xl:w-[225px] 2xl:h-[225px] rounded-[32px] flex flex-col items-center justify-center px-[10px] 2xl:px-[33px] py-6 bg-white border border-dashed cursor-pointer ${
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
                className="w-[80px] 2xl:w-[120px] h-[80px] 2xl:h-[120px] object-cover"
              />
              <p
                className={`text-[16px] text-center ${
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
      <div className="mt-[100px] flex flex-row items-center justify-between">
        <Reveal>
          <div className="max-w-full 2xl:max-w-[70%]">
            <p className="font-semibold text-[32px]">{activeItem.subTitle}</p>
            <p className="mt-10 text-[18px] max-w-[50%]">
              {activeItem.content}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <Image
            src={activeItem.contentImg}
            width={200}
            height={200}
            alt="img"
            className="w-[380px] h-[300px] object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
