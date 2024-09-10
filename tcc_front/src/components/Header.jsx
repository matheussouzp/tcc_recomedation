import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { GlobalContext } from "../GlobalContext/GlobalContext"; // Importe o GlobalContext

const Header = () => {
  const { IsLoggedIn, name, setLoginStatus, setEmail, setName } = useContext(GlobalContext); // Adiciona setLoginStatus
  const [showDropdown, setShowDropdown] = useState(false);

  // Função de logout
  const handleLogout = () => {
    IsLoggedIn(false); // Desloga o usuário (corrigido para setLoginStatus)
    setName(''); // Limpa o nome do usuário
    setEmail(''); // Limpa o email do usuário
    window.location.reload(); // Recarrega a página
  };

  return (
    <nav className="bg-yellow-500 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center p-2 rounded focus:outline-none">
            <img
              src="https://via.placeholder.com/100x40"
              alt="Logo"
              className="h-10"
            />
          </Link>
          <div className="ml-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded w-full border-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          {name ? (
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)} // Mostra o dropdown ao passar o mouse
              onMouseLeave={() => setShowDropdown(false)} // Esconde o dropdown ao sair com o mouse
            >
              <span className="text-white cursor-pointer">Bem-vindo, {name}!</span>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a href="/login" className="text-white hover:text-gray-200 transition-colors">
              Entrar
            </a>
          )}
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            Pedidos
          </a>
          <a href="/cart" className="text-white hover:text-gray-200 transition-colors">
            Carrinho
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
