import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "GratefulMe App",
      image: web1,
      description: "A wellnes gratitude application",
      github: "https://github.com/JDRGit/gratefulme-app",
      netlify: "https://jaimedrodriguezgratefulme.netlify.app/",
    },
    {
      id: 2,
      name: "Organic Coffee Shop",
      image: web2,
      description: "Organic Coffee Shop e-commerce platform of ethically sourced coffee",
      github: "https://github.com/JDRGit/organic-coffee-shop",
      netlify: "https://jaimesorganiccoffeeshop.netlify.app/",
    },
    {
      id: 3,
      name: "Social Media App",
      image: web3,
      description: "Coming Soon, A social media application",
      github: "https://github.com/user/repo",
      netlify: "https://example.com/",
    },
  ];

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center mb-8  dark:text-gray-200">
        Portfolio
      </h2>
      <MotionConfig>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-0 py-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex flex-col gap-6 bg-white rounded-lg shadow-lg p-4 cursor-pointer transform transition-transform duration-500 hover:scale-105"
              layout
              onClick={() => handleClick(project.id)}
            >
              <motion.div
                layout
                className={`flex flex-col items-center ${
                  selectedId === project.id ? "space-y-4" : ""
                }`}
              >
                <div className="relative w-full h-60">
                  <Image
                    src={project.image}
                    layout="fill"
                    className="rounded-lg object-cover"
                    alt={project.name}
                  />
                </div>
                <motion.h3 layout className="text-xl font-medium pt-2">
                  {project.name}
                </motion.h3>
              </motion.div>
              <AnimatePresence>
                {selectedId === project.id && (
                  <>
                    <motion.p layout className="text-gray-700">
                      {project.description}
                    </motion.p>
                    <motion.div
                      layout
                      className="flex items-center justify-between"
                    >
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                      >
                        <FiGithub />
                        <span>Github</span>
                      </a>
                      <a
                        href={project.netlify}
                        className="flex items-center space-x-2 text-green-500 hover:text-green-600"
                      >
                        <FiExternalLink />
                        <span>Netlify</span>
                      </a>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </MotionConfig>
    </section>
  );
};

export default Portfolio;
