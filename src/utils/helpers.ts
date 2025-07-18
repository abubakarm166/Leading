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
        message: `This user has entered the following details - ${JSON.stringify(msgObject)}`,
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
