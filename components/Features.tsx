"use client";

import { useState } from "react";
import { FaBolt, FaMobileAlt, FaPalette } from "react-icons/fa";

export default function Features() {

  const [openCard, setOpenCard] = useState<number | null>(null);

const toggleCard = (card: number) => {
  setOpenCard(openCard === card ? null : card);
};


  return (
    <>

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="py-24 px-6 bg-gradient-to-b from-blue-50 to-pink-50"
      >

        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
          Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div
            onClick={() => toggleCard(1)}
            className="bg-white border border-yellow-200 p-8 rounded-3xl cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="bg-yellow-100 p-4 rounded-2xl">
                <FaBolt className="text-yellow-500 text-4xl" />
              </div>

              <h3 className="font-extrabold text-2xl text-gray-900">
                Fast Development
              </h3>

            </div>

            {openCard === 1 && (
              <p className="mt-6 text-gray-700 leading-8 text-base">
                Build websites quickly using reusable components,
                clean code structure, and modern frontend tools.
              </p>
            )}

          </div>

          {/* CARD 2 */}
          <div
            onClick={() => toggleCard(2)}
            className="bg-white border border-blue-200 p-8 rounded-3xl cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="bg-blue-100 p-4 rounded-2xl">
                <FaMobileAlt className="text-blue-500 text-4xl" />
              </div>

              <h3 className="font-extrabold text-2xl text-gray-900">
                Responsive Design
              </h3>

            </div>

            {openCard === 2 && (
              <p className="mt-6 text-gray-700 leading-8 text-base">
                Your website works perfectly on mobile,
                tablet, and desktop devices.
              </p>
            )}

          </div>

          {/* CARD 3 */}
          <div
            onClick={() => toggleCard(3)}
            className="bg-white border border-pink-200 p-8 rounded-3xl cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="bg-pink-100 p-4 rounded-2xl">
                <FaPalette className="text-pink-500 text-4xl" />
              </div>

              <h3 className="font-extrabold text-2xl text-gray-900">
                Modern UI
              </h3>

            </div>

            {openCard === 3 && (
              <p className="mt-6 text-gray-700 leading-8 text-base">
                Attractive colors, clean typography,
                and modern layouts create a premium feel.
              </p>
            )}

          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-100 via-white to-pink-100">

        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16">
          What People Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* TESTIMONIAL 1 */}
          <div className="bg-white/90 backdrop-blur-md p-10 rounded-[30px] shadow-xl border border-blue-100 hover:scale-105 hover:shadow-2xl transition duration-300">

            <p className="text-gray-700 text-lg italic leading-9">
              “Amazing experience! The interface is modern,
              responsive, and very user-friendly.”
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                A
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Alex Smith
                </h4>

                <p className="text-blue-600 font-medium">
                  Frontend Client
                </p>
              </div>

            </div>

          </div>

          {/* TESTIMONIAL 2 */}
          <div className="bg-white/90 backdrop-blur-md p-10 rounded-[30px] shadow-xl border border-pink-100 hover:scale-105 hover:shadow-2xl transition duration-300">

            <p className="text-gray-700 text-lg italic leading-9">
              “Very professional design with smooth layout
              and beautiful components.”
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xl">
                S
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Sarah Khan
                </h4>

                <p className="text-pink-600 font-medium">
                  UI/UX Reviewer
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}