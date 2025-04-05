import Image from "next/image";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const LoanProcess = () => {
  return (
    <section className="relative w-screen overflow-hidden pt-[60px] px-5 lg:px-[100px] bg-primary-bg">
      <Reveal>
        <h2 className="font-league-spartan font-semibold text-[50px] lg:text-[70px] text-primary mb-[50px]">
          Loan Process
        </h2>
      </Reveal>
      <Reveal delay={0.3}>
        <Image
          src="/svg/loan-process.svg"
          width={200}
          height={200}
          alt="loan-process"
          className="w-screen h-full object-cover"
        />
      </Reveal>
      <div className="flex items-center justify-center mt-[90px]">
        <Button>
          <p className="font-bold text-white text-[16px] lg:text-[20px] uppercase">
            View our products
          </p>
        </Button>
      </div>
      <Image
        src="/svg/spiral-left.svg"
        width={587}
        height={868}
        alt="spiral-left"
        className="w-[587px] h-[868px] object-contain absolute -left-[13%] 2xl:-left-[10%] top-[20%] hidden lg:block"
      />
      <Image
        src="/svg/spiral-right.svg"
        width={587}
        height={868}
        alt="spiral-right"
        className="w-[587px] h-[868px] object-contain absolute -right-[10%] top-[0%] hidden lg:block"
      />
    </section>
  );
};

export default LoanProcess;
