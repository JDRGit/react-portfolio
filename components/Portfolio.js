// components/Portfolio.js
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "E-commerce App",
      image: web1,
      description: "An e-commerce application",
      github: "https://github.com/user/repo",
      netlify: "https://example.com/",
    },
    {
      id: 2,
      name: "Fitness App",
      image: web2,
      description: "A fitness tracking application",
      github: "https://github.com/user/repo",
      netlify: "https://example.com/",
    },
    {
      id: 3,
      name: "Social Media App",
      image: web3,
      description: "A social media application",
      github: "https://github.com/user/repo",
      netlify: "https://example.com/",
    },
  ];

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center mb-8  dark:text-gray-200">Portfolio</h2>
      <MotionConfig>
        <div className="flex flex-col gap-10 px-4 lg:px-0 py-10 lg:flex-row lg:flex-wrap">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="basis-1/2 flex-1 bg-white rounded-lg shadow-md p-4 cursor-pointer"
              layout
              onClick={() => handleClick(project.id)}
            >
              <motion.div
                layout
                className={`flex flex-col items-center ${
                  selectedId === project.id ? "space-y-4" : ""
                }`}
              >
                <Image
                  src={project.image}
                  className="rounded-lg object-cover"
                  width={selectedId === project.id ? "100%" : "50"}
                  height={selectedId === project.id ? "100%" : "50"}
                  alt={project.name}
                />
                <motion.p layout className="text-xl font-medium pt-8 pb-2">
                  {project.name}
                </motion.p>
              </motion.div>
              <AnimatePresence>
                {selectedId === project.id && (
                  <>
                    <motion.p
                      layout
                      className="mt-4 text-gray-700 text-center"
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      layout
                      className="mt-4 flex space-x-4 justify-center"
                    >
                      <a
                        href={project.github}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Github
                      </a>
                      <a
                        href={project.netlify}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Netlify
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
