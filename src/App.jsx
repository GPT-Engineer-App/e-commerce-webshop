import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import PaymentOptions from "./components/PaymentOptions.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentOptions totalAmount="50.00" />} />
      </Routes>
    </Router>
  );
}

export default App;