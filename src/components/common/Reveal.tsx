"use client";
import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

const Reveal: React.FC<Props> = ({ children, delay }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        mainControls.start("visible");
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
