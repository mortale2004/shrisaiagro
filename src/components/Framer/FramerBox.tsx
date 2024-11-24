'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const FramerBox = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default FramerBox;
