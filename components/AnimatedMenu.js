import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    display: "block",
    transition: {
      delay: 0.3,
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    display: "none",
    transition: {
      delay: 0.1,
    },
  },
};

const AnimatedMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuItemVariants}
          className="flex flex-col space-y-4 absolute bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg"
        >
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="mailto:rodriguez.d.jaime@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineMail className="text-2xl dark:text-gray-200" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="https://www.linkedin.com/in/jaime-d-rodriguez" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-2xl dark:text-gray-200" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="https://github.com/JDRGit" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="text-2xl dark:text-gray-200" />
            </a>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default AnimatedMenu;
