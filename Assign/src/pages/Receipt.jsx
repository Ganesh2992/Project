import { useLocation } from "react-router-dom";

const Receipt = () => {
  const location = useLocation();
const state = location.state || JSON.parse(localStorage.getItem("receiptData")) || {};
const {
  name = "N/A",
  phone = "N/A",
  date = "N/A",
  time = "N/A",
  amount = 0,
  paymentMethod = "N/A",
  meeting_link = "",
} = state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#dff6f5] to-[#b2e8e5] p-6">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl flex p-6">

        {/* LEFT */}
        <div className="w-1/2 pr-6 border-r">
          <div className="w-16 h-16 border-2 border-teal-400 rounded-full flex items-center justify-center mb-4">
            🧠
          </div>

          <h2 className="text-xl font-bold mb-4">
            Consultation & Calmscious Session
          </h2>

          <p className="text-sm text-gray-600">
            What Happens When You Book a calmscious Appointment
          </p>

          <p className="text-xs text-gray-500 mt-4">
            You arrive with questions, restlessness, or a mind that won’t slow down...
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 pl-6">

          {/* barcode */}
          <div className="h-12 bg-black mb-4"></div>

          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://via.placeholder.com/50"
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Grace</p>
              <p className="text-xs text-gray-500">Wellness coach</p>
            </div>
          </div>

          <div className="text-sm space-y-2">
            <p><strong>Date & Hour:</strong> {date} | {time}</p>
            <p><strong>Service:</strong> State of mind</p>
            <p><strong>Duration:</strong> 1 Hour</p>
          </div>

          <div className="mt-4 border-t pt-4 text-sm space-y-2">
            <p><strong>Amount:</strong> ₹ {amount}</p>
            <p><strong>Total:</strong> ₹ {amount}</p>
          </div>

          <div className="mt-4 text-sm space-y-2">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Payment:</strong> {paymentMethod}</p>

            <p className="text-blue-500 break-all">
              <strong>Meeting Link:</strong> {meeting_link ? meeting_link : "N/A"}
            </p>
          </div>

          <button className="mt-6 w-full bg-teal-400 text-white py-3 rounded-full">
            Download E-Receipt
          </button>

        </div>
      </div>
    </div>
  );
};

export default Receipt;