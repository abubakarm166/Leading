import Image from "next/image";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const Calculator = () => {
  return (
    <section className="relative w-screen overflow-x-hidden bg-primary-bg pt-[350px] px-[100px]">
      <Image
        src="/svg/calculator-man.svg"
        width={200}
        height={200}
        alt="man"
        className="w-[500px] h-[500px] object-cover absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="w-full h-[550px] rounded-[20px] bg-linear-to-b from-[#A7B3C0] to-[#C5D3DD] flex flex-col justify-end pb-[50px] px-5">
        <Reveal>
          <h2 className="font-semibold text-primary text-[50px] 2xl:text-[70px] text-center">
            Calculate how much you can borrow?
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-center text-[18px] mt-5 mb-[50px]">
            A bridging calculator estimates short-term loan costs, including
            monthly interest and total repayment, using inputs like loan amount,
            interest rate, and term.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="flex items-center justify-center">
            <Button>
              <div className="flex flex-row items-center space-x-5">
                <p className="font-bold text-white text-[20px] uppercase">
                  Calculate now
                </p>
                <Image
                  src="/svg/chevron-down-white.svg"
                  width={20}
                  height={20}
                  alt="chevron-down"
                  className="w-[15px] h-[15px] object-cover"
                />
              </div>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Calculator;
