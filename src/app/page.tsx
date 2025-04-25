import { Icon } from '@iconify/react/dist/iconify.js';
import DetailCard from '@src/components/DetailCard';

type DetailCardProps = {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
};

const listDetails: DetailCardProps[] = [
  {
    icono: <Icon icon={"mdi:abacus"} fontSize={32} />,
    titulo: "Ttest",
    descripcion: "test description",
  },
  {
    icono: <Icon icon={"lucide:user"} fontSize={32} />,
    titulo: "Ttest",
    descripcion: "test description",
  },
  {
    icono: <Icon icon={"mdi:abacus"} fontSize={32} />,
    titulo: "Ttest",
    descripcion: "test description",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {listDetails.map((detail, index) => (
        <DetailCard key={index} {...detail} />
      ))}
    </div>
  );
}
