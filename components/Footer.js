import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
        <a
          href="mailto:rodriguez.d.jaime@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiOutlineMail />
        </a>
        <a
          href="https://www.linkedin.com/in/jaime-d-rodriguez"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/JDRGit"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <AiFillGithub />
        </a>
      </div>
      
    </>
  );
}
