"use client";

import { useState } from "react";

type AccordionProps = {
  title: string;
  content: string;
};

export default function Accordion({
  title,
  content,
}: AccordionProps) {

  const [open, setOpen] =
    useState(false);

  return (

    <div className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-xl">

      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-bold text-xl hover:bg-white/10 transition"
      >

        {title}

        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >

          ▼

        </span>

      </button>

      {/* Content */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          open
            ? "max-h-40 opacity-100 p-6"
            : "max-h-0 opacity-0 px-6"
        }`}
      >

        <p className="text-gray-300 leading-8">

          {content}

        </p>

      </div>

    </div>
  );
}