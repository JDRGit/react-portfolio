import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

export default function Skills() {
  return (
    <section>
      

          <div className="lg:flex gap-10 ">
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} alt="Design icon" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Frontend Tools</h3>
              <p className="py-2">
                Essential libraries and frameworks for building and styling
                responsive, dynamic, and user-friendly React user interfaces.
              </p>
              <h4 className="py-4 text-teal-600">Some Tools I use</h4>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
              <p className="text-gray-800 py-1">Styled-components</p>
              <p className="text-gray-800 py-1">Material-UI</p>
            </div>

            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} alt="Code icon" />
              <h3 className="text-lg font-medium pt-8 pb-2">Backend Tools</h3>
              <p className="py-2">
                Key technologies for creating scalable and efficient server-side
                components, APIs, and databases to power full-stack React
                applications.
              </p>
              <h4 className="py-4 text-teal-600">Development tools I use</h4>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">MySQL</p>
              <p className="text-gray-800 py-1">Express.js</p>
            </div>

            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="Consulting icon"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
              <p className="py-2">
                A collection of helpful tools and platforms for version control,
                code quality, package management, and development workflow
                optimization in full-stack React projects.
              </p>
              <h4 className="py-4 text-teal-600">
                Programming languages I use
              </h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Java</p>
            </div>
          </div>
    </section>
  );
}
