import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import AnimatedMenu from "./AnimatedMenu";

export default function Header({ resume }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="container mx-auto px-6 py-4 dark:text-gray-200">
        <div className="flex items-center justify-between dark:text-gray-200 space-x-10">
          <div>
            <div className="navbar-item">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="navbar-item focus:outline-none"
              >
                <svg
                  className={`ham w-6 h-6 cursor-pointer transform ease-in-out duration-500 ${
                    menuOpen ? "rotate-90" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    className={`line top ${menuOpen ? "opacity-0" : ""}`}
                    d="M4 6h16"
                  ></path>
                  <path
                    className={`line middle ${
                      menuOpen ? "translate-x-[-60] mt-2" : ""
                    }`}
                    d="M4 12h16"
                  ></path>
                  <path
                    className={`line bottom ${
                      menuOpen ? "mt-[-20] rotate-45" : ""
                    }`}
                    d="M4 18h16"
                  ></path>
                </svg>
              </button>
              <AnimatedMenu isOpen={menuOpen} />
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-gray-200"
            />
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:from-pink-500 hover:to-yellow-500 download-resume"
              href={resume}
              download="Jaime_D_Rodriguez_Resume.pdf"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
