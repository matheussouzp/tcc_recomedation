import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/cadastro";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ["/login", "/cadastrar"];

  return (
    <div className="App">
      {!noHeaderFooterPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/addnewproduct" element={<AddNewProduct />} />
        <Route path="/produto/detalhes/:productid" element={<ProductDetails />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/novoproduto" element={<CadastrarProduto />} />
        <Route path="/perfil" element={<Perfil />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
