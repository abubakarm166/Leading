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
    <section className="relative w-full bg-primary-bg px-5 pb-12 pt-5 sm:px-10 sm:pb-16 sm:pt-6 lg:px-[80px] lg:pb-20 lg:pt-6 2xl:pb-24 2xl:pt-8">
      <div
        className="pointer-events-none absolute inset-0 overflow-x-clip overflow-y-visible"
        aria-hidden
      >
        <div className="absolute -top-24 right-[max(-8%,-120px)] h-[min(420px,55vh)] w-[min(420px,55vh)] rounded-full bg-primary/[0.07] blur-[80px]" />
        <div className="absolute bottom-[-80px] left-[max(-5%,-80px)] h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-[70px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-x-clip lg:flex-row lg:items-center lg:justify-between lg:gap-6 xl:gap-10 2xl:gap-12">
        <div className="order-1 mt-6 w-full max-w-2xl shrink-0 space-y-5 lg:order-0 lg:mt-0 lg:space-y-6">
          <div>
            <h1 className="font-league-spartan text-[42px] font-extrabold leading-[1.08] tracking-tight text-primary text-balance sm:text-[50px] lg:text-[70px]">
              Bridging Now <br className="hidden lg:block" />
              Made Simple
            </h1>
            <div
              className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary/50 sm:mt-6 sm:w-16"
              aria-hidden
            />
          </div>

          <Reveal delay={0.3}>
            <p className="max-w-xl font-gilroy-regular text-[16px] font-extralight leading-[1.65] text-[#3a4d5c] sm:text-[18px] lg:text-[25px]">
              Connecting you to decision makers to give{" "}
              <br className="hidden lg:block" />
              you full transparency of the complete end-
              <br className="hidden lg:block" />
              to-end process.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="font-gilroy-medium text-[18px] text-primary sm:text-[20px] lg:text-[30px] lg:leading-snug">
              How much do you want to borrow?
            </p>
          </Reveal>

          <Reveal
            delay={0.7}
            className="relative overflow-visible lg:pt-1"
          >
            <Button
              onClick={handleOnCalculate}
              className="w-full transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 lg:w-auto lg:px-14 lg:py-[18px] [&>p]:tracking-wide"
            >
              <p className="text-[18px] font-bold uppercase text-white sm:text-[20px]">
                Calculate Now
              </p>
            </Button>
            <Image
              src="/svg/hero-arrow.svg"
              width={98}
              height={98}
              alt="arrow"
              className="absolute right-6 hidden object-cover lg:-top-12 lg:right-4 lg:block lg:h-[88px] lg:w-[88px] xl:h-[98px] xl:w-[98px]"
              priority
            />
          </Reveal>
        </div>

        <div className="relative min-w-0 flex-1">
          <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[520px] lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-[-10%] rounded-[2.5rem] bg-gradient-to-br from-primary/[0.12] via-primary/[0.02] to-transparent opacity-90 blur-2xl"
              aria-hidden
            />
            <Image
              src="/images/hero.webp"
              width={680}
              height={700}
              alt="hero"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, (max-width: 1536px) 55vw, 62vw"
              className="relative h-auto w-full object-contain object-center drop-shadow-[0_28px_60px_-15px_rgba(33,85,138,0.35)] lg:object-[right_bottom]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
