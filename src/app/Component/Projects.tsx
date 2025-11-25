"use client";
import { Projects } from "../assets/Assets";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link } from "lucide-react";
import { Github } from "lucide-react";

const Project = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      <div className="w-full h-full overflow-y-hidden flex flex-col gap-4">
        <h1 className="text-5xl mb-2">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {Projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`
                group relative rounded 
                border transition-all duration-300 overflow-hidden font-mono cursor-pointer
                ${
                  isDark
                    ? "bg-black border-gray-700 hover:border-gray-500"
                    : "bg-black border-gray-300 hover:border-gray-500"
                }
                ${openIndex === i ? (isDark ? "border-gray-500" : "border-gray-500") : ""}
              `}
              style={{ animation: `fadeIn 0.4s ease-out ${i * 0.1}s both` }}
            >
              <div
                className={`
                relative h-70 w-full overflow-hidden border-b
                ${isDark ? "bg-black border-gray-700" : " border-gray-300"}
              `}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={300}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    openIndex === i 
                      ? "opacity-40 grayscale-0" 
                      : "opacity-60 grayscale group-hover:opacity-40 group-hover:grayscale-0"
                  }`}
                />
                <div
                  className={`
                  absolute inset-0 transition-opacity duration-700
                  ${
                  isDark ? "bg-linear-to-b from-transparent via-black/80 to-black  h-full" : "bg-linear-to-b from-wh via-white/80 to-white  h-full"
                }
                ${openIndex === i ? "opacity-90" : "opacity-0 group-hover:opacity-90"}
                `}
                />
              </div>

              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 space-y-3 pointer-events-none transition-all duration-300 ${
                  openIndex === i 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h1
                    className={`text-sm font-normal transition-colors ${
                      isDark
                        ? "text-gray-300 group-hover:text-white"
                        : "text-gray-950 group-hover:text-black"
                    }
                    ${openIndex === i ? (isDark ? "text-white" : "text-black") : ""}
                    `}
                  >
                    {project.name}
                  </h1>
                  <span
                    className={`px-2 py-0.5 text-xs  ${
                      isDark
                        ? "text-gray-400 -gray-700"
                        : "text-gray-950 -gray-400"
                    }`}
                  >
                    {project.status === "finished" ? (
                      <span className="px-2 py-0.5 text-xs font-medium rounded border text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/20 border-green-300 dark:border-green-800">
                        Finished
                      </span>
                    ) : project.status === "in progress" ? (
                      <span className="px-2 py-0.5 text-xs font-medium rounded border text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-300 dark:border-yellow-800">
                        In Progress
                      </span>
                    ) : project.status === "upcoming" ? (
                      <span className="px-2 py-0.5 text-xs font-medium rounded border text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-800">
                        Upcoming
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-xs font-medium rounded border text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-950/20 border-gray-300 dark:border-gray-800">
                        Unknown
                      </span>
                    )}
                  </span>
                </div>
                <p
                  className={`text-xs line-clamp-3 leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {project.about}
                </p>
                <div className="flex gap-2 pt-2 text-xs pointer-events-auto">
                  <span>
                    {project.link && (
                      <a
                        href={project.link}
                        className={`flex-1 text-center px-3 py-1.5  transition-colors duration-200 ${
                          isDark
                            ? "text-gray-300 border-gray-700 hover:border-gray-500 hover:text-white"
                            : "text-gray-950 border-gray-400 hover:-gray-600 hover:text-black"
                        }`}
                      >
                        <Link />
                      </a>
                    )}
                  </span>
                  <span>
                    {project.github && (
                      <a
                        href={project.github}
                        className={`flex-1 text-center px-3 py-1.5  transition-colors duration-200 ${
                          isDark
                            ? "text-gray-300 -gray-700 hover:border-gray-500 hover:text-white"
                            : "text-gray-700 -gray-400 hover:-gray-600 hover:text-black"
                        }`}
                      >
                        <Github />
                      </a>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
