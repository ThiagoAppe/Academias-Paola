import React, { useState, useEffect } from "react";

import CarouselCustom from "../components/carouselCustom";

import TestimoniosClientes from "../components/testimoniosClientes";



function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      {/*Carousel*/}
      <div>
      <CarouselCustom />  
      </div>
      {/*Carousel*/}

      {/* Sección de reseñas */}
      <div className="w-full max-w-7xl px-6 mb-16">
       {/*<TestimoniosClientes testimonios={testimonioso}/>*/}
      </div>

      {/* Botones de categorías de productos */}
      <div className="w-full max-w-7xl px-6 mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Categorías de Productos</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition w-full sm:w-auto">Shampoo</button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition w-full sm:w-auto">Acondicionador</button>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition w-full sm:w-auto">Tratamientos</button>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition w-full sm:w-auto">Accesorios</button>
        </div>
      </div>

    </div>
  );
}

export default Home;
