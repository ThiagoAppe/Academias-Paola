import React, { useState, useEffect } from 'react';
import fetchGeneral from '../../utils/request'; 

const TestimoniosClientes = ({ endpoint }) => {
  const [testimonios, setTestimonios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchGeneral(endpoint);
        setTestimonios(data);
      } catch (err) {
        console.error('Error al cargar los datos:', err);
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) fetchData();
  }, [endpoint]);

  return (
    <div className="w-full max-w-7xl px-6 mb-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading || testimonios.length === 0
          ? // Esqueleto de carga mientras los datos están cargando o no hay datos
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-lg shadow-md animate-pulse"
              >
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            ))
          : // Renderiza las tarjetas con los datos reales
            testimonios.slice(0, 3).map(({ id, texto, nombre, ocupacion, imagen }) => (
              <div key={id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 text-lg mb-4">{`"${texto}"`}</p>
                <div className="flex items-center">
                  <img
                    src={imagen}
                    alt={`Cliente ${id}`}
                    className="h-12 w-12 rounded-full mr-4"
                  />
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
};

export default TestimoniosClientes;
