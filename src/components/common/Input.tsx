import { cn } from "@/utils/helpers";
import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const combinedCls = cn("bg-white p-5 rounded-[5px] w-full", props.className);

  return <input {...props} className={combinedCls} />;
};

export default Input;
