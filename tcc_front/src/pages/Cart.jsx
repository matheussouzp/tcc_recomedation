import React from "react";

const Cart = () => {
  const products = [
    {
      name: "Product Name 1",
      price: 99.99,
      imageUrl: "https://th.bing.com/th/id/OIP.kkfJZdixnZ7E13yXOvKTBAHaDf?w=294&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
    },
    {
      name: "Product Name 2",
      price: 89.99,
      imageUrl: "https://th.bing.com/th/id/OIP.-QQJODDzfyTP9vv_xqP1nAHaEc?pid=ImgDet&w=206&h=123&c=7&dpr=1,1"
    },
    {
      name: "Product Name 3",
      price: 79.99,
      imageUrl: "https://th.bing.com/th/id/OIP.8uTpaoQQBOAeSWC0-nKqsAAAAA?w=300&h=237&rs=1&pid=ImgDetMain"
    }
  ];

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

        {/* Main Content */}
        <div className="container mx-auto mt-12 mb-16">
          <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Cart Items */}
            <div className="w-full lg:w-3/4 mb-8 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center border-b border-gray-200 py-4">
                    <img
                      src={product.imageUrl}
                      alt={`Product Image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
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


      </body>
      {/* Footer */}
    </div>
  );
};

export default Cart;