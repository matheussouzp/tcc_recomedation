import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from '../context/CartContext';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        console.log("Fetching product with ID:", id); // Log do ID do produto
        axios.get(`http://localhost:3001/produto/${id}`)
            .then((response) => {
                console.log("Produto obtido:", response.data); // Log do produto obtido
                setProduct(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erro ao buscar produto:", err);
                setError("Erro ao carregar o produto.");
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        console.log("Adicionando ao carrinho:", product); // Log para depuração
        if (product) {
            addToCart(product);
            console.log("Produto adicionado ao carrinho:", product); // Log após adicionar ao carrinho
        } else {
            console.error("Produto não encontrado ao tentar adicionar ao carrinho.");
        }
    };

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Produto não encontrado!</p>;

    return (
        <section className="relative">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
                    <div className="img">
                        <div className="img-box h-full max-lg:mx-auto">
                            <img
                                src={product.imageUrl} // Use a propriedade correta
                                alt={product.name}
                                className="max-lg:mx-auto lg:ml-auto h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                        <div className="data w-full max-w-xl">
                            <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                                {product.name}
                            </h2>
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                    {product.price}
                                </h6>
                                <div className="flex items-center gap-2">
                                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                                        {`${product.five_star}% avaliação de 5 estrelas`}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-500 text-base font-normal mb-5">
                                Marca: {product.brand}
                            </p>
                            <p className="text-gray-500 text-base font-normal mb-5">
                                ASIN: {product.asin}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                                <button 
                                    onClick={handleAddToCart} 
                                    className="bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 transition-colors"
                                >
                                    Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
