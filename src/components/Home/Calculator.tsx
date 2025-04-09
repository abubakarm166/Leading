"use client";
import { INTEREST_RATES } from "@/utils/constants";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Reveal from "../common/Reveal";
import TooltipSlider from "../common/TooltipSlider";

const Calc = () => {
  const [grossLoan, setGrossLoan] = useState<null | number>(null);
  const [netLoan, setNetLoan] = useState<null | number>(null);

  const formikProps = useFormik({
    initialValues: {
      propertyType: "",
      noOfProperties: "",
      propertyValue: "",
      loanAmount: "",
      securityType: "First Charge",
      repaymentType: "",
      loanTerm: "",
      ltv: "",
    },
    onSubmit: (values) => {
      console.log("VALUES: ", values);
    },
  });

  const { values, handleChange, setFieldValue } = formikProps;

  const ltvMax = useMemo(() => {
    if (values.propertyType) {
      if (values.propertyType === "residential") {
        return 70;
      } else if (values.propertyType === "semi-commercial") {
        return 65;
      } else if (values.propertyType === "commercial") {
        return 65;
      } else {
        return 70;
      }
    }

    return 70;
  }, [values.propertyType]);

  useEffect(() => {
    if (
      values.propertyType &&
      values.propertyValue &&
      values.loanAmount &&
      values.repaymentType &&
      values.loanTerm &&
      values.ltv
    ) {
      const interest =
        INTEREST_RATES[values.propertyType as keyof typeof INTEREST_RATES];

      const gLoan = Number(values.propertyValue) * interest;
      setGrossLoan(gLoan);

      const fees = 3290;
      const term =
        values.repaymentType === "monthly" ? 12 : Number(values.loanTerm);
      const nLoan =
        Number(values.loanAmount) * term * interest - fees - term * interest;
      setNetLoan(nLoan);
    }
  }, [values]);

  return (
    <div className="px-[88px] mt-[50px]">
      <div className="text-center">
        <p className="font-gilroy-medium font-normal text-[20px]">
          Find out how much you or your clients can borrow today with our Loan
          Calculators.
        </p>
        <p className="font-gilroy-regular font-extralight text-[18px] mt-5">
          Note: &ldquo;Enter a few relevant details about your property and get
          a free instant quote with indicative terms estimating how much it may
          cost.&rdquo;
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between pt-[50px] font-leagueSpartan">
        <div className="w-[50%] font-gilroy-regular font-extralight">
          <p className="text-[18px] text-center lg:text-left lg:text-[24px] font-semibold text-black font-league-spartan">
            Bridge Loan Calculator
          </p>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Property Type
            </p>
            {/* <Input className="px-5 py-3 rounded-[8px] border border-[#D9D9D9]" /> */}
            <select
              value={values.propertyType}
              onChange={handleChange("propertyType")}
              className="rounded-full bg-white px-[10px] py-[12px] w-full"
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="semi-commercial">Semi-Commercial</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Number of Properties
            </p>
            <Input
              className="px-5 py-3 rounded-full"
              type="number"
              value={values.noOfProperties}
              onChange={handleChange("noOfProperties")}
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Property Value
            </p>
            <Input
              className="px-5 py-3 rounded-full"
              type="number"
              value={values.propertyValue}
              onChange={handleChange("propertyValue")}
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Loan Amount Required
            </p>
            <Input
              className="px-5 py-3 rounded-full"
              type="number"
              value={values.loanAmount}
              onChange={handleChange("loanAmount")}
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Security Type
            </p>
            <Input
              className="px-5 py-3 rounded-full"
              value={values.securityType}
              readOnly
              disabled
              onChange={() => {}}
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Repayment Type
            </p>
            <div className="flex flex-col lg:flex-row items-center w-full">
              <div className="flex flex-row items-center space-x-[10px] w-1/2">
                <Input
                  type="radio"
                  checked={values.repaymentType === "monthly"}
                  className="mr-[10px] w-max"
                  value="monthly"
                  onChange={handleChange("repaymentType")}
                />
                <p className="font-gilroy-regular font-extralight text-[16px]">
                  Serviced Monthly
                </p>
              </div>
              <div className="flex flex-row items-center space-x-[10px] w-1/2">
                <Input
                  type="radio"
                  className="mr-[10px] w-max"
                  checked={values.repaymentType === "interest"}
                  value="interest"
                  onChange={handleChange("repaymentType")}
                />
                <p className="font-gilroy-regular font-extralight text-[16px]">
                  Retained Interest
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Loan Term
            </p>
            <TooltipSlider
              min={3}
              max={12}
              value={Number(values.loanTerm)}
              onChange={(val) => setFieldValue("loanTerm", val)}
              tipFormatter={(val) => `${val} Months`}
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Loan-to-Value{" "}
              <span className="text-xs text-[#939393]">(Max {ltvMax}%)</span>
            </p>
            <TooltipSlider
              min={1}
              max={ltvMax}
              value={Number(values.ltv)}
              onChange={(val) => setFieldValue("ltv", val)}
            />
          </div>
        </div>
        <div className="lg:w-[30%] mt-5 lg:mt-0 font-gilroy-regular font-extralight">
          <p className="text-[24px] font-semibold text-black font-league-spartan">
            Loan Estimate
          </p>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Gross Loan
            </p>
            <Input
              className="px-5 py-3 rounded-full bg-white"
              disabled
              value={`£ ${grossLoan || 0}`}
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Net Loan
            </p>
            <Input
              className="px-5 py-3 rounded-full bg-white"
              disabled
              value={`£ ${netLoan || 0}`}
            />
          </div>
          <div className="flex flex-row items-center mt-5">
            <p className="text-black text-[14px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">
              Interest Rate
            </p>
            <Input
              className="px-5 py-3 rounded-full bg-white"
              disabled
              value={`${
                INTEREST_RATES[
                  values.propertyType as keyof typeof INTEREST_RATES
                ] || 1.25
              }%`}
            />
          </div>
          <p className="text-[12px] lg:text-[16px] text-black mt-5 lg:mt-[100px]">
            This is an estimate only and is used to give you a basic
            understanding of our terms. To get a precise quote, contact us now.
          </p>
          <div className="flex flex-row justify-end mt-5 lg:mt-[200px] relative">
            <Image
              src="/svg/calc-man.svg"
              width={129}
              height={129}
              alt="man"
              className="w-[129px] h-[129px] object-cover absolute bottom-[100%] right-0"
            />
            <Button>
              <p className="text-[20px] uppercase text-white">
                Talk To A Expert
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Calculator = () => {
  const [isCalcVisible, setIsCalcVisible] = useState(false);

  return (
    <section
      className="relative w-screen overflow-x-hidden bg-primary-bg pt-[150px] lg:pt-[350px] px-5 lg:px-[100px]"
      id="calculator"
    >
      <div className="w-full min-h-[550px] rounded-[20px] bg-linear-to-b from-[#A7B3C0] to-[#C5D3DD] flex flex-col justify-end pb-[50px] px-5">
        <Image
          src="/svg/calculator-man.svg"
          width={200}
          height={200}
          alt="man"
          className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] object-cover -mt-[100px] ml-[50px] lg:ml-[300px] lg:-mt-[200px] 2xl:ml-[550px]"
        />
        <Reveal>
          <h2 className="font-league-spartan font-semibold text-primary text-[50px] 2xl:text-[70px] text-left lg:text-center">
            Calculate how much you can borrow?
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-gilroy-regular font-extralight text-left lg:text-center text-[18px] mt-5 mb-[50px]">
            A bridging calculator estimates short-term loan costs, including
            monthly interest and total
            <br className="hidden lg:block" />
            repayment, using inputs like loan amount, interest rate, and term.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="flex items-center justify-center">
            <Button onClick={() => setIsCalcVisible((prev) => !prev)}>
              <div className="flex flex-row items-center space-x-5">
                <p className="font-bold text-white text-[16px] lg:text-[20px] uppercase">
                  Calculate now
                </p>
                <Image
                  src={
                    isCalcVisible
                      ? "/svg/chevron-up-white.svg"
                      : "/svg/chevron-down-white.svg"
                  }
                  width={20}
                  height={20}
                  alt="chevron-down"
                  className="w-[15px] h-[15px] object-cover"
                />
              </div>
            </Button>
          </div>
        </Reveal>
        {isCalcVisible && <Calc />}
      </div>
    </section>
  );
};

export default Calculator;
