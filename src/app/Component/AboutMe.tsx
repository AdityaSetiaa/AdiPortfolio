import React from "react";
import { info } from "../assets/Assets";
import Image from "next/image";

type AssetItem = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
};

const AboutMe = () => {
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

      <div 
        className="lg:w-[70%] h-full flex flex-col gap-y-4 justify-between pb-10"
        style={{
          animation: 'fadeIn 0.5s ease-out both'
        }}
      >
        <div className="">
          <h1 className="text-5xl mb-2">Hello</h1>
          <div className="gap-6">
            {info.map((about, i) => (
              <div 
                className="" 
                key={i}
                style={{
                  animation: `fadeIn 0.4s ease-out ${i * 0.1}s both`
                }}
              >
                <div className="text-zinc-500">{about.About}</div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="flex flex-col gap-3"
          style={{
            animation: 'fadeIn 0.5s ease-out 0.3s both'
          }}
        >
          <div className="flex gap-4">
            {info
              .flatMap((item) => ("socials" in item ? item.socials ?? [] : []))
              .map((social: AssetItem, i: number) => (
                <div 
                  key={i}
                  style={{
                    animation: `fadeIn 0.4s ease-out ${0.4 + i * 0.05}s both`
                  }}
                >
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <social.icon className="h-9 w-7 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-300" />
                  </a>
                </div>
              ))}
          </div>
          <div className="h-px w-full bg-zinc-500 rounded"></div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Contact me at:</h1>
            <a 
              href="mailto:adityasetia@outlook.com"
              className=" dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              adityasetia@outlook.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;