import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState } from "react";


export default function Skills() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const skillItems = [
    {
      id: 1,
      image: design,
      alt: "Design icon",
      title: "Frontend Tools",
      description:
        "Essential libraries and frameworks for building and styling responsive, dynamic, and user-friendly React user interfaces.",
      toolsTitle: "Some Tools I use",
      tools: ["HTML 5", "CSS 3", "JavaScript", "TypeScript", "Next.JS", ],
    },
    {
      id: 2,
      image: code,
      alt: "Code icon",
      title: "Backend Tools",
      description:
        "Key technologies for creating scalable and efficient server-side components, APIs, and databases to power full-stack React applications.",
      toolsTitle: "Development tools I use",
      tools: ["Node.js", "Spring Boot", "Express.js"],
    },
    {
      id: 3,
      image: consulting,
      alt: "Consulting icon",
      title: "Languages",
      description:
        "A collection of helpful tools and platforms for version control, code quality, package management, and development workflow optimization in full-stack React projects.",
      toolsTitle: "Programming languages I use",
      tools: ["Java", "Python", "SQL",],
    },
  ];

  return (
    <section>
      <div className="lg:flex gap-10">
        {skillItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white"
          >
            <Image src={item.image} width={100} height={100} alt={item.alt} />
            <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">{item.title}</h3>
            <div>
              <p className="py-2">{item.description}</p>
              <h4 className="py-4 text-teal-600">{item.toolsTitle}</h4>
              {item.tools.map((tool, index) => (
                <p key={index} className="text-gray-800 py-1">
                  {tool}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
