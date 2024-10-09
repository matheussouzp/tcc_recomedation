import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);
    
    useEffect(() => {
        console.log("Carrinho atualizado:", cart); // Log do estado atual do carrinho
    }, [cart]); // Adicionando cart como dependência

    const subtotal = cart.reduce((acc, product) => {
        const price = parseFloat(product.price.replace('$', ''));
        return acc + price;
    }, 0).toFixed(2);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto mt-12 mb-16">
                <h2 className="text-3xl font-bold mb-8">Carrinho</h2>
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="w-full lg:w-3/4 mb-8 lg:mb-0">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            {cart.length > 0 ? (
                                cart.map((product, index) => (
                                    <div key={index} className="flex items-center border-b border-gray-200 py-4">
                                        <img
                                            src={product.imageSrc} // Corrigido para imageSrc
                                            alt={`Product Image ${index + 1}`}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div className="ml-4 flex-grow">
                                            <h3 className="text-xl font-bold">{product.name}</h3>
                                            <p className="text-gray-600">{product.price}</p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <input
                                                type="number"
                                                defaultValue="1"
                                                className="w-16 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-yellow-500"
                                            />
                                            <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors">
                                                Remover
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>O carrinho está vazio.</p>
                            )}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Resumo do Pedido</h2>
                            <div className="flex justify-between border-b border-gray-200 py-2">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 py-2">
                                <span>Imposto</span>
                                <span>${(subtotal * 0.08).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-xl py-2">
                                <span>Total</span>
                                <span>${(subtotal * 1.08).toFixed(2)}</span>
                            </div>
                            <button className="mt-6 w-full bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 transition-colors">
                                Prosseguir para o Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
