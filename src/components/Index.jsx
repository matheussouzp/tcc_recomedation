import React from "react";
import Footer from "./Footer";

const Index = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Amazon Clone</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal">
        {/* Navbar */}
        <nav className="bg-yellow-500 p-4 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/100x40"
                alt="Logo"
                className="h-10"
              />
              <div className="ml-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <input
                  type="text"
                  placeholder="Search..."
                  className="p-2 rounded w-full border-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Sign In
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Orders
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Cart
              </a>
            </div>
          </div>
        </nav>

        {/* Banner */}
        <div
          className="bg-cover bg-center h-64"
          style={{ backgroundImage: "url('https://via.placeholder.com/1200x300')" }}
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
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={`https://via.placeholder.com/200`}
                      alt={`Product Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-bold">Product Name {index + 1}</h3>
                    <p className="mt-2 text-gray-600">${99.99 - index * 10}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended Products */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[...Array(8)].map((_, index) => (
                  <div key={index + 8} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={`https://via.placeholder.com/200`}
                      alt={`Product Image ${index + 9}`}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-bold">Product Name {index + 9}</h3>
                    <p className="mt-2 text-gray-600">${99.99 - (index + 8) * 10}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Recommended Products Sidebar */}
          <div className="w-full lg:w-1/4">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
              <div className="space-y-8">
                {[...Array(4)].map((_, index) => (
                  <div key={index + 16} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={`https://via.placeholder.com/200`}
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
        <Footer />
      </body>
    </div>
  );
};

export default Index;
