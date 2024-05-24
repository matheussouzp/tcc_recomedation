import React from "react";
import Footer from "./Footer";

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shopping Cart</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-100 font-sans leading-normal tracking-normal flex-grow">
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

        {/* Main Content */}
        <div className="container mx-auto mt-12 mb-16"> {/* Added margin bottom */}
          <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Cart Items */}
            <div className="w-full lg:w-3/4 mb-8 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center border-b border-gray-200 py-4">
                    <img
                      src={`https://via.placeholder.com/100`}
                      alt={`Product Image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-xl font-bold">Product Name {index + 1}</h3>
                      <p className="text-gray-600">${99.99 - index * 10}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        defaultValue="1"
                        className="w-16 p-2 border-2 border-gray-300 rounded focus:outline-none focus:border-yellow-500"
                      />
                      <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span>Subtotal</span>
                  <span>$269.97</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2">
                  <span>Tax</span>
                  <span>$21.60</span>
                </div>
                <div className="flex justify-between font-bold text-xl py-2">
                  <span>Total</span>
                  <span>$291.57</span>
                </div>
                <button className="mt-6 w-full bg-yellow-500 text-white p-4 rounded-lg hover:bg-yellow-600 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </div>
  );
};

export default Cart;
