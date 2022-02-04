import { motion } from "framer-motion";
import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      ease="easeIn"
      className="px-5 text-left bg-[#303030] mb-2 text-xl lg:text-2xl  transition-all rounded"
    >
      <div
        className="flex justify-between items-center p-5 h-16 lg:h-20  cursor-pointer  "
        onClick={handleAccordion}
      >
        <div>{title}</div>
        <div className="text-5xl transition-all  ">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          ease="easeIn"
          className={`p-5 transition-all  `}
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Accordion;
