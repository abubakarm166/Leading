import axios from "axios";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const sendMail = async ({
  name,
  email,
  number,
  propertyType,
  noOfProperties,
  loanAmount,
  securityType,
  repaymentType,
  loanTerm,
  ltv,
}: {
  name: string;
  email: string;
  number: string;
  propertyType: string;
  noOfProperties: string;
  loanAmount: string;
  securityType: string;
  repaymentType: string;
  loanTerm: string;
  ltv: string;
}) => {
  try {
    if (!name || !email || !number) {
      return alert("Please enter the required fields");
    }

    if (!validateEmail(email)) {
      return alert("Please enter a valid email address");
    }

    const msgObject = {
      propertyType,
      noOfProperties,
      loanAmount,
      securityType,
      repaymentType,
      loanTerm,
      ltv,
    };

    await axios.get("https://send-mail-server-weld.vercel.app", {
      params: {
        name,
        email,
        phone: number,
        message: `This user has entered the following details - ${JSON.stringify(
          msgObject
        )}`,
        from: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
        to: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
      },
      headers: {
        Authorization: process.env.NEXT_PUBLIC_MAIL_AUTH,
      },
    });

    return true;
  } catch (err) {
    console.log("ERROR: ", err);
    return false;
  }
};

export const validateFormInputs = (values: {
  name: string;
  number: string;
  email: string;
  message: string;
  propertyValue: string;
  loanRequired: string;
  loanPurpose: string;
  propertyAddress: string;
}) => {
  const errors: typeof values = {
    name: "",
    number: "",
    email: "",
    message: "",
    propertyValue: "",
    loanRequired: "",
    loanPurpose: "",
    propertyAddress: "",
  };

  if (!values.name) {
    errors.name = "Please enter your name";
  }

  if (!values.message) {
    errors.message = "Please enter your message";
  }

  if (!values.propertyValue) {
    errors.propertyValue = "Please enter the property value";
  }

  if (!values.loanRequired) {
    errors.loanRequired = "Please enter the amount of loan required";
  }

  if (!values.loanPurpose) {
    errors.loanPurpose = "Please select the purpose of the loan";
  }

  if (!values.propertyAddress) {
    errors.propertyAddress = "Please enter the property address";
  }

  if (!/^\d+$/.test(values.propertyValue)) {
    errors.propertyValue = "Please enter the property value";
  }

  if (!/^\d+$/.test(values.loanRequired)) {
    errors.loanRequired = "Please enter the net loan required";
  }

  if (!values.number.match(/^[+]?[1-9]\d{1,14}$/)) {
    errors.number = "Please enter a valid number";
  }

  if (!values.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    errors.email = "Please enter a valid email";
  }

  return errors;
};

export const convertH2ToH1 = (htmlString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const h1Elements = doc.querySelectorAll("h1");
  h1Elements.forEach((h1) => {
    h1.outerHTML = h1.outerHTML
      .replace(/^<h1/, "<h2")
      .replace(/<\/h1>$/, "</h2>");
  });
  const modifiedHtml = doc.body.innerHTML;

  return modifiedHtml;
};
