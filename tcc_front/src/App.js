import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { CartProvider } from './context/CartContext'; // Importa o CartProvider

function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ["/login", "/cadastrar"];

  return (
    <CartProvider> 
      <div className="flex flex-col min-h-screen"> {/* Adicionado flex e min-h-screen */}
        {!noHeaderFooterPaths.includes(location.pathname) && <Header />}
        <main className="flex-grow"> {/* Adicionado flex-grow ao main */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/produtos/:id" element={<Product />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
