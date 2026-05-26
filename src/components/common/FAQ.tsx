"use client";
import { BROKER_FAQ, GENERAL_FAQ } from "@/utils/constants";
import Image from "next/image";
import { useMemo, useState } from "react";

const FAQItem = ({
  isOpen,
  item,
  onClose,
  onOpen,
}: {
  isOpen: boolean;
  item: { question: string; answer: string };
  onClose: () => void;
  onOpen: () => void;
}) => {
  const handleOnClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <div
      className={`rounded-[10px] ${
        isOpen ? "bg-primary" : "bg-[#C5D3DD]"
      } w-full p-5 cursor-pointer`}
      onClick={handleOnClick}
    >
      <div className="flex flex-row items-center justify-between">
        <p
          className={`${
            isOpen
              ? "font-gilroy-medium font-medium text-white text-[20px]"
              : "font-gilroy-regular font-extralight text-black text-[18px]"
          }`}
        >
          {item.question}
        </p>
        <Image
          src={
            isOpen
              ? "/svg/chevron-up-normal-white.svg"
              : "/svg/chevron-down-black.svg"
          }
          width={24}
          height={24}
          alt="arrow"
          className={`${isOpen ? "w-4 h-4" : "w-2 h-2"} object-contain`}
        />
      </div>
      {isOpen && (
        <p className="text-white text-[18px] font-gilroy-regular font-extralight mt-3">
          {item.answer}
        </p>
      )}
    </div>
  );
};

const FAQ = ({ type }: { type: "general" | "broker" }) => {
  const [activeItemIdx, setActiveItemIdx] = useState<number | null>(0);

  const FAQList = useMemo(() => {
    if (type === "general") {
      return GENERAL_FAQ;
    } else if (type === "broker") {
      return BROKER_FAQ;
    }

    return [];
  }, [type]);

  return (
    <section className="w-full">
      <h2 className="font-league-spartan font-semibold text-[50px] lg:text-[70px] text-primary mb-[30px]">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col space-y-5">
        {FAQList.map((item, idx) => (
          <FAQItem
            key={idx}
            isOpen={idx === activeItemIdx}
            item={item}
            onClose={() => setActiveItemIdx(null)}
            onOpen={() => setActiveItemIdx(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
