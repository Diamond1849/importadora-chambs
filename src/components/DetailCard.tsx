import React from 'react';
type DetailCardProps = {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
};
const DetailCard = ({ icono, titulo, descripcion }: DetailCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-8 flex flex-col items-center transition hover:scale-105">
      <div className="bg-red-100 rounded-md p-4 mb-4">{icono}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{titulo}</h3>
      <p className="text-gray-600 text-center">{descripcion}</p>
    </div>
  );
};
export default DetailCard;
