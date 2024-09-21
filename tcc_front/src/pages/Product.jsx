import React from "react";

const Product = () => {
    return (
        <section className="relative">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
                    <div className="img">
                        <div className="img-box h-full max-lg:mx-auto">
                            <img 
                                src="https://th.bing.com/th/id/OIP.amWjDOa6Y7tK8MO9h1OXqgHaH6?rs=1&pid=ImgDetMain" 
                                alt="Basic Yellow Tropical Printed Shirt" 
                                className="max-lg:mx-auto lg:ml-auto h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                        <div className="data w-full max-w-xl">
                            <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                                Basic Yellow Tropical Printed Shirt
                            </h2>
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">$220</h6>
                                <div className="flex items-center gap-2">
                                    {/* SVGs de estrelas ou ícones de avaliação podem ser abstraídos em um componente separado */}
                                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">1624 reviews</span>
                                </div>
                            </div>
                            <p className="text-gray-500 text-base font-normal mb-5">
                                Introducing our vibrant Basic Yellow Tropical Printed Shirt - a celebration of style and sunshine!
                                Embrace the essence of summer wherever you go with this eye-catching piece that effortlessly blends comfort and tropical flair. 
                                <a href="#" className="text-indigo-600">More....</a>
                            </p>
                            <ul className="grid gap-y-4 mb-8">
                                <li className="flex items-center gap-3">Branded shirt</li>
                                <li className="flex items-center gap-3">3 color shirt</li>
                                <li className="flex items-center gap-3">Pure Cotton Shirt with 60% as 40%</li>
                                <li className="flex items-center gap-3">All sizes available</li>
                            </ul>
                            <p className="text-gray-900 text-lg leading-8 font-medium mb-4">Size</p>
                            <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                                <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                                    {["S", "M", "L", "XL", "XXL"].map(size => (
                                        <button key={size} className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 rounded-full">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                                <div className="flex sm:items-center sm:justify-center w-full">
                                    {/* Implementar botões para incremento de quantidade */}
                                </div>
                                <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100">
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
