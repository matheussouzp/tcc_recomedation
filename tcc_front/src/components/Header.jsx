import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { GlobalContext } from "../GlobalContext/GlobalContext";
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Início', href: 'http://localhost:3000/', current: false },
  { name: 'Carrinho', href: 'http://localhost:3000/cart', current: false },
  { name: 'Pedidos', href: 'http://localhost:3000/orders', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { email, name, setEmail, setName, setCodigo } = useContext(GlobalContext);

  // Recupera o estado de login ao montar o componente
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedName = localStorage.getItem('name');
    const storedCodigo = localStorage.getItem('codigo');
    
    if (storedEmail && storedName) {
      setEmail(storedEmail);
      setName(storedName);
      setCodigo(storedCodigo);
    }
  }, [setEmail, setName]);

  const handleLogout = () => {
    setName(''); // Limpa o nome do usuário
    setEmail(''); // Limpa o email do usuário
    localStorage.removeItem('email'); // Remove o email do localStorage
    localStorage.removeItem('name'); // Remove o nome do localStorage
    window.location.reload(); // Recarrega a página
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-shrink-0 items-center" >
              <Link to="/">  
                <img
                  alt="Your Company"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHktVlAOqib6_DPMQ9yoDiCyQvwE_Iw6byA&s"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:block flex-1">
              <div className="flex justify-center">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded w-full border-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    className="h-8 w-8 rounded-full"
                  />
                  {name && <span className="text-white ml-2">{name}</span>} {/* Exibe o nome se existir */}
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {name ? ( 
                  <>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Meu Perfil
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Configurações
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sair
                      </button>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <a href="http://localhost:3000/cadastrar" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Cadastrar
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="http://localhost:3000/login" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Login
                      </a>
                    </MenuItem>
                  </>
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
