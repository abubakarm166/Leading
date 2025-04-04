import Image from "next/image";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const Hero = () => {
  return (
    <section className="relative w-screen min-h-dvh overflow-x-hidden bg-primary-bg px-[100px]">
      <div className="flex flex-row items-center justify-between">
        <div>
          <Reveal>
            <h1 className="text-[50px] 2xl:text-[75px] font-bold text-primary font-league-spartan">
              Bridging Now <br />
              Made Simple
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="my-[50px] text-[16px] 2xl:text-[25px] font-gilroy-regular">
              Connecting you to decision makers to give <br />
              you full transparency of the complete end-
              <br />
              to-end process.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <Button>
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
            className="w-[500px] h-[500px] 2xl:w-[750px] 2xl:h-[700px] object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
