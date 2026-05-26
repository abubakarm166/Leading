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

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  isLoading,
  className,
  ...buttonProps
}) => {
  const combinedCl = cn(
    "inline-flex items-center justify-center px-[56px] py-[20px] bg-primary rounded-full font-nunito-sans text-center cursor-pointer",
    className
  );

  return (
    <button {...buttonProps} className={combinedCl}>
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
