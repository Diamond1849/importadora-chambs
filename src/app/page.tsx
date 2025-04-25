import { Icon } from '@iconify/react/dist/iconify.js';
import DetailCard from '@src/components/DetailCard';

export default function Home() {
  return <DetailCard titulo="Ttest" descripcion="test description" icono={<Icon icon={"mdi:abacus"} fontSize={32} />} />;
}
