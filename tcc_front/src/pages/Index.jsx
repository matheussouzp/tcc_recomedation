import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const navigate = useNavigate();

  // Carregar produtos da API
  useEffect(() => {
    axios({
      url: "http://localhost:3001/produto/",
      method: "get",
    })
      .then((res) => {
        setProducts(res.data); // Carregar produtos sequencialmente do BD
        // Chama a função para obter produtos recomendados de forma aleatória
        getRandomRecommendedProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Função para obter dois produtos aleatórios que não estão em destaque
  const getRandomRecommendedProducts = (productsList) => {
    if (productsList.length > 0) {
      // Embaralhar a lista de produtos
      const shuffled = [...productsList].sort(() => 0.5 - Math.random());
      // Selecionar os dois primeiros produtos de forma aleatória
      const selected = shuffled.slice(0, 2);
      setRecommendedProducts(selected);
    }
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Banner */}
      <div
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: "url('https://onepatch.com/wp-content/uploads/2020/11/shopify-order-1.jpg')" }}
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
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative cursor-pointer"
                      onClick={() => navigate(`/produtos/${product.id}`)} // Navegação para a página de detalhes
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          alt={product.name}
                          src={product.imageSrc}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recommended barra lateral */}
        <div className="w-full lg:w-1/4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recomendados</h2>
            <div className="space-y-8">
              {recommendedProducts.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={product.imageSrc}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-gray-600">{product.price}</p>
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
