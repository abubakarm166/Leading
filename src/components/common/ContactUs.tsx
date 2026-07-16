"use client";
import { addContact } from "@/utils/api/contact";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import Input from "./Input";
import { validateFormInputs } from "@/utils/helpers";
import { LOAN_PURPOSE_OPTIONS, COMPANY_ADDRESS_LINE_1, COMPANY_ADDRESS_LINE_2, COMPANY_ADDRESS_COUNTRY, COMPANY_EMAIL, COMPANY_ENQUIRIES_EMAIL, COMPANY_PHONE } from "@/utils/constants";

interface Props {
  noBorder?: boolean;
}

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formikProps = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      message: "",
      propertyValue: "",
      loanRequired: "",
      loanPurpose: "",
      propertyAddress: "",
    },
    onSubmit: async (values, helpers) => {
      const errors = validateFormInputs(values);

      const hasErrors = Object.entries(errors)
        .filter(([, value]) => value !== "")
        .map(([, value]) => value);

      if (hasErrors.length > 0) {
        return toast.error(hasErrors?.[0]);
      }

      setIsLoading(true);
      const submitted = await addContact({
        name: `${values.firstName.trim()} ${values.lastName.trim()}`.trim(),
        number: values.number,
        email: values.email,
        message: values.message,
        propertyValue: values.propertyValue,
        loanRequired: values.loanRequired,
        loanPurpose: values.loanPurpose,
        propertyAddress: values.propertyAddress,
      });
      setIsLoading(false);

      if (!submitted) {
        return toast.error("Something went wrong. Please try again or call us directly.");
      }

      helpers.resetForm();
      toast.success("Thank you — your enquiry has been submitted.");
    },
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formikProps;

  return (
    <div className="px-6 py-9 rounded-[8px] border border-black bg-white w-full lg:w-[40%]">
      <p className="font-league-spartan text-[24px] font-bold">Get In Touch</p>
      <div className="mt-8 flex flex-col space-y-5">
        <div className="flex items-center gap-x-5">
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">First Name</p>
            <Input
              placeholder="Enter first name"
              className="border border-black px-3 py-[10px]"
              value={values.firstName}
              onChange={handleChange("firstName")}
            />
          </div>
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">Last Name</p>
            <Input
              placeholder="Enter last name"
              className="border border-black px-3 py-[10px]"
              value={values.lastName}
              onChange={handleChange("lastName")}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">
              Phone Number
            </p>
            <Input
              placeholder="Enter phone number"
              className="border border-black px-3 py-[10px]"
              value={values.number}
              onChange={handleChange("number")}
            />
          </div>
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">Email Address</p>
            <Input
              placeholder="Enter email address"
              className="border border-black px-3 py-[10px]"
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">
              Property Address <span className="font-gilroy-regular text-[13px] text-[#666]">(optional)</span>
            </p>
            <Input
              // rows={5}
              placeholder="Enter property address"
              className="w-full rounded-[4px] border border-black px-3 py-[10px]"
              value={values.propertyAddress}
              onChange={handleChange("propertyAddress")}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">
              Property Value <span className="font-gilroy-regular text-[13px] text-[#666]">(optional)</span>
            </p>
            <Input
              placeholder="Enter property value"
              className="border border-black px-3 py-[10px]"
              value={values.propertyValue}
              onChange={handleChange("propertyValue")}
            />
          </div>
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">
              Net Loan Required <span className="font-gilroy-regular text-[13px] text-[#666]">(optional)</span>
            </p>
            <Input
              placeholder="Enter net loan required"
              className="border border-black px-3 py-[10px]"
              value={values.loanRequired}
              onChange={handleChange("loanRequired")}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex-1 -mt-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">
              Purpose of the Loan <span className="font-gilroy-regular text-[13px] text-[#666]">(optional)</span>
            </p>
            <select
              className="border border-black py-[12px] w-full rounded-[5px]"
              value={values.loanPurpose}
              onChange={(e) => setFieldValue("loanPurpose", e.target.value)}
            >
              <option value="">Select purpose of the loan</option>
              {LOAN_PURPOSE_OPTIONS.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <p className="font-gilroy-medium text-[16px] mb-[6px]">
              Other Information <span className="font-gilroy-regular text-[13px] text-[#666]">(optional)</span>
            </p>
            <textarea
              rows={1}
              placeholder="Enter other information"
              className="w-full rounded-[4px] border border-black px-3 py-[10px]"
              value={values.message}
              onChange={handleChange("message")}
            />
          </div>
        </div>
        <div>
          <Button isLoading={isLoading} onClick={() => handleSubmit()}>
            <p className="uppercase text-white text-[15px]">Submit Enquiry</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ContactUs: React.FC<Props> = ({ noBorder }) => {
  return (
    <section className="w-screen px-5 lg:px-[50px] 2xl:px-[100px] py-[60px] relative overflow-hidden bg-primary-bg">
      <Image
        src="/svg/contact-us.svg"
        width={200}
        height={200}
        alt="contact-us"
        className="w-[550px] h-[300px] 2xl:w-[660px] 2xl:h-[420px] object-cover absolute bottom-0 right-[45%] hidden lg:block"
      />
      <div
        className={`flex flex-col lg:flex-row items-center justify-between ${
          !noBorder ? "border-t" : "border-none"
        } border-t-primary pt-5 lg:pt-[60px]`}
      >
        <div className="w-full lg:w-auto mb-6 lg:mb-32">
          <p className="text-[32px] font-bold font-league-spartan">
            Contact Us
          </p>
          <div className="mt-12">
            <div className="flex flex-row items-start space-x-[10px]">
              <Image
                src="/svg/location-black.svg"
                width={24}
                height={24}
                alt="location"
                className="w-6 h-6"
              />
              <div>
                <p className="font-gilroy-bold text-[16px]">Location</p>
                <p className="font-gilroy-regular text-[14px]">
                  {COMPANY_ADDRESS_LINE_1},
                  <br />
                  {COMPANY_ADDRESS_LINE_2},
                  <br />
                  {COMPANY_ADDRESS_COUNTRY}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start space-x-[10px] mt-5">
              <Image
                src="/svg/phone-black.svg"
                width={24}
                height={24}
                alt="location"
                className="w-6 h-6"
              />
              <div>
                <p className="font-gilroy-bold text-[16px]">Phone Number</p>
                <p className="font-gilroy-regular text-[14px]">{COMPANY_PHONE}</p>
              </div>
            </div>
            <div className="flex flex-row items-start space-x-[10px] mt-5">
              <Image
                src="/svg/mail-black.svg"
                width={24}
                height={24}
                alt="location"
                className="w-6 h-6"
              />
              <div>
                <p className="font-gilroy-bold text-[16px]">Mail</p>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="font-gilroy-regular text-[14px] underline block"
                >
                  {COMPANY_EMAIL}
                </a>
                <a
                  href={`mailto:${COMPANY_ENQUIRIES_EMAIL}`}
                  className="font-gilroy-regular text-[14px] underline block"
                >
                  {COMPANY_ENQUIRIES_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUs;
