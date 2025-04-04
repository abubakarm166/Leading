import Image from "next/image";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const LoanProcess = () => {
  return (
    <section className="w-screen overflow-x-hidden pt-[60px] px-[100px] bg-primary-bg">
      <Reveal>
        <h2 className="font-semibold text-[70px] text-primary mb-[50px]">
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
          <p className="font-bold text-white text-[20px] uppercase">
            View our products
          </p>
        </Button>
      </div>
    </section>
  );
};

export default LoanProcess;
