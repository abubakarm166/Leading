import Image from "next/image";
import Reveal from "../common/Reveal";

const Highlights = () => {
  return (
    <section className="relative w-screen overflow-x-hidden pt-[50px] lg:pt-[100px] bg-primary-bg">
      <Reveal>
        <h2 className="font-league-spartan font-semibold text-center lg:text-left text-primary text-[40px] md:text-[45px] lg:text-[70px] mb-[50px] px-5 lg:px-[80px]">
          Our Highlights
        </h2>
      </Reveal>

      <div className="px-5 lg:px-[60px] flex flex-col md:flex-row md:flex-nowrap md:justify-between items-center space-y-10 md:space-y-0 font-league-spartan">
        {/* First highlight */}
        <Reveal delay={0.2}>
          <div className="text-center md:text-left md:flex-1 whitespace-nowrap">
            <p className="font-bold text-[22px] md:text-[28px] lg:text-[48px] mb-2 md:mb-3">350</p>
            <p className="text-[20px] md:text-[22px] lg:text-[30px] text-primary whitespace-nowrap">Loans to Date</p>
          </div>
        </Reveal>

        {/* Second highlight */}
        <Reveal delay={0.2}>
          <div className="text-center md:text-left md:flex-1 whitespace-nowrap">
            <p className="font-bold text-[22px] md:text-[28px] lg:text-[48px] mb-2 md:mb-3">£55 M</p>
            <p className="text-[20px] md:text-[22px] lg:text-[30px] text-primary whitespace-nowrap">Active Loans</p>
          </div>
        </Reveal>

        {/* Third highlight */}
        <Reveal delay={0.2}>
          <div className="text-center md:text-left md:flex-1 whitespace-nowrap">
            <p className="font-bold text-[22px] md:text-[24px] lg:text-[48px] mb-2 md:mb-3">
              12 Hours - 5 Working Days
            </p>
            <p className="text-[20px] md:text-[20px] lg:text-[28px] text-primary">
              Loan Completions
            </p>
          </div>
        </Reveal>
      </div>

      <Image
        src="/svg/highlights.svg"
        width={200}
        height={200}
        alt="highlights"
        className="w-screen h-[400px] object-cover mt-10"
      />
    </section>
  );
};

export default Highlights;
