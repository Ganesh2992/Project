import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const booksData = [
  { id: 1, name: "Standing out", price: 499 },
  { id: 2, name: "Create vs Copy", price: 499 },
  { id: 3, name: "Standing out", price: 499 },
  { id: 4, name: "Create vs Copy", price: 499 },
  { id: 5, name: "Standing out", price: 499 },
  { id: 6, name: "Create vs Copy", price: 499 },
  { id: 7, name: "Standing out", price: 499 },
  { id: 8, name: "Create vs Copy", price: 499 },
];

const Books = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation(); // ✅ previous data aa gaya

  const toggleBook = (book) => {
    const exists = cart.find((item) => item.id === book.id);

    if (exists) {
      setCart(cart.filter((item) => item.id !== book.id));
    } else {
      setCart([...cart, book]);
    }
  };

  const total = 2499 + cart.reduce((sum, item) => sum + item.price, 0);

  // ✅ FINAL NEXT BUTTON (FIXED)
 const handleNext = async () => {
  try {
    const res = await fetch("https://project-8pos.onrender.com/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...state, // 👈 Details + Masterclass ka data
        books: cart,
        amount: total,
      }),
    });

    const data = await res.json();

    // ✅ backend se meeting link + data aayega
    navigate("/receipt", {
      state: data,
    });

  } catch (err) {
    console.log("Error:", err);
  }
};

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

          <div className="grid grid-cols-4 gap-4">

            {booksData.map((book) => {
              const selected = cart.find((item) => item.id === book.id);

              return (
                <div
                  key={book.id}
                  className={`p-3 rounded-lg shadow ${
                    selected ? "border-2 border-teal-400" : "bg-gray-100"
                  }`}
                >
                  <div className="h-24 bg-gray-300 mb-2 rounded"></div>

                  <p className="font-medium">{book.name}</p>

                  <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>

                  <p className="text-sm">₹{book.price}</p>

                  <button
                    onClick={() => toggleBook(book)}
                    className={`mt-2 px-3 py-1 text-sm rounded ${
                      selected
                        ? "bg-red-400 text-white"
                        : "bg-teal-400 text-white"
                    }`}
                  >
                    {selected ? "Remove" : "Add to cart"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="mt-6 flex justify-between items-center">
            <p className="font-bold text-lg">₹ {total}/-</p>

            <button
              onClick={handleNext}
              className="bg-teal-400 text-white px-6 py-3 rounded-full hover:bg-teal-500"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Books;