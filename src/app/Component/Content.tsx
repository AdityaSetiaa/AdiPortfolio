"use client";
import { Portfolio, mdTitle } from "../assets/Assets";
import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import TechStack from "./TechStack";
import Projects from "./Projects";
import ThemeToggle from "./Toggle";
import { File } from "lucide-react";

const Content = () => {
  const [selected, setSelected] = useState("About me");
  const words = ["Developer", "Designer"];
  const [index, setIndex] = useState(0);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setBlur(false);
      }, 900);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-300  h-full font-mono">
      <div className="flex  lg:flex-row flex-row gap-6  justify-between">
        <h1 className="text-6xl p-4 px-6 ">
          Aditya setia{" "}
          <span
            className={` h-fit w-fit sm:mt-[10] lg:mt-10 text-sm
        inline-block transition-all duration-900 justify-end border border-zinc-800 rounded-sm px-1 py-0.5  shadow-[inset_9px_9px_60px_rgba(255,255,255,0.05)_inset_-9px_-9px_60px_rgba(0,0,0,0.6)]

        ${
          blur
            ? "opacity-0 blur-sm duration-900"
            : "opacity-100 blur-0duration-900"
        }
      `}
          >
            {words[index]}
          </span>
        </h1>

        <div className="hidden lg:flex h-20 w-20 justify-end items-center">
          <ThemeToggle />
        </div>
      </div>
      <div className="flex gap-4 h-full w-full flex-row py-10 px-7 lg:px-0">
        {/* hidden floating div */}
        <div className="fixed inset-0 z-2 flex lg:hidden items-end justify-center mb-7 pointer-events-none">
          <div className="flex items-center justify-center gap-4 border border-zinc-600 p-3 rounded-2xl backdrop-blur-sm w-auto h-auto pointer-events-auto">
            {mdTitle.map((title) => (
              <div
                key={title.id}
                onClick={() => setSelected(title.title)}
                className={``}
              >
                <title.icon
                  className={`h-12 w-12 text-zinc-700 border p-3 rounded-2xl hover:scale-140 hover:bg- hover:opacity-55 hover:text-white hover:backdrop-blur-3xl animate-all duration-500 ${
                    selected === title.title
                      ? "dark:text-white opacity-60 backdrop-blur-2xl dark:bg-zinc-700 text-black "
                      : "hover:text-zinc-500"
                  }`}
                />
              </div>
            ))}
            <div
              className={`h-12 w-12 text-zinc-700 border p-3 rounded-2xl hover:scale-160 hover:bg- hover:opacity-55 hover:text-white hover:backdrop-blur-3xl animate-all duration-500 ${
                selected === ""
                  ? "dark:text-white opacity-60 backdrop-blur-2xl bg-zinc-500 text-black "
                  : "hover:text-zinc-500"
              }`}
            >
              <a href="https://drive.google.com/file/d/13u_9QlGHXrS5h-jkOkbCYpFkOTbwrRkL/view?usp=drivesdk"><File /></a>
            </div>

            <div className="min-h-12 border border-zinc-800 rounded-3xl -mx-2"></div>

            <div
              className={` text-zinc-700 border  rounded-2xl h-12 w-12  items-center justify-center hover:scale  hover:opacity-55 hover:text-zinc-200 hover:backdrop-blur-3xl animate-all duration-500 ${
                selected === ""
                  ? "dark:text-white opacity-70 backdrop-blur-2xl bg-zinc-700 text-black "
                  : "hover:text-zinc-500"
              }`}
            >
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* main sidebar */}
        <div className="2xl:w-70 lg:w-70 lg:flex flex-row p-4 justify-between hidden lg:block ">
          <div
            className="gap-2 flex flex-col relative"
            onWheel={(e) => {
              e.preventDefault();
              const sections = Portfolio.map((s) => s.title);
              const currentIndex = sections.indexOf(selected);

              // Scroll down - next section
              if (e.deltaY > 0 && currentIndex < sections.length - 1) {
                setSelected(sections[currentIndex + 1]);
              }
              // Scroll up - previous section
              else if (e.deltaY < 0 && currentIndex > 0) {
                setSelected(sections[currentIndex - 1]);
              }
            }}
          >
            {Portfolio.map((section) => (
              <div
                key={section.title}
                onClick={() => setSelected(section.title)}
                className={`
          group relative cursor-pointer py-1 px-2 -mx-2 rounded-md
          transition-all duration-300 ease-out
          ${
            selected === section.title
              ? "text-black dark:text-white"
              : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          }
        `}
              >
                {/* Subtle background on hover/selected */}
                <div
                  className={`
          absolute inset-0 rounded-md transition-all duration-300
          ${
            selected === section.title
              ? "bg-zinc-100 dark:bg-zinc-900"
              : "bg-transparent group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900/50"
          }
        `}
                />

                {/* Text */}
                <span
                  className={`
          relative inline-block transition-transform duration-300
          ${
            selected === section.title
              ? "translate-x-1"
              : "group-hover:translate-x-0.5"
          }
        `}
                >
                  {section.title}
                </span>

                {/* Active indicator line */}
                <div
                  className={`
          absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 rounded-full
          bg-zinc-800 dark:bg-zinc-300
          transition-all duration-300 ease-out
          ${
            selected === section.title
              ? "opacity-100 -translate-x-3"
              : "opacity-0 -translate-x-2"
          }
        `}
                />
              </div>
            ))}
          </div>

          <div className="w-0.5 bg-zinc-200 dark:bg-zinc-800 flex" />
        </div>

        {/* cool line to seperate */}

        {/*Content div */}
        <div className="h-full w-full overflow-hidden mt-5 mb-20">
          {selected === "About me" && <AboutMe />}
          {selected === "TechStack" && <TechStack />}
          {selected === "Project" && <Projects />}
        </div>
      </div>
    </div>
  );
};
export default Content;
