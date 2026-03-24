import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Details from "./pages/Details";
import Masterclass from "./pages/Masterclass";
import Books from "./pages/Books";
import Receipt from "./pages/Receipt";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/details" element={<Details />} />
      <Route path="/masterclass" element={<Masterclass />} />
      <Route path="/books" element={<Books />} />
      <Route path="/receipt" element={<Receipt />} /> 
    </Routes>
  );
}

export default App;