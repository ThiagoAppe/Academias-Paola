import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

import fetchGeneral from "../utils/request";

const CarouselPublic = ({ endpoint, autoSlide = true, autoSlideInterval = 3000 }) => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const dataFromAPI = await fetchGeneral(endpoint);
            if (dataFromAPI && dataFromAPI.length > 0) {
                setData(dataFromAPI);
            } else {
                console.log("No se encontraron datos en la respuesta del API");
            }
        } catch (error) {
            console.error("Error al obtener los datos del carousel:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (endpoint) fetchData();
    }, [endpoint]);

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const next = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === data.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    useEffect(() => {
        if (!autoSlide || data.length === 0) return;
        const interval = setInterval(next, autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlide, autoSlideInterval, data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (data.length === 0) {
        return <div>404 Not Found</div>;
    }

    return (
        <div className="overflow-hidden relative w-8/12 h-80 py-4">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map(({ id, comentario, imagen }, index) => (
                    <div key={id} className="w-full flex-shrink-0">
                        <img src={imagen} alt={id} className="w-full h-full object-cover" />
                        <h2 className="absolute bottom-4 left-4 text-white bg-black/50 px-2 py-1 rounded">{comentario}</h2>
                    </div>
                ))}
            </div>

            {/* Controles */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick={prev} className="p-2 bg-white/70 rounded-full shadow-md">
                    <ChevronLeft />
                </button>
                <button onClick={next} className="p-2 bg-white/70 rounded-full shadow-md">
                    <ChevronRight />
                </button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-4 flex items-center justify-center w-full gap-2">
                {data.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-white" : "bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselPublic;
