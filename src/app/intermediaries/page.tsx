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
    <div className="flex flex-col 2xl:flex-row items-start justify-between pb-[50px]">
      <p className="font-league-spartan font-bold text-[40px] lg:text-[70px] text-primary mb-5 lg:mb-0">
        Information <br className="hidden 2xl:block" />
        You Need <br className="hidden 2xl:block" />
        To Know
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[80px] mx-auto 2xl:mx-0">
        {BROKER_INFO.map((item) => (
          <Reveal key={item.id} delay={0.2 * item.id} className="overflow-visible">
            <div
              className="group w-[260px] h-[177px] rounded-[20px] border border-primary flex flex-col items-center justify-center px-[34px] space-y-[20px] hover:scale-125 hover:bg-primary transition-all"
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
    <main className="relative overflow-x-hidden bg-primary-bg">
      <Navbar />
      <div className="px-5 lg:px-[100px] mt-[50px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="order-2 lg:order-1 mt-10 lg:mt-0">
            <Reveal>
              <h1 className="font-league-spartan font-semibold text-primary text-[50px] lg:text-[70px]">
                Brokers At The Heart
                <br />
                Of Our Business
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[18px] lg:text-[25px] font-extralight font-gilroy-regular mt-[30px] max-w-full lg:max-w-[60%]">
                We place brokers at the core of everything we do. We keep you updated on any changes in policies and rates,
                ensuring that you&apos;re always in the loop. With Lending Bridge, brokers receive Introducer Fees and Proc Fees
                on the same day as completion, creating a seamless process from start to finish.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.4} className="order-1 lg:order-2 w-[90%] 2xl:w-[70%]">
            <Image
              src="/svg/broker-page.svg"
              width={360}
              height={360}
              alt="broker"
              className="w-[360px] h-[360px] object-cover"
            />
          </Reveal>
        </div>
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
  );
};

export default BrokerPage;
