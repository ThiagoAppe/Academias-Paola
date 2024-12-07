import React from "react";

const ProductCard = ({id, nombre, descripcion, imagen }) => {
    return(
        <>
            <div className="w-60 h-80 bg-white rounded-lg shadow-md flex-shrink-0 m-4">
                <img src={imagen} alt={nombre} className="w-full h-40 object-contain rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
                    <p className="text-sm text-gray-600">{descripcion}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard;