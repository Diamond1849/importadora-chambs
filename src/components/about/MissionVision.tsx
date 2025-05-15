'use client';

import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-14 px-10 sm:px-8 md:px-16">
      <div className="flex-1">
        <h2 className="text-blue-900 text-2xl font-bold mb-4">Misión</h2>
        <p className="mb-4">
          Nuestra misión es ofrecer repuestos automotrices de alta calidad que mejoran el
          rendimiento y la confiabilidad de los vehículos de nuestros clientes. Nos comprometemos a
          proporcionar un servicio excepcional y a construir relaciones duraderas con nuestros
          socios.
        </p>
        <h2 className="text-blue-900 text-2xl font-bold mb-4">Visión</h2>
        <p>
          Nos esforzamos por ser el proveedor líder de repuestos automotrices de alta calidad,
          ofreciendo soluciones innovadoras y un servicio excepcional que cumplen con las
          necesidades de nuestros clientes.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/team-placeholder.jpg"
          alt="Our Team"
          width={500}
          height={400}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
