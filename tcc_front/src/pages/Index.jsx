import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Carregar produtos da API
  useEffect(() => {
    axios({
      url: "http://localhost:3001/produto/",
      method: "get",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Imagens de exemplo (ajustar conforme necessário)
  const sidebarProductImages = [
    'https://th.bing.com/th/id/OIP.mymAuo3f-UQqIpz8JwFXQQHaEE?w=645&h=355&rs=1&pid=ImgDetMain',
    'https://phonetechx.com/wp-content/uploads/2023/08/Honor-Watch-6-1.jpg',
    'https://th.bing.com/th/id/OIP.mV0SniFRHM3MPRabJgiwuwAAAA?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.L0rR3yghe3olTYv4Na1eHwHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1,1',
  ];

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">

      {/* Banner */}
      <div
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: "url('https://onepatch.com/wp-content/uploads/2020/11/shopify-order-1.jpg')" }}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
            <p className="mt-2 text-lg">Find the best products at the best prices</p>
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
            <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
            <div className="space-y-8">
              {sidebarProductImages.map((src, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={src}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-bold">Product Name {index + 1}</h3>
                  <p className="mt-2 text-gray-600">${99.99 - (index * 10)}</p>
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
