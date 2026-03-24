import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const navigate = useNavigate(); 

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "2:00 PM",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#dff6f5] to-[#b2e8e5]">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-5xl flex gap-10">
        
        {/* Left */}
        <div className="w-1/3">
          <h2 className="text-xl font-bold mb-4">
            Consultation & Calmscious Session
          </h2>

          <p className="text-gray-600 text-sm">
            Select your preferred date and time slot.
          </p>
        </div>

        {/* Right */}
        <div className="w-2/3">
          <h3 className="text-lg font-semibold mb-4">
            Select a Date & Time
          </h3>

          {/* Calendar */}
          <div className="mb-6">
            <Calendar onChange={setDate} value={date} />
          </div>

          {/* Time Slots */}
          <div className="flex gap-3 flex-wrap">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-full ${
                  selectedTime === time
                    ? "bg-teal-400 text-white"
                    : "bg-gray-200"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* NEXT BUTTON */}
          <div className="mt-8 flex justify-end">
            <button
              disabled={!selectedTime}
              onClick={() =>
  navigate("/details", {
    state: {
      date: date.toDateString(),   
      time: selectedTime,         
    },
  })
}
              className={`px-6 py-3 rounded-full text-white transition ${
                selectedTime
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

export default Booking;