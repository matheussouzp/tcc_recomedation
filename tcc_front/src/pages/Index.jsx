import React from "react";
  
const Index = () => {
  const featuredProductImages = [
    'https://th.bing.com/th/id/OIP.amWjDOa6Y7tK8MO9h1OXqgHaH6?rs=1&pid=ImgDetMain',
    'https://www.imperioteck.com/wp-content/uploads/2022/03/71CZBll2VoS._AC_SL1500_.jpg',
    'https://th.bing.com/th/id/OIP.8uTpaoQQBOAeSWC0-nKqsAAAAA?w=300&h=237&rs=1&pid=ImgDetMain',
    'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/subbuzz-images/unknown/6346ffe93b676be534502c7263c0a622.jpg',
    'https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto,f_auto/image-uploads/row-content-images/unknown/fde7cd7628fbbc7862b672ad7eb23fc4.png',
    'https://th.bing.com/th/id/OIP.-QQJODDzfyTP9vv_xqP1nAHaEc?pid=ImgDet&w=206&h=123&c=7&dpr=1,1',
    'https://th.bing.com/th/id/OIP.kkfJZdixnZ7E13yXOvKTBAHaDf?w=294&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://caras.uol.com.br/images/large/2021/08/23/beleza-8-produtos-que-fazem-muito-sucesso-na-amazon--990133.jpg',
  ];

  const recommendedProductImages = [
    'https://th.bing.com/th/id/OIP.PewSIxFSqIbh7g2dQPQlegHaEn?w=251&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://th.bing.com/th/id/OIP.Cl5xtsKdcXeXCFtyE_WPewHaEt?w=263&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    'https://img.r7.com/images/produtos-eletronicos-amazon-15072019112810661?dimensions=663x448',
    'https://th.bing.com/th/id/OIP.BViPraz5BquCJInMgeyp_gHaE1?rs=1&pid=ImgDetMain',
  ];

  const sidebarProductImages = [
    'https://th.bing.com/th/id/OIP.mymAuo3f-UQqIpz8JwFXQQHaEE?w=645&h=355&rs=1&pid=ImgDetMain',
    'https://phonetechx.com/wp-content/uploads/2023/08/Honor-Watch-6-1.jpg',
    'https://th.bing.com/th/id/OIP.mV0SniFRHM3MPRabJgiwuwAAAA?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.L0rR3yghe3olTYv4Na1eHwHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1,1',
  ];

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-commerce</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal">
       

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
              <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {featuredProductImages.map((src, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={src}
                      alt={`Product Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-bold">Product Name {index + 1}</h3>
                    <p className="mt-2 text-gray-600">${99.99 - index * 10}</p>
                  </div>
                ))}
              </div>
            </section>

           
          </div>

          {/* Recommended barra do lado */}
          <div className="w-full lg:w-1/4">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
              <div className="space-y-8">
                {sidebarProductImages.map((src, index) => (
                  <div key={index + 16} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={src}
                      alt={`Product Image ${index + 17}`}
                      className="w-full h-32 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-bold">Product Name {index + 17}</h3>
                    <p className="mt-2 text-gray-600">${99.99 - (index + 16) * 10}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
      </body>
    </div>
  );
};

export default Index;