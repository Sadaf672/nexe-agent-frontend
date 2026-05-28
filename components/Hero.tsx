import Link from "next/link";

type HeroProps = {
  openModal: () => void;
};

export default function Hero({
  openModal,
}: HeroProps) {

  return (

    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-center pt-40 pb-28 px-6 min-h-screen flex flex-col items-center justify-center"
    >

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl">

        Build Modern <br />

        Websites Easily 

      </h1>

      {/* Paragraph */}
      <p className="mt-8 text-lg md:text-2xl text-gray-200 max-w-2xl leading-9">

        Create responsive and beautiful user interfaces
        using Next.js and Tailwind CSS.

      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <button
          onClick={openModal}
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-gray-200 transition shadow-2xl"
        >
          Open Modal
        </button>

        

      </div>

    </section>
  );
}