"use client";
import Image from "next/image";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const Hero = () => {
  const handleOnCalculate = () => {
    const calculator = document.getElementById("calculator");
    if (calculator) {
      calculator.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-primary-bg overflow-x-hidden px-5 sm:px-10 lg:px-[80px] py-[60px] sm:py-[80px] lg:py-[100px] 2xl:py-[80px]">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1800px] mx-auto">
        <div className="order-1 lg:order-0">
          <Reveal>
            <h1 className="text-[42px] sm:text-[50px] lg:text-[70px] font-extrabold text-primary font-league-spartan leading-tight">
              Bridging Now <br />
              Made Simple
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="my-5 lg:my-[20px] text-[16px] sm:text-[18px] lg:text-[25px] font-gilroy-regular font-extralight leading-relaxed">
              Connecting you to decision makers to give <br />
              you full transparency of the complete end-
              <br />
              to-end process.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="font-gilroy-medium mb-4 text-[18px] sm:text-[20px] lg:text-[30px] text-primary">
              How much do you want to borrow?
            </p>
          </Reveal>

          <Reveal delay={0.7} className="relative lg:pt-[70px]">
            <Button onClick={handleOnCalculate}>
              <p className="font-bold text-white text-[18px] sm:text-[20px] uppercase">
                Calculate Now
              </p>
            </Button>
            <Image
              src="/svg/hero-arrow.svg"
              width={98}
              height={98}
              alt="arrow"
              className="lg:w-[98px] lg:h-[98px] object-cover absolute right-10 lg:top-0 hidden lg:block"
            />
          </Reveal>
        </div>

        <Reveal delay={0.7}>
          <Image
            src="/svg/hero-updated.svg"
            width={680}
            height={700}
            alt="hero"
            className="w-[300px] sm:w-[400px] lg:w-[680px] h-auto object-contain lg:-mr-20"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
