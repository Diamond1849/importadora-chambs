import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
type DetailCardProps = {
  icono: string;
  titulo: string;
  descripcion: string;
};
const DetailCard = ({ icono, titulo, descripcion }: DetailCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-8 flex flex-col items-center transition max-w-[350px]">
      <div className="bg-red-100 rounded-md p-4 mb-4">
        <Icon icon={icono} fontSize={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{titulo}</h3>
      <p className="text-gray-600 text-center">{descripcion}</p>
    </div>
  );
};
export default DetailCard;
