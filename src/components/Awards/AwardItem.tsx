import Image from "next/image";
import React from "react";

interface Props {
  content: string;
}

const AwardItem: React.FC<Props> = ({ content }) => {
  return (
    <div className="w-full lg:w-[900px] xl:w-[1140px] h-[241px] lg:h-[300px] pt-1 lg:pt-5 bg-[#F1EEE7] mx-auto">
      <div
        className="mt-[45px] w-full h-[150px] py-[10px] xl:py-[29px] px-5 flex flex-row items-center lg:px-[105px] relative"
        style={{
          backgroundImage: "linear-gradient(to right, #302D2D, #665446)",
        }}
      >
        <p className="text-right ml-auto text-base lg:text-xl text-white max-w-[50%] lg:max-w-[60%] font-gilroyMedium">
          {content}
        </p>
        <Image
          src="/svg/award.svg"
          width={248}
          height={210}
          alt="award"
          objectFit="contain"
          className="w-[126px] h-[126px] lg:w-[248px] lg:h-[210px] absolute left-[10%] bottom-3 lg:-bottom-5 object-contain"
        />
      </div>
    </div>
  );
};

export default AwardItem;
