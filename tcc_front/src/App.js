import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/cadastro";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { CartProvider } from './context/CartContext'; // Importa o CartProvider

function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ["/login", "/cadastrar"];

  return (
    <CartProvider> 
      <div className="App">
        {!noHeaderFooterPaths.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/produtos/:id" element={<Product />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
