import type { Metadata } from 'next';
import './globals.css';
import HeaderChambs from '@src/components/HeaderChambs';

export const metadata: Metadata = {
  title: 'Importadora Chambs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <div className="h-20" />
      <HeaderChambs />
      <body>
        {children}
      </body>
    </html>
  );
}
