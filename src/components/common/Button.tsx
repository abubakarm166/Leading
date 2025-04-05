import { cn } from "@/utils/helpers";
import React, { ButtonHTMLAttributes } from "react";

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Loader = () => {
  return (
    <div className="w-4 h-4 rounded-full animate-spin border border-solid border-black border-t-transparent" />
  );
};

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const combinedCl = cn(
    "px-[56px] py-[20px] bg-primary rounded-full font-nunito-sans cursor-pointer",
    props.className
  );

  return (
    <button {...props} className={combinedCl}>
      {props.isLoading ? <Loader /> : props.children}
    </button>
  );
};

export default Button;
