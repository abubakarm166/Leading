import Image from "next/image";
import Reveal from "../common/Reveal";

const Highlights = () => {
  return (
    <section className="relative w-screen overflow-x-hidden pt-[100px] bg-primary-bg">
      <Reveal>
        <h2 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px] mb-[50px] px-5 lg:px-[100px]">
          Our Highlights
        </h2>
      </Reveal>
      <div className="px-5 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        <Reveal delay={0.2}>
          <div className="text-center">
            <p className="font-bold text-[50px] mb-3">350</p>
            <p className="text-[30px] text-primary">Loans to Date</p>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="text-center">
            <p className="font-bold text-[50px] mb-3">£55 M</p>
            <p className="text-[30px] text-primary">Active Loans</p>
          </div>
        </Reveal>
        <Reveal delay={0.6}>
          <div className="text-center">
            <p className="font-bold text-[50px] mb-3">
              12 Hours - 5 Working Days
            </p>
            <p className="text-[30px] text-primary">Loan Completions</p>
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
