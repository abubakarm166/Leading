"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const LoanProcess = () => {
  const router = useRouter();

  return (
    <section className="relative w-screen overflow-hidden bg-primary-bg px-5 pt-[60px] lg:px-[80px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <h2 className="mb-[50px] text-center font-league-spartan text-[50px] font-semibold text-primary lg:text-[70px]">
            Loan Process
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <Image
            src="/svg/loan-process.svg"
            width={200}
            height={200}
            alt="loan-process"
            className="hidden h-full w-full object-contain lg:block"
          />
          <Image
            src="/svg/loan-process-mobile.svg"
            width={200}
            height={200}
            alt="loan-process"
            className="block h-[980px] w-full object-contain lg:hidden"
          />
        </Reveal>
        <div className="mt-[90px] flex items-center justify-center">
          <Button onClick={() => router.push("/products")}>
            <p className="font-bold text-[16px] text-white lg:text-[20px] uppercase">
              View our products
            </p>
          </Button>
        </div>
      </div>
      <Image
        src="/svg/spiral-left.svg"
        width={587}
        height={868}
        alt="spiral-left"
        className="w-[587px] h-[868px] object-contain absolute left-[-13%] 2xl:left-[-10%] top-[20%] hidden lg:block"
      />
      <Image
        src="/svg/spiral-right.svg"
        width={587}
        height={868}
        alt="spiral-right"
        className="w-[587px] h-[868px] object-contain absolute right-[-10%] top-[0%] hidden lg:block"
      />
    </section>
  );
};

export default LoanProcess;
