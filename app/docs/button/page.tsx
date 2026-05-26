"use client";

import Button from "@/components/ui/Button";

export default function ButtonDocsPage() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-10">

      <div className="text-center mb-16">

        <h1 className="text-6xl font-extrabold text-white mb-5">

          Button Documentation 🚀

        </h1>

        <p className="text-gray-400 text-xl">

          Advanced reusable component showcase

        </p>

      </div>

      <div className="bg-white/10 rounded-[40px] p-10 shadow-2xl">

        <h2 className="text-3xl text-white font-bold mb-10">

          Variants

        </h2>

        <div className="flex flex-wrap gap-6">

          <Button
            text="Primary"
            variant="primary"
            size="md"
          />

          <Button
            text="Secondary"
            variant="secondary"
            size="md"
          />

          <Button
            text="Outline"
            variant="outline"
            size="md"
          />

          <Button
            text="Large"
            variant="primary"
            size="lg"
          />

          <Button
            text="Small"
            variant="secondary"
            size="sm"
          />

        </div>

      </div>

    </div>
  );
}