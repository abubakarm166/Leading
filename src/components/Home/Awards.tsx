"use client";
import Slider from "react-slick";
import AwardItem from "../Awards/AwardItem";
import Reveal from "../common/Reveal";

const Awards = () => {
  return (
    <section className="relative w-screen px-5 lg:px-[100px] py-[50px] lg:py-[100px] overflow-x-hidden bg-primary-bg">
      <Reveal>
        <h2 className="font-semibold text-primary text-[50px] lg:text-[70px] text-center font-league-spartan">
          Awards
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="font-gilroy-regular text-[18px] mt-5 text-center mb-[50px]">
          We have won two awards hosted by UK Finance Awards 2024 - SME Finance
        </p>
      </Reveal>
      <Reveal delay={0.5}>
        <Slider
          slidesToShow={1}
          slidesToScroll={1}
          dots={false}
          infinite={false}
        >
          <AwardItem content='"SME Client Service Excellence Award 2024"' />
          <AwardItem content='"Most Trusted Bridging Finance Provider 2024 - Midlands"' />
        </Slider>
      </Reveal>
    </section>
  );
};

export default Awards;
