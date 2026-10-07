import type { Metadata, Viewport } from "next";
import "../globals.css";
import { siteIcons, siteViewport } from "../site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.epgglobalone.com"),
  title: "EPG Global ONE - Índice de Confianza del Cliente en el Sitio Web",
  description:
    "EPG Global ONE ayuda a las empresas a no perder clientes por errores en su sitio web: realiza una auditoría independiente del sitio desde la perspectiva del cliente y calcula el Índice de Confianza del Cliente en el Sitio Web (CTWS).",
  ...siteIcons,
};

export const viewport: Viewport = siteViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500;7..72,600&family=IBM+Plex+Sans:wght@400;500;600&family=Lora:ital,wght@1,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
