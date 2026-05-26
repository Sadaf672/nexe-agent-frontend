import Accordion from "@/components/Accordion";

export default function AccordionPage() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-16">

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">

          Accordion Component 🚀

        </h1>

        <p className="text-gray-400 text-lg md:text-2xl">

          Interactive expandable content sections

        </p>

      </div>

      {/* Accordions */}
      <div className="max-w-4xl mx-auto space-y-6">

        <Accordion
          title="What is Next.js?"
          content="Next.js is a React framework for building fast and modern web applications."
        />

        <Accordion
          title="What is Tailwind CSS?"
          content="Tailwind CSS is a utility-first CSS framework used to build beautiful responsive interfaces quickly."
        />

        <Accordion
          title="Why use reusable components?"
          content="Reusable components help create scalable and maintainable frontend applications."
        />

      </div>

    </div>
  );
}