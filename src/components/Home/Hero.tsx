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
    <section className="relative w-screen lg:min-h-dvh overflow-x-hidden bg-primary-bg px-[20px] lg:px-[80px]">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="order-1 lg:order-0 lg:mt-20">
          <Reveal>
            <h1 className="text-[50px] lg:text-[70px] font-extrabold text-primary font-league-spartan">
              Bridging Now <br />
              Made Simple
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="my-5 lg:my-[50px] text-[18px] lg:text-[25px] font-gilroy-regular font-extralight">
              Connecting you to decision makers to give <br />
              you full transparency of the complete end-
              <br />
              to-end process.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <Button onClick={handleOnCalculate}>
              <p className="font-bold text-white text-[20px] uppercase">
                Calculate Now
              </p>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.7}>
          <Image
            src="/svg/hero.svg"
            width={200}
            height={200}
            alt="hero"
            className="w-[366px] h-[340px] lg:w-[680px] lg:h-[700px] object-cover lg:object-contain lg:-mr-20"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
