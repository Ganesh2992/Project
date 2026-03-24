import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Masterclass = () => {
  const [choice, setChoice] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#dff6f5] to-[#b2e8e5]">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-6xl flex gap-10">
        
        {/* Left */}
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-4">
            Consultation & Calmscious Session
          </h2>

          <p className="text-gray-600 text-sm">
            What Happens When You Book a calmscious Appointment
          </p>
        </div>

        {/* Right */}
        <div className="w-2/3">
          <h2 className="text-xl font-semibold mb-6">Add Masterclass</h2>

          {/* Card */}
          <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="course"
              className="rounded-lg"
            />

            <div>
              <h3 className="font-bold">
                Depression Management Masterclass
              </h3>
              <p className="text-sm text-gray-600">Duration: 48 Hours</p>
              <p className="text-sm text-gray-600">Coach: Yamamoto</p>

              <button className="mt-2 bg-teal-400 text-white px-4 py-1 rounded">
                Course Overview
              </button>
            </div>
          </div>

          {/* Question */}
          <p className="mt-6 font-medium">
            Do you want to add this Masterclass ?
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => setChoice("yes")}
              className={`px-6 py-2 rounded-full transition ${
                choice === "yes"
                  ? "bg-teal-400 text-white"
                  : "border hover:bg-gray-100"
              }`}
            >
              Yes
            </button>

            <button
              onClick={() => setChoice("no")}
              className={`px-6 py-2 rounded-full transition ${
                choice === "no"
                  ? "bg-teal-400 text-white"
                  : "border hover:bg-gray-100"
              }`}
            >
              No
            </button>
          </div>

          {/* Bottom */}
          <div className="mt-8 flex justify-between items-center">
            <p className="font-bold text-lg">₹ 2499/-</p>

            <button
              disabled={!choice}
              onClick={() =>
                navigate("/books", {
                  state: {
                    ...state,      
                    masterclass: choice,
                  },
                })
              }
              className={`px-6 py-3 rounded-full text-white transition ${
                choice
                  ? "bg-teal-400 hover:bg-teal-500"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Masterclass;