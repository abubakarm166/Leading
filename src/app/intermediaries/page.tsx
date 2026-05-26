"use client";
import Button from "@/components/common/Button";
import ContactUs from "@/components/common/ContactUs";
import Footer from "@/components/common/Footer";
import Input from "@/components/common/Input";
import Navbar from "@/components/common/Navbar";
import Reveal from "@/components/common/Reveal";
import LoanProcess from "@/components/Home/LoanProcess";
import { addRegistration } from "@/utils/api/registration";
import { BROKER_INFO } from "@/utils/constants";
import { useFormik } from "formik";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const BrokerRegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formikProps = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      company: "",
      postCode: "",
      jobTitle: "",
      marketingMaterial: true,
    },
    onSubmit: async (values, helpers) => {
      const fieldsMissing = Object.values(values).some((item) => {
        if (!item) {
          return true;
        }
      });

      if (fieldsMissing) {
        return toast.error("Please enter all the fields");
      }

      setIsLoading(true);
      await addRegistration({
        name: `${values.firstName} ${values.lastName}`,
        number: values.number,
        email: values.email,
        company: values.company,
        postCode: values.postCode,
        marketingMaterial: values.marketingMaterial,
      });
      setIsLoading(false);

      helpers.resetForm();
    },
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formikProps;

  return (
    <div
      id="register"
      className="flex flex-col lg:flex-row items-center bg-white rounded-[20px] lg:space-x-[52px] overflow-hidden"
    >
      <p className="font-league-spartan text-center mt-5 w-full text-[40px] font-bold block lg:hidden">Registration</p>
      <Image
        src="/svg/broker-registration.svg"
        width={500}
        height={500}
        alt="broker"
        className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] object-cover"
      />
      <div className="flex-1 lg:pr-[100px] py-5 lg:py-[50px]">
        <p className="font-league-spartan text-[70px] font-bold hidden lg:block">Registration</p>
        <div className="mt-[26px] flex-col space-y-[26px] px-5 lg:px-0">
          <div className="flex flex-row items-center justify-between">
            <div className="w-[45%]">
              <p className="font-gilroy-medium text-[14px] lg:text-[20px]">First Name</p>
              <Input
                placeholder="Enter your first name"
                className="border border-[#B7B7B7] rounded-[8px] px-3 py-[10px] mt-[7px]"
                value={values.firstName}
                onChange={handleChange("firstName")}
              />
            </div>
            <div className="w-[45%]">
              <p className="font-gilroy-medium text-[14px] lg:text-[20px]">Last Name</p>
              <Input
                placeholder="Enter your last name"
                className="border border-[#B7B7B7] rounded-[8px] px-3 py-[10px] mt-[7px]"
                value={values.lastName}
                onChange={handleChange("lastName")}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-[45%]">
              <p className="font-gilroy-medium text-[14px] lg:text-[20px]">Email Address</p>
              <Input
                placeholder="Enter your email"
                className="border border-[#B7B7B7] rounded-[8px] px-3 py-[10px] mt-[7px]"
                value={values.email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="w-[45%]">
              <p className="font-gilroy-medium text-[14px] lg:text-[20px]">Phone Number</p>
              <Input
                placeholder="+0000000000"
                className="border border-[#B7B7B7] rounded-[8px] px-3 py-[10px] mt-[7px]"
                value={values.number}
                onChange={handleChange("number")}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="w-[45%]">
              <p className="font-gilroy-medium text-[14px] lg:text-[20px]">Company Name</p>
              <Input
                placeholder="Enter your company name"
                className="border border-[#B7B7B7] rounded-[8px] px-3 py-[10px] mt-[7px]"
                value={values.company}
                onChange={handleChange("company")}
              />
            </div>
            <div className="w-[45%]">
              <p className="font-gilroy-medium text-[14px] lg:text-[20px]">Post Code</p>
              <Input
                placeholder="Enter your post code"
                className="border border-[#B7B7B7] rounded-[8px] px-3 py-[10px] mt-[7px]"
                value={values.postCode}
                onChange={handleChange("postCode")}
              />
            </div>
          </div>
          <div>
            <p className="font-gilroy-medium text-[14px] lg:text-[20px]">Job Title</p>
            <Input
              placeholder="Enter your job title"
              className="border border-[#B7B7B7] rounded-[8px] px-3 py-[10px] mt-[7px]"
              value={values.jobTitle}
              onChange={handleChange("jobTitle")}
            />
          </div>
          <div className="flex flex-row items-center space-x-[10px]">
            <Input
              type="checkbox"
              className="w-min"
              checked={values.marketingMaterial}
              onChange={(e) => setFieldValue("marketingMaterial", e.target.checked)}
            />
            <p className="font-gilroy-medium text-[16px] text-[#797979]">I agree to receive all marketing material</p>
          </div>
          <Button isLoading={isLoading} onClick={() => handleSubmit()}>
            <p className="text-white uppercase">Submit</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

const BrokerInfo = () => {
  const [activeHoveredItem, setActiveHoveredItem] = useState<(typeof BROKER_INFO)[0] | null>(null);

  return (
    <div className="pb-12 lg:pb-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-8 lg:gap-12">
          <h2 className="text-center font-league-spartan font-bold leading-[1.1] text-primary text-[34px] sm:text-[42px] lg:text-[52px] xl:text-[58px]">
            Information 
            You Need 
            To Know
          </h2>
          <div className="grid min-w-0 w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-6">
            {BROKER_INFO.map((item) => (
              <Reveal key={item.id} delay={0.2 * item.id} className="overflow-visible">
                <div
                  className="group mx-auto flex h-[177px] w-full max-w-[260px] flex-col items-center justify-center space-y-[20px] rounded-[20px] border border-primary px-6 transition-all hover:scale-[1.06] hover:bg-primary sm:mx-0"
                  onMouseEnter={() => setActiveHoveredItem(item)}
                  onMouseLeave={() => setActiveHoveredItem(null)}
                >
                  <Image
                    src={activeHoveredItem && activeHoveredItem?.id === item.id ? item.activeImg : item.img}
                    width={70}
                    height={70}
                    alt="img"
                    className="w-[70px] h-[70px] object-contain"
                  />
                  <p className="font-gilroy-regular text-[16px] text-center font-extralight group-hover:text-white">{item.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BrokerPage = () => {
  const routeParams = useSearchParams();

  const redirectParam = routeParams.get("redirect");

  useEffect(() => {
    if (redirectParam && redirectParam === "register") {
      const registerBlock = document.getElementById("register");

      if (registerBlock) {
        registerBlock.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [redirectParam]);

  return (
    <>
      <main className="relative overflow-x-hidden bg-primary-bg">
        <Navbar />
        <div className="px-5 md:px-14 xl:px-[100px] mt-[50px]">
          <section className="overflow-hidden rounded-[28px] border border-primary/[0.14] bg-white shadow-[0_16px_56px_-18px_rgba(20,41,84,0.22)]">
            <div className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-10 xl:p-12">
              <div className="order-2 min-w-0 lg:order-1 lg:flex-1">
                <Reveal>
                  <h1 className="font-league-spartan font-semibold text-primary text-[40px] leading-[1.08] sm:text-[46px] lg:text-[58px] xl:text-[66px]">
                    Brokers At The Heart
                    <br />
                    Of Our Business
                  </h1>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="mt-6 max-w-[58ch] text-[17px] leading-relaxed text-[#2c2c2c] font-extralight font-gilroy-regular lg:text-[21px]">
                    We place brokers at the core of everything we do. We keep you updated on any changes in policies and rates,
                    ensuring that you&apos;re always in the loop. With{" "}
                    <a
                      href="https://lendingbridge.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      Lending Bridge
                    </a>
                    , brokers receive Introducer Fees and Proc Fees on the same day as completion, creating a seamless
                    process from start to finish.
                  </p>
                </Reveal>
              </div>
              <Reveal
                delay={0.4}
                className="order-1 flex w-full shrink-0 justify-center lg:order-2 lg:w-[42%] lg:min-w-[320px] lg:max-w-[500px]"
              >
                <div className="relative flex w-full items-center justify-center rounded-[24px] bg-[linear-gradient(160deg,#e8f0f6_0%,#f7fbff_60%,#e7eff5_100%)] px-4 py-6 sm:px-6 lg:p-8">
                  <Image
                    src="/svg/broker-page.svg"
                    width={460}
                    height={460}
                    alt="broker"
                    className="h-auto w-full max-w-[420px] object-contain"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </section>
          <div className="mt-[70px] mb-[60px]">
            <Reveal>
              <p className="text-[40px] lg:text-[70px] text-primary font-semibold font-league-spartan">
                Why Partner With Lending Bridge?
              </p>
            </Reveal>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-5 lg:mt-[60px]">
              <Reveal delay={0.2} className="w-full lg:w-[45%] mb-5 lg:mb-0">
                <div>
                  <p className="font-gilroy-bold text-[25px]">Exclusive Access:</p>
                  <p className="font-gilroy-regular font-extralight mt-5 text-[25px]">
                    Get in touch with our Underwriters and Relationship Managers directly. We respond to any inquiries within 2
                    hours, ensuring quick, efficient service.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.4} className="w-full lg:w-[45%]">
                <div>
                  <p className="font-gilroy-bold text-[25px]">Premium Benefits:</p>
                  <p className="font-gilroy-regular font-extralight mt-5 text-[25px]">
                    Enjoy invites to Networking Events, receive Industry Information through our newsletters, and gain exclusive
                    access to our box at the Football Tournament.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div className="mt-[60px]">
              <BrokerRegistrationForm />
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-[86px]">
              <BrokerInfo />
            </div>
          </Reveal>
        </div>
        <LoanProcess />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default BrokerPage;
