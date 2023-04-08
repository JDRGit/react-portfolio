// components/Portfolio.js
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";

const Portfolio = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/2 flex-1">
              <p>In Progress</p>
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="E-commerce App"
              />
            </div>
            <div className="basis-1/2 flex-1">
              <p>In Progress</p>
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="Fitness App"
              />
            </div>
            <div className="basis-1/2 flex-1">
              <p>In Progress</p>
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="Social Media App"
              />
            </div>
          </div>
    </section>
  );
};

export default Portfolio;
