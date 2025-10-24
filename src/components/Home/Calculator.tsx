"use client";
import { INTEREST_RATES, LTV_RATES } from "@/utils/constants";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../common/Button";
import Input from "../common/Input";
import Reveal from "../common/Reveal";
import TooltipSlider from "../common/TooltipSlider";
import UserDetailsModal from "../common/UserDetailsModal";

const Calc = ({ openUserDetailsModal }: { openUserDetailsModal: (values: never) => void }) => {
  const [grossLoan, setGrossLoan] = useState<null | number>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const formikProps = useFormik({
    initialValues: {
      propertyType: "residential",
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

  const handleOnLoanAmountChange = (val: string) => {
    if (!values.propertyValue) {
      return toast.error("Please enter property value");
    }

    const maxRate = LTV_RATES[values.propertyType as never];
    const maxAmount = Number(values.propertyValue) * (maxRate / 100);

    if (Number(val) > maxAmount) {
      return setErrorMsg(`The max amount is ${maxAmount}`);
    } else {
      setErrorMsg("");
    }

    setFieldValue("loanAmount", val);
  };

  const handleOnLTVChange = (val: number) => {
    const maxRate = LTV_RATES[values.propertyType as never];

    toast.dismiss();
    if (!values.propertyValue) {
      return toast.error("Please enter property value");
    }

    if ((val as number) > maxRate) {
      return toast.error(`The maximum percentage is ${maxRate}`);
    }
    setFieldValue("ltv", val);
    setFieldValue("loanAmount", (Number(values.propertyValue) * (val / 100)).toString());
  };

  const handleOpenUserDetailsModal = () => {
    if (
      !values.propertyType ||
      !values.noOfProperties ||
      !values.propertyValue ||
      !values.loanAmount ||
      !values.securityType ||
      !values.repaymentType ||
      !values.loanTerm ||
      !values.ltv
    ) {
      return toast.error("Please enter all the details");
    }

    openUserDetailsModal(values as never);
  };

  useEffect(() => {
    if (
      values.propertyType &&
      values.propertyValue &&
      values.loanAmount &&
      values.repaymentType &&
      values.loanTerm &&
      values.ltv
    ) {
      const interest = INTEREST_RATES[values.propertyType as keyof typeof INTEREST_RATES];

      const gLoan = Number(values.propertyValue) * interest;
      setGrossLoan(gLoan);
    }
  }, [values]);

  return (
    <div className="px-0 lg:px-[88px] mt-[50px]">
      <div className="text-center">
        <p className="font-gilroy-medium font-normal text-[20px] text-left lg:text-center">
          Find out how much you or your clients can borrow today with our Loan Calculators.
        </p>
        <p className="font-gilroy-regular font-extralight text-[18px] mt-5 text-left lg:text-center">
          Note: &ldquo;Enter a few relevant details about your property and get a free instant quote with indicative terms
          estimating how much it may cost.&rdquo;
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between pt-[50px] font-leagueSpartan">
        <div className="w-full lg:w-[50%] font-gilroy-regular font-extralight">
          <p className="text-left text-[24px] font-semibold text-black font-league-spartan">Bridge Loan Calculator</p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-5 space-y-[10px] lg:space-y-0">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-[40%] lg:w-[58%]">Property Type</p>
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-5 space-y-[10px] lg:space-y-0">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-full lg:w-[60%]">Number of Properties</p>
            <Input
              className="px-5 py-3 rounded-full"
              type="number"
              value={values.noOfProperties}
              onChange={handleChange("noOfProperties")}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-5 space-y-[10px] lg:space-y-0">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">Property Value</p>
            <Input
              className="px-5 py-3 rounded-full"
              type="number"
              value={values.propertyValue}
              onChange={handleChange("propertyValue")}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-5 space-y-[10px] lg:space-y-0">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-full lg:w-[57%]">Loan Amount Required</p>
            <div className="w-full">
              <Input
                className="px-5 py-3 rounded-full"
                type="number"
                value={values.loanAmount}
                onChange={(e) => handleOnLoanAmountChange(e.target.value)}
              />
              {errorMsg && <p className="mt-2 text-red-600 text-sm">*{errorMsg}</p>}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-5 space-y-[10px] lg:space-y-0">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">Security Type</p>
            <Input className="px-5 py-3 rounded-full" value={values.securityType} readOnly disabled onChange={() => {}} />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-5 space-y-[10px] lg:space-y-0">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-full lg:w-[60%]">Repayment Type</p>
            <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
              <div className="flex flex-row items-center space-x-[10px] w-1/2">
                <Input
                  type="radio"
                  checked={values.repaymentType === "monthly"}
                  className="mr-[10px] w-max"
                  value="monthly"
                  onChange={handleChange("repaymentType")}
                />
                <p className="font-gilroy-regular font-extralight text-[16px]">Serviced Monthly</p>
              </div>
              <div className="flex flex-row items-center space-x-[10px] w-1/2">
                <Input
                  type="radio"
                  className="mr-[10px] w-max"
                  checked={values.repaymentType === "interest"}
                  value="interest"
                  onChange={handleChange("repaymentType")}
                />
                <p className="font-gilroy-regular font-extralight text-[16px]">Retained Interest</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row item-start lg:items-center space-y-[10px] lg:space-y-0 mt-5">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">Loan Term</p>
            <TooltipSlider
              min={3}
              max={12}
              value={Number(values.loanTerm)}
              onChange={(val) => setFieldValue("loanTerm", val)}
              tipFormatter={(val) => `${val} Months`}
            />
          </div>
          <div className="flex flex-col lg:flex-row item-start lg:items-center space-y-[10px] lg:space-y-0 mt-5">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-full lg:w-[60%]">
              Loan-to-Value {/* <span className="text-xs text-[#939393]">(Max {ltvMax}%)</span> */}
            </p>
            <TooltipSlider min={1} max={100} value={Number(values.ltv)} onChange={(val) => handleOnLTVChange(val as number)} />
          </div>
        </div>
        <div className="lg:w-[30%] mt-5 lg:mt-0 font-gilroy-regular font-extralight">
          <p className="text-[24px] font-semibold text-black font-league-spartan">Loan Estimate</p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-[10px] lg:space-y-0 mt-5">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">Gross Loan</p>
            <Input className="px-5 py-3 rounded-full bg-white" disabled value={`£ ${grossLoan || 0}`} />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-[10px] lg:space-y-0 mt-5">
            <p className="text-black text-[18px] lg:text-[20px] mr-5 w-[40%] lg:w-[60%]">Interest Rate</p>
            <Input
              className="px-5 py-3 rounded-full bg-white"
              disabled
              value={`${INTEREST_RATES[values.propertyType as keyof typeof INTEREST_RATES] || 1.25}%`}
            />
          </div>
          <p className="text-[18px] lg:text-[16px] text-black mt-5 lg:mt-[100px]">
            This is an estimate only and is used to give you a basic understanding of our terms. To get a precise quote, contact
            us now.
          </p>
          <div className="flex flex-row justify-center lg:justify-end mt-[30px] lg:mt-[200px] relative">
            <Image
              src="/svg/calc-man.svg"
              width={129}
              height={129}
              alt="man"
              className="w-[129px] h-[129px] object-cover absolute bottom-[100%] right-0 hidden lg:block"
            />
            <Button onClick={handleOpenUserDetailsModal}>
              <p className="text-[20px] uppercase text-white">Talk To An Expert</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Calculator = () => {
  const [isCalcVisible, setIsCalcVisible] = useState(false);
  const [isUserDetailsModalVisible, setIsUserDetailsModalVisible] = useState(false);
  const [msgObject, setMsgObject] = useState<{
    propertyType: string;
    noOfProperties: string;
    loanAmount: string;
    securityType: string;
    repaymentType: string;
    loanTerm: string;
    ltv: string;
  }>();

  return (
    <section
      className="relative w-screen overflow-x-hidden bg-primary-bg pt-[150px] lg:pt-[350px] px-5 lg:px-[80px]"
      id="calculator"
    >
      <div className="w-full min-h-[550px] rounded-[20px] bg-linear-to-b from-[#A7B3C0] to-[#C5D3DD] flex flex-col justify-end pb-[50px] px-5">
        <Image
          src="/svg/calculator-man.svg"
          width={200}
          height={200}
          alt="man"
          className="w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] object-cover -mt-[100px] mx-auto lg:-mt-[200px]"
        />
        <Reveal>
          <h2 className="font-league-spartan font-semibold text-primary text-[50px] 2xl:text-[70px] text-left lg:text-center">
            Calculate How Much You Can Borrow?
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-gilroy-regular text-left lg:text-center text-[18px] mt-5 mb-[50px]">
            A bridging calculator estimates short-term loan costs, including monthly interest and total
            <br className="hidden lg:block" />
            repayment, using inputs like loan amount, interest rate, and term.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="flex items-center justify-center">
            <Button onClick={() => setIsCalcVisible((prev) => !prev)}>
              <div className="flex flex-row items-center space-x-5">
                <p className="font-bold text-white text-[16px] lg:text-[20px] uppercase">Calculate now</p>
                <Image
                  src={isCalcVisible ? "/svg/chevron-up-white.svg" : "/svg/chevron-down-white.svg"}
                  width={20}
                  height={20}
                  alt="chevron-down"
                  className="w-[15px] h-[15px] object-cover"
                />
              </div>
            </Button>
          </div>
        </Reveal>
        {isCalcVisible && (
          <Calc
            openUserDetailsModal={(values) => {
              setIsUserDetailsModalVisible(true);
              setMsgObject(values);
            }}
          />
        )}
      </div>
      <UserDetailsModal
        isOpen={isUserDetailsModalVisible}
        onClose={() => setIsUserDetailsModalVisible(false)}
        propertyType={msgObject?.propertyType as string}
        noOfProperties={msgObject?.noOfProperties as string}
        loanAmount={msgObject?.loanAmount as string}
        ltv={msgObject?.ltv as string}
        loanTerm={msgObject?.loanTerm as string}
        repaymentType={msgObject?.repaymentType as string}
        securityType={msgObject?.securityType as string}
      />
    </section>
  );
};

export default Calculator;
