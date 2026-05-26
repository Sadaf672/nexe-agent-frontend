"use client";

import Input from "@/components/ui/Input";

export default function InputDocsPage() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10">

      {/* Heading */}
      <div className="text-center mb-16">

        <h1 className="text-6xl font-extrabold text-white mb-5">

          Input Documentation ✨

        </h1>

        <p className="text-gray-400 text-xl">

          Advanced reusable input component showcase

        </p>

      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-[40px] p-10 shadow-2xl border border-white/10">

        <h2 className="text-3xl font-bold text-white mb-10">

          Input Variants

        </h2>

        <div className="space-y-6">

          <Input
            placeholder="Enter your name"
          />

          <Input
            placeholder="Enter your email"
            type="email"
          />

          <Input
            placeholder="Enter password"
            type="password"
          />

        </div>

      </div>

    </div>
  );
}