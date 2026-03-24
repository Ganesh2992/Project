import { useState } from "react";
import { useNavigate,useLocation  } from "react-router-dom";


const Details = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // ✅ ALL STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");
  const [duration, setDuration] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

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
          <h2 className="text-xl font-semibold mb-6">Add Details</h2>

          {/* Form */}
          <div className="grid grid-cols-2 gap-4">
            
            <input
              placeholder="First Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded"
            />

            <input
              placeholder="Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded"
            />

            <input
              placeholder="Phone Number*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 border rounded"
            />

            <input
              placeholder="What Kind of Problems*"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="p-2 border rounded"
            />

            <input
              placeholder="How Long Do You Have These Issues*"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="p-2 border rounded col-span-2"
            />
          </div>

          {/* Meeting Type */}
          <div className="mt-6">
            <p className="font-medium mb-2">Meeting Type</p>

            <div className="flex gap-3">
              {["Google meet", "Inbound Call", "In Office"].map((type) => (
                <button
                  key={type}
                  onClick={() => setMeetingType(type)}
                  className={`px-4 py-2 rounded-full border ${
                    meetingType === type
                      ? "bg-teal-400 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Guest Email */}
          <div className="mt-4">
            <input
              placeholder="Guest Emails"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              className="p-2 border rounded w-full"
            />
          </div>

          {/* Payment */}
          <div className="mt-6">
            <p className="font-medium mb-2">Payment Method</p>

            <button
              onClick={() => setPaymentMethod("Google Pay")}
              className={`px-4 py-2 rounded-full border ${
                paymentMethod === "Google Pay"
                  ? "bg-teal-400 text-white"
                  : ""
              }`}
            >
              💳 Google Pay
            </button>
          </div>

          {/* Bottom */}
          <div className="mt-6 flex justify-between items-center">
            <p className="font-bold text-lg">₹ 2499/-</p>

            <button
              disabled={!meetingType || !paymentMethod || !name || !phone || !email}
              onClick={() =>
                navigate("/masterclass", {
                  state: {
                    ...state,
                    name,
                    email,
                    phone,
                    problem,
                    duration,
                    guestEmail,
                    meetingType,
                    paymentMethod,
                  },
                })
              }
              className={`px-6 py-3 rounded-full text-white ${
                meetingType && paymentMethod
                  ? "bg-teal-400"
                  : "bg-gray-300"
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

export default Details;