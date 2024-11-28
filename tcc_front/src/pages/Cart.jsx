import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const Cart = () => {
    const { codigo } = useContext(GlobalContext); // Supondo que 'codigo' seja o ID do usuário
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            console.log("Código do usuário:", codigo); // Adicione este log para depuração
            if (!codigo) {
                setError("Usuário não autenticado.");
                setLoading(false);
                return; // Saia se não houver código de usuário
            }
    
            try {
                const response = await axios.get(`http://localhost:3001/cart/${codigo}`);
                
                if (response.data.length === 0) {
                    setError("O carrinho está vazio."); // Se o carrinho estiver vazio
                } else {
                    setCart(response.data);
                    setError(""); // Limpa o erro, caso haja itens no carrinho
                }
            } catch (err) {
                console.error("Erro ao buscar itens do carrinho:", err);
                setError("Não foi possível carregar o carrinho.");
            } finally {
                setLoading(false);
            }
        };
    
        const delay = setTimeout(() => {
            fetchCartItems();
        }, 1000); // Delay de 1 segundo
    
        return () => clearTimeout(delay); // Limpa o timeout se o componente for desmontado antes do delay
    }, [codigo]);
    

    const removeFromCart = async (itemId) => {
        try {
            await axios.delete(`http://localhost:3001/cart/remove/${itemId}`);
            setCart(cart.filter(item => item.id !== itemId));
        } catch (err) {
            console.error("Erro ao remover item do carrinho:", err);
            setError("Não foi possível remover o item do carrinho.");
        }
    };

    const updateQuantity = async (itemId, quantity) => {
        if (quantity < 1) return; // Impede que a quantidade seja menor que 1

        try {
            await axios.put(`http://localhost:3001/cart/update/${itemId}`, { quantity });
            // Atualizar o estado do carrinho no frontend
            setCart(cart.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            ));
        } catch (err) {
            console.error("Erro ao atualizar a quantidade:", err);
            setError("Não foi possível atualizar a quantidade.");
        }
    };

    const subtotal = cart.reduce((acc, product) => {
        const priceString = product.produto.price || '0'; // Acesse o preço corretamente
        const price = parseFloat(priceString.replace('$', '').replace(',', '')) || 0; // Remover '$' e ',' do preço
        return acc + price * product.quantity; // Calcule o subtotal
    }, 0).toFixed(2); // Formate para duas casas decimais

    // const handleCheckout = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:3001/cart/checkout', {
    //             userId: codigo // Supondo que 'codigo' seja o ID do usuário logado
    //         });
    //         alert('Compra finalizada com sucesso!');
    //         // Aqui você pode redirecionar o usuário ou atualizar o estado do carrinho
    //         setCart([]); // Limpa o carrinho no frontend
    //         navigate("/");
    //     } catch (error) {
    //         console.error("Erro ao finalizar a compra:", error);
    //         alert('Erro ao finalizar a compra.');
    //     }
    // };

    const handleCheckout = async () => {
        if (cart.length === 0) {
            alert("O carrinho está vazio.");
            return;
        }
    
        try {
            // Itera sobre os itens do carrinho e registra cada compra
            const promises = cart.map((product) => {
                // const payload = {
                //     event_time: currentTime,
                //     event_type: "purchase",
                //     product_id: product.produto.id,
                //     category_id: product.produto.category_id,
                //     category_code: product.produto.category_code || "",
                //     brand: product.produto.brand,
                //     price: product.produto.price,
                //     user_id: codigo, // ID do usuário logado
                //     user_session: userSession, // Sessão do usuário
                //     titulo: product.produto.name,
                //     descricao: product.produto.descricao || ".", // Valor padrão caso esteja vazio
                //     imagesrc: product.produto.imageSrc,
                // };
    
                // // Fazer a chamada POST para cada produto
                // axios.post(
                //     "http://localhost:3001/produtoRecomendador/produtos/interacao",
                //     payload
                // );

                return axios.post('http://localhost:3001/cart/checkout', {
                    userId: codigo,
                    productId: product.produto.id, // ID do produto
                    quantity: product.quantity, // Quantidade do produto
                    eventType: "purchase", // Define o tipo de evento
                });

                
            });

           
    
            // Aguarda a execução de todas as requisições
            await Promise.all(promises);
    
            alert('Compra finalizada com sucesso!');
            setCart([]); // Limpa o carrinho no frontend
            navigate('/'); // Redireciona o usuário após o checkout
        } catch (error) {
            console.error("Erro ao finalizar a compra:", error);
            alert('Erro ao finalizar a compra.');
        }
    };
    

    return (
        <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">

        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto mt-12 mb-16">
                <h2 className="text-xl font-semibold dark:text-white font-bold mb-8">Carrinho</h2>
                {loading ? (
                    <p>Carregando...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        <div className="w-full lg:w-3/4 mb-8 lg:mb-0">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                {cart.length > 0 ? (
                                    cart.map((product, index) => (
                                        <div key={index} className="flex items-center border-b border-gray-200 py-4">
                                            <img
                                                src={product.produto.imageSrc}
                                                alt={`Imagem do Produto ${index + 1}`}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div className="ml-4 flex-grow">
                                                <h3 className="text-xl font-bold">{product.produto.name}</h3>
                                                <p className="text-gray-600">{product.produto.price}</p>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <button
                                                    className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition-colors"
                                                    onClick={() => updateQuantity(product.id, product.quantity - 1)} // Diminuir quantidade
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    value={product.quantity}
                                                    min="1"
                                                    className="w-16 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-yellow-500"
                                                    readOnly
                                                />
                                                <button
                                                    className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400 transition-colors"
                                                    onClick={() => updateQuantity(product.id, product.quantity + 1)} // Aumentar quantidade
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                                                    onClick={() => removeFromCart(product.id)}
                                                >
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
                                    <span>R$ {subtotal}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 py-2">
                                    <span>Imposto</span>
                                    <span>R$ {(subtotal * 0.08).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold text-xl py-2">
                                    <span>Total</span>
                                    <span>R$ {(subtotal * 1.08).toFixed(2)}</span>
                                </div>
                                <button
                                    className="mt-6 w-full bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 transition-colors"
                                    onClick={handleCheckout}
                                >
                                    Prosseguir para o Checkout
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </section>
    );
};

export default Cart;
