import Image from "next/image";
import dev from "../public/dev.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function AboutMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTerminalOpen, setTerminalOpen] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTerminalClick = () => {
    setTerminalOpen(!isTerminalOpen);
  };

  const handleNameClick = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 8000);
  };

  return (
    <section>
      {confetti && <Confetti />}
      <div className="text-center px-10 py-8 space-y-4">
        <h2
          className="text-5xl text-teal-600 font-medium md:text-6xl cursor-pointer"
          onClick={handleNameClick}
        >
          Jaime D. Rodriguez
        </h2>
        <div className="flex justify-center">
          <div className="flex justify-center items-center gap-10 py-10 lg:flex-row lg:flex-wrap relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 profile-image-container">
            <Image
              src={dev}
              layout="fill"
              objectFit="scale-down"
              alt="developer"
            />
          </div>
        </div>
        <h3 className="text-3xl md:text-3xl dark:text-gray-200">
          Software Engineer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
          Hi there! welcome to my website. I enjoy developing web solutions that
          help individuals and companies address challenges and streamline
          processes. When I'm not coding, you can find me training for long
          distance races 🏃🏽‍♂️, hiking 🥾, reading 📚, or exploring the latest technologies 👨🏽‍💻.
        </p>
        <div
          className="flex items-center justify-center"
          onClick={handleTerminalClick}
        >
          <div className="w-56 h-48">
            <div className="h-7 flex items-center px-2 rounded-t-md bg-gradient-to-b from-gray-700 to-gray-600">
              <div className="flex items-center">
                <button className="flex justify-center items-center px-0 mr-1 text-xs h-3 w-3 rounded-full bg-red-600"></button>
                <button className="flex justify-center items-center px-0 mr-1 text-xs h-3 w-3 rounded-full bg-gray-600"></button>
                <button className="flex justify-center items-center px-0 mr-1 text-xs h-3 w-3 rounded-full bg-green-600"></button>
              </div>
              <p className="text-gray-300 ml-1 text-sm">jaime@admin: ~</p>
            </div>
            <div className="bg-teal-600 h-full pt-0.5 -mt-0.5 text-sm rounded-b-md">
              <div className="flex ml-1">
                <span className="text-green-400 ml-1">jaime@admin:</span>
                <span className="text-blue-500 ml-1">~</span>
                <span className="text-gray-300 ml-1">$</span>
                <span className="block h-4 w-1 ml-2 animate-blink"></span>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isTerminalOpen && (
            <motion.p
              className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              I am a Full Stack React Developer, having completed an intensive
              15-week remote technical training program at Per Scholas from
              November 2022 to March 2023. Throughout the course, I gained
              hands-on experience in web development, software engineering, and
              React development, which helped me build a progressive portfolio.
              I have a strong understanding of JavaScript and Computer Science
              concepts, including object-oriented programming, Git, advanced
              HTML/CSS, and Redux. I've built Single Page Applications and web
              applications using React, gaining familiarity with client-side
              routing, AJAX, Fetch, and the Context API. My full stack
              development experience extends to Java and the Spring Boot
              framework, enabling me to create full CRUD applications, implement
              token-based authentication, and work with REST. I pride myself on
              my excellent problem-solving skills and ability to think like a
              software engineer. I'm now eager to apply my expertise to new job
              opportunities in the software development field.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
