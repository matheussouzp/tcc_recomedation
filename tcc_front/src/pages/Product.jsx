import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from '../GlobalContext/GlobalContext';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { codigo } = useContext(GlobalContext);
    const { token } = useContext(GlobalContext);    
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Buscando produto com ID:", id);
        axios.get(`http://localhost:3001/produtoRecomendador/produtos/${id}`)
            .then((response) => {
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
        console.log("Adicionando ao carrinho:", product);
        if (product && codigo) {
            axios.post('http://localhost:3001/cart/add', {
                userId: codigo,
                productId: product.id,
                quantity: 1,
                image: product.image,
            })
            const currentTime = new Date().toISOString().replace("T", " ").split(".")[0] + " UTC";
            const payload = {
                event_time: currentTime,
                event_type: "cart",
                product_id: product.product_id,
                category_id: product.category_id,
                category_code: product.category_code || "",
                brand: product.brand,
                price: product.price,
                user_id: codigo, // ID do usuário logado
                user_session: token, // JWT do usuário logado
                title: product.title,
                description: product.description || ".",
                image: product.image,
              };
              console.log("Payload enviado:", payload);

              axios
                .post("http://localhost:3001/produtoRecomendador/produtos/interacao", payload)          
                .then((response) => {
                    console.log("Produto adicionado ao carrinho com sucesso:", response.data);
                })
                .catch((error) => {
                    console.error("Erro ao adicionar ao carrinho:", error);
                });
        } else {
            console.log("Usuário não autenticado, redirecionando para login");
            navigate('/login');
        }
    };

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Produto não encontrado!</p>;

    return (
        <section className="relative py-10">
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
            <div className="img flex justify-center items-center">
                <div className="img-box h-full max-lg:mx-auto">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="max-lg:mx-auto lg:ml-auto h-full object-cover"
                    />
                </div>
            </div>
            <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                <div className="data w-full max-w-xl">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                        {product.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                        <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                            R${product.price}
                        </h6>
                    </div>
                    {product.brand && (
                        <p className="text-gray-500 text-base font-normal mb-5">
                            Marca: {product.brand}
                        </p>
                    )}

                    <p className="text-gray-500 text-base font-normal mb-5">
                        {product.description}
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
