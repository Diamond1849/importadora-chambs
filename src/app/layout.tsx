import type { Metadata } from 'next';
import './globals.css';
import HeaderChambs from '@src/components/HeaderChambs';
import FooterChambs from '@src/components/FooterChambs';

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
      <div className="flex flex-col justify-between h-screen">
        <div className="h-20" />
        <HeaderChambs />
        <body className="mt-24">{children}</body>
        <FooterChambs />
      </div>
    </html>
  );
}
