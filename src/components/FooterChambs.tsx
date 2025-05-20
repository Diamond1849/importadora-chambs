import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

const FooterChambs = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212121] text-white mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-red-600">Importadora Chambs</h3>
            <p className="mb-4">
              Su proveedor confiable de repuestos automotrices de alta calidad desde 2005. Nuestra
              misión es ofrecer las mejores piezas para todas las marcas de vehículos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16g72jiz2M/?mibextid=wwXIfr" target='_blank' className="text-white hover:text-red-500 transition-colors duration-200">
                <Icon icon={'lucide:facebook'} />
              </a>
              <a href="https://www.instagram.com/importadorachambs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="text-white hover:text-red-500 transition-colors duration-200">
                <Icon icon={'lucide:instagram'} />
              </a>
            </div>
          </div>

          {/* Quick Links - Actualizados para coincidir con el header */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/Nosotros"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/Contacto"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctenos</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Icon icon={'lucide:map-pin'} width={25} height={25} />
                <span className="text-gray-300">Huachi Chico, José Villamil S/N y Av. Los Atis, Ambato, Ecuador</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon icon={'lucide:phone'} />
                <span className="text-gray-300">+593 99 380 3064</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon icon={'lucide:mail'} />
                <span className="text-gray-300">info@importadorachambs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Importadora Chambs. Todos los derechos reservados.</p>
          <div className="mt-2 text-sm flex justify-center space-x-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterChambs;