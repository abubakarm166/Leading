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
      timeout: 15_000,
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
    console.error("[sendMail] failed:", err);
    return false;
  }
};

export const validateFormInputs = (values: {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
  message?: string;
  propertyValue?: string;
  loanRequired?: string;
  loanPurpose?: string;
  propertyAddress?: string;
}) => {
  const errors = {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
  };

  if (!values.firstName?.trim()) {
    errors.firstName = "Please enter your first name";
  }

  if (!values.lastName?.trim()) {
    errors.lastName = "Please enter your last name";
  }

  if (!values.number?.trim()) {
    errors.number = "Please enter your phone number";
  } else if (!values.number.match(/^[+]?[\d\s()-]{7,20}$/)) {
    errors.number = "Please enter a valid phone number";
  }

  if (!values.email?.trim()) {
    errors.email = "Please enter your email address";
  } else if (
    !values.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  ) {
    errors.email = "Please enter a valid email address";
  }

  return errors;
};

/** Strip HTML for short previews so truncation never splits tags (avoids stray `<`). */
export const stripHtmlToPlainText = (html: string): string => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
};

export const truncatePlainText = (text: string, maxLen: number): string => {
  if (!text || text.length <= maxLen) return text || "";
  return `${text.slice(0, maxLen).trimEnd()}...`;
};

/** CMS HTML cleanup for full article bodies (duplicate brackets, empty blocks). */
export const sanitizeBlogArticleHtml = (html: string): string => {
  if (!html) return "";
  let s = html.replace(/<p>\s*<\/p>/gi, "").replace(/<p><\/p>/g, "<br />");
  s = s.replace(/<\s*</g, "<");
  return s.trim();
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
