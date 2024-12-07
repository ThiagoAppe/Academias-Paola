import React, { useState, useEffect } from "react";

import ProductCard from "../Cards/productCard";
import fetchGeneral from "../../utils/request";

const CarouselProductos = ({ endpoint }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProductos = async () => {
        setLoading(true);
        try {
            const data = await fetchGeneral(endpoint);
            if (data && data.length > 0) {
                setProducts(data);
            }
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (endpoint) fetchProductos();
    }, [endpoint]);

    return (
        <>
            <div className="max-w-full px-10">
                <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-700 scrollbar-rounded">
                    {products.map(({ id, nombre, descripcion, imagen }) => (
                        <ProductCard key={id} nombre={nombre} descripcion={descripcion} imagen={imagen} />
                    ))}
                </div>
            </div>


        </>
    );
};

export default CarouselProductos;
