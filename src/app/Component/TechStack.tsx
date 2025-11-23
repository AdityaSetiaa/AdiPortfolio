import React, { useState, memo, useEffect, useRef } from "react";
import { Tools } from "../assets/Assets";

type AssetItem = {
  name: string;
  icon: React.ElementType;
  gradient: string;
  link?: string;
};

const TechItem = memo(
  ({ item, index }: { item: AssetItem; index: number; category: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = item.icon;

    return (
      <div
        className="group relative"
        style={{
          animation: `fadeIn 0.4s ease-out ${index * 0.03}s both`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={` 
        relative flex items-center gap-2.5 px-3.5 py-2 rounded-lg h-10
        border border-zinc-200 dark:border-zinc-800
        bg-white dark:bg-zinc-900
        transition-all duration-300 ease-out cursor-pointer
        ${isHovered ? "border-zinc-400 dark:border-zinc-600 shadow-md" : ""}
      `}
        >
          <div
            className={`
          absolute inset-0 rounded-lg
          bg-linear-to-r ${item.gradient} 
          transition-opacity duration-300
          ${isHovered ? "opacity-[0.08]" : "opacity-0"}
        `}
          />

          {/* Icon container */}
          <div
            className={`
          relative flex items-center justify-center
          w-6 h-6 rounded transition-all duration-300
          ${isHovered ? "scale-110" : ""}
        `}
          >
            <IconComponent
              className={`
            w-5 h-5 transition-colors duration-300
            ${
              isHovered
                ? "text-zinc-900 dark:text-zinc-100"
                : "text-zinc-600 dark:text-zinc-400"
            }
          `}
            />
          </div>

          {/* Name */}
          <span
            className={`
          text-sm font-medium transition-all duration-300
          ${
            isHovered
              ? "text-zinc-900 dark:text-zinc-100 translate-x-0.5"
              : "text-zinc-700 dark:text-zinc-300"
          }
        `}
          >
            {item.name}
          </span>

          {/* Bottom accent line */}
          <div
            className={`
          absolute bottom-0 left-0 h-0.5 rounded-full
          bg-linear-to-r ${item.gradient}
          transition-all duration-300 ease-out
          ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"}
        `}
          />
        </div>
      </div>
    );
  }
);

TechItem.displayName = "TechItem";

const TechStack = () => {
  const sections = [
    { title: "Languages", key: "Languages" },
    { title: "Frameworks", key: "Frameworks" },
    { title: "Databases", key: "Databases" },
    { title: "DevTools", key: "DevTools" },
  ];

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
      <h1 className="text-5xl mb-2">TechStacks</h1>
      <div className="w-full h-full flex flex-col gap-y-3 px-">
        {sections.map((section) => (
          <div key={section.key} className="space-y-3 will-change-auto">
            {/* Simple header */}
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-500 tracking-tight ">
              {section.title}
            </h2>

            {/* Tech items */}
            <div className="flex gap-3 flex-wrap">
              {Tools.map((tool) =>
                tool[section.key as keyof typeof tool]?.map(
                  (item: AssetItem, itemIndex: number) => (
                    <TechItem
                      key={`${section.key}-${item.name}`}
                      item={item}
                      index={itemIndex}
                      category={section.key}
                    />
                  )
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
