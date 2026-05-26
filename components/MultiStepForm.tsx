"use client";

import { useEffect, useState } from "react";

export default function MultiStepForm() {

  const [step, setStep] = useState(1);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Load saved data
  useEffect(() => {

    const savedData = localStorage.getItem(
      "multiStepForm"
    );

    if (savedData) {

      setFormData(JSON.parse(savedData));

    }

  }, []);

  // Save data automatically
  useEffect(() => {

    localStorage.setItem(
      "multiStepForm",
      JSON.stringify(formData)
    );

  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const nextStep = () => {

    if (
      step === 1 &&
      formData.name.trim() === ""
    ) {
      alert("Please enter your name");
      return;
    }

    if (
      step === 2 &&
      formData.email.trim() === ""
    ) {
      alert("Please enter your email");
      return;
    }

    setStep(step + 1);

  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {

    if (formData.password.trim() === "") {

      alert("Please enter password");

      return;

    }

    setSuccess(true);

    // Remove saved data
    localStorage.removeItem(
      "multiStepForm"
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setStep(1);

  };

  return (

    <div className="mt-12 bg-white rounded-[30px] shadow-2xl overflow-hidden border border-gray-200">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white">

        <h2 className="text-4xl font-extrabold">
          Add New User 
        </h2>

        <p className="mt-3 text-blue-100">
          Multi Step Form
        </p>

      </div>

      <div className="p-8">

        {/* Success Message */}
        {success && (

          <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-2xl mb-8">

            ✅ User Added Successfully

          </div>

        )}

        {/* Progress */}
        <div className="flex items-center justify-between mb-10 relative">

          <div className="absolute top-5 left-0 w-full h-2 bg-gray-200 rounded-full"></div>

          <div
            className={`absolute top-5 left-0 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 transition-all duration-500 ${
              step === 1
                ? "w-[20%]"
                : step === 2
                ? "w-[60%]"
                : "w-[100%]"
            }`}
          ></div>

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="relative z-10 flex flex-col items-center"
            >

              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
                  step >= item
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500"
                    : "bg-gray-400"
                }`}
              >
                {item}
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Step {item}
              </p>

            </div>

          ))}

        </div>

        {/* STEP 1 */}
        {step === 1 && (

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border-2 border-gray-200 focus:border-cyan-500 p-4 rounded-2xl mb-6 text-black outline-none transition"
            />

            <button
              onClick={nextStep}
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-90 text-white px-8 py-4 rounded-2xl transition shadow-lg"
            >
              Next →
            </button>

          </div>

        )}

        {/* STEP 2 */}
        {step === 2 && (

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border-2 border-gray-200 focus:border-indigo-500 p-4 rounded-2xl mb-6 text-black outline-none transition"
            />

            <div className="flex gap-4">

              <button
                onClick={prevStep}
                className="bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-2xl transition"
              >
                ← Back
              </button>

              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-90 text-white px-8 py-4 rounded-2xl transition shadow-lg"
              >
                Next →
              </button>

            </div>

          </div>

        )}

        {/* STEP 3 */}
        {step === 3 && (

          <div>

            <label className="block text-lg font-semibold text-gray-800 mb-3">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter strong password"
              className="w-full border-2 border-gray-200 focus:border-purple-500 p-4 rounded-2xl mb-6 text-black outline-none transition"
            />

            {/* Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6 mb-8">

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                User Summary
              </h3>

              <div className="space-y-3">

                <p className="text-gray-700">
                  <span className="font-bold">
                    Name:
                  </span>{" "}
                  {formData.name}
                </p>

                <p className="text-gray-700">
                  <span className="font-bold">
                    Email:
                  </span>{" "}
                  {formData.email}
                </p>

              </div>

            </div>

            <div className="flex gap-4 flex-wrap">

              <button
                onClick={prevStep}
                className="bg-gray-400 hover:bg-gray-500 text-white px-8 py-4 rounded-2xl transition"
              >
                ← Back
              </button>

              <button
                onClick={submitForm}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white px-8 py-4 rounded-2xl transition shadow-lg"
              >
                Submit ✔
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}