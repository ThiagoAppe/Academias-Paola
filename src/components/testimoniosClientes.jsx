import React from 'react';

const TestimoniosClientes = ({ testimonios }) => (
  <div className="w-full max-w-7xl px-6 mb-16">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Lo que dicen nuestros clientes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonios.map(({ id, texto, nombre, ocupacion, imagen }) => (
        <div key={id} className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 text-lg mb-4">{`"${texto}"`}</p>
          <div className="flex items-center">
            <img src={imagen} alt={`Cliente ${id}`} className="h-12 w-12 rounded-full mr-4" />
            <div>
              <h3 className="text-gray-900 font-semibold">{nombre}</h3>
              <p className="text-gray-500 text-sm">{ocupacion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TestimoniosClientes;
