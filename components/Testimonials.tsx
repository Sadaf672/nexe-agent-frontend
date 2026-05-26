export default function Testimonials() {

  const testimonials = [
    {
      name: "Ali",
      role: "Frontend Client",
      review:
        "Amazing UI and smooth experience. Highly recommended!",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Sara",
      role: "UI/UX Reviewer",
      review:
        "Very modern and responsive dashboard design.",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (

    <section
      id="testimonials"
      className="bg-gradient-to-b from-gray-100 to-white py-24 px-6"
    >

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-5xl font-extrabold text-black">

          What People Say 💬

        </h2>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">

          Reviews from our happy clients and users

        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {testimonials.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-[30px] shadow-xl p-8 hover:scale-105 transition duration-300 border border-gray-100"
          >

            {/* Top */}
            <div className="flex items-center gap-5 mb-6">

              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
              >

                {item.name.charAt(0)}

              </div>

              <div>

                <h3 className="text-2xl font-bold text-black">

                  {item.name}

                </h3>

                <p className="text-gray-500">

                  {item.role}

                </p>

              </div>

            </div>

            {/* Review */}
            <p className="text-gray-700 text-lg leading-8">

              “{item.review}”

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}