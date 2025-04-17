"use client";
import { sendMail, validateEmail } from "@/utils/helpers";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import Modal from "react-responsive-modal";
import Button from "./Button";
import Input from "./Input";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  propertyType: string;
  noOfProperties: string;
  loanAmount: string;
  securityType: string;
  repaymentType: string;
  loanTerm: string;
  ltv: string;
}

const UserDetailsModal: React.FC<Props> = ({
  isOpen,
  propertyType,
  noOfProperties,
  loanAmount,
  loanTerm,
  securityType,
  repaymentType,
  ltv,
  onClose,
}) => {
  const formikProps = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: async (values, helpers) => {
      if (!values.name || !values.email || !values.phone) {
        return toast.error("Please enter all the details");
      }

      if (values.phone.length < 10 || isNaN(Number(values.phone))) {
        return toast.error("Please enter a valid number");
      }

      if (!validateEmail(values.email)) {
        return toast.error("Please enter a valid email");
      }

      await sendMail({
        name: values.name,
        email: values.email,
        number: values.phone,
        propertyType,
        noOfProperties,
        loanAmount,
        loanTerm,
        securityType,
        repaymentType,
        ltv,
      });
      helpers.resetForm();
      onClose();
      toast.success("Details submitted successfully");
    },
  });

  const { values, handleChange, handleSubmit } = formikProps;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      classNames={{ modal: "w-[90%] lg:min-w-[960px] bg-white rounded-[20px]" }}
    >
      <p className="font-league-spartan text-2xl font-semibold">
        Please provide us your details
      </p>
      <div className="flex flex-col items-center space-y-5 mt-5">
        <Input
          placeholder="Enter your name"
          className="border border-gray-400 py-3"
          onChange={handleChange("name")}
          value={values.name}
        />
        <Input
          placeholder="Enter your email"
          className="border border-gray-400 py-3"
          onChange={handleChange("email")}
          value={values.email}
        />
        <Input
          placeholder="Enter your phone"
          className="border border-gray-400 py-3"
          onChange={handleChange("phone")}
          value={values.phone}
        />
        <div className="flex flex-row items-center justify-end space-x-5 w-full">
          <Button
            className="bg-white border border-primary py-3"
            onClick={onClose}
          >
            <p className="text-primary font-gilroy-medium">Cancel</p>
          </Button>
          <Button className="py-3" onClick={() => handleSubmit()}>
            <p className="font-gilroy-medium text-white">Submit</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
