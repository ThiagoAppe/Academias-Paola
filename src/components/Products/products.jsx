import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // Realizamos la solicitud fetch al backend
    fetch('https://net-kaylyn-appetec-91c554a9.koyeb.app/api/products/', {
      method: 'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los productos');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); // Almacenamos los productos en el estado
      })
      .catch((err) => {
        setError(err.message); // Si hay un error, lo almacenamos en el estado
      });
  }, []); // El efecto se ejecutará solo una vez al cargar el componente

  // Renderizamos los productos o el error
  return (
    <div>
      <h1>Lista de Productos</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {products ? (
        <pre>{JSON.stringify(products, null, 2)}</pre> // Mostramos los productos en formato JSON
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default Products;
