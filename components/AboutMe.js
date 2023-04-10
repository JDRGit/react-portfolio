import Image from "next/image";
import dev from "../public/dev.png";

export default function AboutMe() {
  return (
    <section>
      <div className="text-center px-10 py-8 space-y-4">
        <h2 className="text-5xl text-teal-600 font-medium md:text-6xl">
          Jaime D. Rodriguez
        </h2>
        <div className="flex justify-center">
          <div className="flex justify-center items-center gap-10 py-10 lg:flex-row lg:flex-wrap relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 profile-image-container">
            <Image
              src={dev}
              layout="fill"
              objectFit="scale-down"
              alt="developer"
            />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl dark:text-gray-200">
          Software Engineer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
          Hi there! welcome to my website. I enjoy developing web solutions that
          help individuals and companies address challenges and streamline
          processes. When I'm not coding, you can find me training for long
          distance races, hiking, reading, or exploring the latest technologies.
        </p>
      </div>

      <div className="flex flex-col justify-center text-justify">
        <h3 className="text-3xl py-1 dark:text-white">About Me</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am a Full Stack React Developer, having completed an intensive
          15-week remote technical training program at Per Scholas from November
          2022 to March 2023. Throughout the course, I gained hands-on
          experience in web development, software engineering, and React
          development, which helped me build a progressive portfolio. I have a
          strong understanding of JavaScript and Computer Science concepts,
          including object-oriented programming, Git, advanced HTML/CSS, and
          Redux. I've built Single Page Applications and web applications using
          React, gaining familiarity with client-side routing, AJAX, Fetch, and
          the Context API. My full stack development experience extends to Java
          and the Spring Boot framework, enabling me to create full CRUD
          applications, implement token-based authentication, and work with
          REST. I pride myself on my excellent problem-solving skills and
          ability to think like a software engineer. I'm now eager to apply my
          expertise to new job opportunities in the software development field.
        </p>
      </div>
    </section>
  );
}