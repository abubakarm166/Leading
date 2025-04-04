import { cn } from "@/utils/helpers";
import React, { ButtonHTMLAttributes } from "react";

interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const combinedCl = cn(
    "px-[56px] py-[20px] bg-primary rounded-full font-nunito-sans",
    props.className
  );

  return (
    <button {...props} className={combinedCl}>
      {props.children}
    </button>
  );
};

export default Button;
