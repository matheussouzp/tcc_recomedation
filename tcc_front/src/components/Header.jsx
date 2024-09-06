import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { GlobalContext } from "../GlobalContext/GlobalContext"; // Importe o GlobalContext

const Header = () => {
  const { LoginStatus, name } = useContext(GlobalContext);

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
          {LoginStatus ? (
            <span className="text-white">Bem-vindo, {name}!</span>
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
