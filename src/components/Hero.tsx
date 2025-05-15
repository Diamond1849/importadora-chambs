'use client';
// src/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="text-white flex items-center px-6 md:px-20 bg-cover bg-center bg-no-repeat bg-[#111] md:bg-[url('/hero-car.jpg')] aspect-video">
      <div className="max-w-xl space-y-6 bg-black/60 p-6 rounded-md md:bg-transparent">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Repuestos de Calidad para tu Vehículo
        </h1>
        <p className="text-lg md:text-xl">
          Importamos las mejores marcas directamente para ti. Calidad garantizada en cada pieza.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
          Conoce Nuestros Productos
        </button>
      </div>
    </section>
  );
};

export default Hero;
