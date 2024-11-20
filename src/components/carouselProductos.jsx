import React, { useState, useEffect } from "react";
import fetchGeneral from "../utils/request"; // Función de fetch reutilizable

const CarouselProductos = ({ endpoint }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchGeneral(endpoint);
        setProductos(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) fetchData();
  }, [endpoint]);

  return (
    <div className="w-full max-w-7xl px-6 mb-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Productos Destacados
      </h2>
      <div className="relative w-full">
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {loading
            ? // Estado de carga
              Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="w-60 h-80 bg-gray-200 rounded-lg animate-pulse"
                >
                  <div className="h-40 bg-gray-300 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            : // Productos reales
              productos.map(({ id, nombre, descripcion, imagen }) => (
                <div
                  key={id}
                  className="w-60 h-80 bg-white rounded-lg shadow-md flex-shrink-0"
                >
                  <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {nombre}
                    </h3>
                    <p className="text-sm text-gray-600">{descripcion}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselProductos;
