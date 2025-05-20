import { Icon } from '@iconify/react/dist/iconify.js';

const FooterChambs = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212121] text-white">
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
              <a href="https://www.facebook.com/share/16g72jiz2M/?mibextid=wwXIfr" className="text-white hover:text-red-500 transition-colors duration-200">
                <Icon icon={'lucide:facebook'} />
              </a>
              <a href="https://www.facebook.com/share/16g72jiz2M/?mibextid=wwXIfr" className="text-white hover:text-red-500 transition-colors duration-200">
                <Icon icon={'lucide:instagram'} />
              </a>
              <a href="https://www.facebook.com/share/16g72jiz2M/?mibextid=wwXIfr" className="text-white hover:text-red-500 transition-colors duration-200">
                <Icon icon={'lucide:twitter'} />
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
                  href="/Marcas"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  Marcas
                </Link>
              </li>
              <li>
                <Link
                  href="/Servicios"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                >
                  Servicios
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
              <li className="flex items-start space-x-3">
                <Icon icon={'lucide:map-pin'} />
                <span className="text-gray-300">Av. Principal #123, Ciudad Principal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon icon={'lucide:phone'} />
                <span className="text-gray-300">+593 987 654 321</span>
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