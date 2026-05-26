"use client";
import CaseStudiesCarousel from "../common/CaseStudiesCarousel";
import Reveal from "../common/Reveal";

const CaseStudies = () => {
  return (
    <section className="w-screen relative overflow-x-hidden bg-primary-bg px-5 lg:px-[50px] 2xl:px-[100px] pt-20 lg:pt-[100px]">
      <Reveal>
        <h2 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px] mb-[50px]">
          Case Studies
        </h2>
      </Reveal>
      <Reveal delay={0.3}>
        <CaseStudiesCarousel />
      </Reveal>
    </section>
  );
};

export default CaseStudies;
