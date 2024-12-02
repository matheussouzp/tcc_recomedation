import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { GlobalContext } from "../GlobalContext/GlobalContext"; 

const Index = () => {
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const navigate = useNavigate();
  const { codigo } = useContext(GlobalContext);
  const { token } = useContext(GlobalContext);

  // Carregar produtos em destaque da API
  useEffect(() => {
    axios({
      url: "http://localhost:3001/produtoRecomendador/produtos/unicos",
      method: "get",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Carregar produtos recomendados da API
  useEffect(() => {
    axios({
      url: "http://localhost:3001/produtoRecomendador/produtos/unicos",
      method: "get",
    })
      .then((res) => {
        // Limitar os produtos recomendados a 5
        setRecommendedProducts(res.data.slice(0, 5)); // Pega os 5 primeiros produtos
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleProductClick = (product) => {
    console.log("user global context:", codigo);
  
    const currentTime = new Date().toISOString().replace("T", " ").split(".")[0] + " UTC";
    const payload = {
      event_time: currentTime,
      event_type: "view",
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
      .then(() => {
        navigate(`/produtos/${product.id}`);
      })
      .catch((error) => {
        console.error("Erro ao registrar interação:", product.product_id);
      });
  };
  

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Banner */}
      <div
        className="bg-cover bg-center h-64"
        style={{
          backgroundImage: "url('https://onepatch.com/wp-content/uploads/2020/11/shopify-order-1.jpg')",
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Bem vindo a Nossa Loja!</h1>
            <p className="mt-2 text-lg">Os melhores preços estão aqui!</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-12 flex flex-wrap">
        {/* Main Product Sections */}
        <div className="w-full lg:w-3/4 pr-8">
          {/* Featured Products */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Produtos em Destaque</h2>
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {products.map((product, index) => (
                    <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => handleProductClick(product)} // Usar a função ao clicar
                  >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          alt={product.name}
                          src={product.image}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">R${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recommended Sidebar */}
        <div className="w-full lg:w-1/4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recomendados</h2>
            <div className="space-y-8">
              {recommendedProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleProductClick(product)} // Usar a função ao clicar
                >
                  <img
                    src={product.image}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="mt-2 text-gray-600">R${product.price}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
