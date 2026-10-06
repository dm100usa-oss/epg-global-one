import type { Metadata, Viewport } from "next";
import "../globals.css";
import { siteIcons, siteViewport } from "../site-config";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.epgglobalone.com"),
  title: "EPG Global ONE - Рейтинг доверия клиентов к сайту",
  description:
    "EPG Global ONE помогает компаниям не терять клиентов из-за ошибок на сайте: проводит независимую проверку сайта глазами клиента и рассчитывает Рейтинг доверия клиентов к сайту.",
  ...siteIcons,
};

export const viewport: Viewport = siteViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500;7..72,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
