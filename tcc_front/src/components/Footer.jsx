import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8"> {/* Removido mt-auto */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h4 className="font-bold mb-2">Conheça-nos</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Carreiras
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Comunicados à imprensa
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Ganhe dinheiro conosco</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Venda em nossa loja
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Torne-se um afiliado
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Anuncie seus produtos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Atendimento ao cliente</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Fale conosco
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rastreamento de pedidos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Devoluções e reembolsos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Conecte-se conosco</h4>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
