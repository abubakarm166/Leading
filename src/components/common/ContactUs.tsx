"use client";
import { addContact } from "@/utils/api/contact";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "./Button";
import Input from "./Input";

interface Props {
  noBorder?: boolean;
}

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formikProps = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, helpers) => {
      if (!values.name || !values.email || !values.message || !values.number) {
        return toast.error("Please enter all the details");
      }

      setIsLoading(true);
      await addContact(values);
      helpers.resetForm();
      setIsLoading(false);
    },
  });

  const { values, handleChange, handleSubmit } = formikProps;

  return (
    <div className="px-6 py-9 rounded-[8px] border border-black bg-white w-full lg:w-[40%]">
      <p className="font-league-spartan text-[24px] font-bold">Get In Touch</p>
      <div className="mt-8 flex flex-col space-y-5">
        <div>
          <p className="font-gilroy-medium text-[16px] mb-[6px]">Full Name</p>
          <Input
            placeholder="Enter Full Name"
            className="border border-black px-3 py-[10px]"
            value={values.name}
            onChange={handleChange("name")}
          />
        </div>
        <div>
          <p className="font-gilroy-medium text-[16px] mb-[6px]">Phone Number</p>
          <Input
            placeholder="Enter Phone Number"
            className="border border-black px-3 py-[10px]"
            value={values.number}
            onChange={handleChange("number")}
          />
        </div>
        <div>
          <p className="font-gilroy-medium text-[16px] mb-[6px]">Mail</p>
          <Input
            placeholder="Enter Mail"
            className="border border-black px-3 py-[10px]"
            value={values.email}
            onChange={handleChange("email")}
          />
        </div>
        <div>
          <p className="font-gilroy-medium text-[16px] mb-[6px]">Message</p>
          <textarea
            rows={5}
            placeholder="Enter Message"
            className="w-full rounded-[4px] border border-black px-3 py-[10px]"
            value={values.message}
            onChange={handleChange("message")}
          />
        </div>
        <div>
          <Button isLoading={isLoading} onClick={() => handleSubmit()}>
            <p className="uppercase text-white text-[15px]">Submit</p>
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
        <div className="w-full lg:w-auto mb-6 lg:mb-0">
          <p className="text-[32px] font-bold font-league-spartan">Contact Us</p>
          <div className="mt-12">
            <div className="flex flex-row items-start space-x-[10px]">
              <Image src="/svg/location-black.svg" width={24} height={24} alt="location" className="w-6 h-6" />
              <div>
                <p className="font-gilroy-bold text-[16px]">Location</p>
                <p className="font-gilroy-regular text-[14px]">
                  101-103 Branston St,
                  <br />
                  Birmingham B18 6BA,
                  <br />
                  United Kingdom
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start space-x-[10px] mt-5">
              <Image src="/svg/phone-black.svg" width={24} height={24} alt="location" className="w-6 h-6" />
              <div>
                <p className="font-gilroy-bold text-[16px]">Phone Number</p>
                <p className="font-gilroy-regular text-[14px]">020 3725 0589</p>
              </div>
            </div>
            <div className="flex flex-row items-start space-x-[10px] mt-5">
              <Image src="/svg/mail-black.svg" width={24} height={24} alt="location" className="w-6 h-6" />
              <div>
                <p className="font-gilroy-bold text-[16px]">Mail</p>
                <a href="mailto:info@lendingbridge.co.uk" className="font-gilroy-regular text-[14px] underline block">
                  info@lendingbridge.co.uk
                </a>
                <a href="mailto:enquiries@lendingbridge.co.uk" className="font-gilroy-regular text-[14px] underline block">
                  enquiries@lendingbridge.co.uk
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
