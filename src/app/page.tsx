import CarouselChambs from '@src/components/CarouselChambs';
import Hero from '@src/components/Hero';
import DetailCard from '@src/components/DetailCard';
import { jsonCaracteristics } from '@src/utils/jsonCaracteristics';
export default function Home() {
  return (
    <div className="space-y-5">
      <Hero />
      <CarouselChambs />
      <div className="flex flex-wrap gap-4 justify-around">
        {jsonCaracteristics.map((item) => (
          <DetailCard
            key={item.icono}
            icono={item.icono}
            titulo={item.titulo}
            descripcion={item.descripcion}
          />
        ))}
      </div>
    </div>
  );
}
