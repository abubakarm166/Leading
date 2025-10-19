"use client";
import { cn } from "@/utils/helpers";
import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  motionContainerClassName?: string;
}

const Reveal: React.FC<Props> = ({
  children,
  delay,
  className,
  motionContainerClassName,
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const combinedCls = cn("relative overflow-hidden", className);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        mainControls.start("visible");
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={combinedCls}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay }}
        className={motionContainerClassName}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
