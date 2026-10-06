import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/prices.css";

export const metadata: Metadata = {
  title: "Servicios y precios - EPG Global ONE",
  description:
    "Precios de EPG Global ONE para auditoría de sitios web: piloto de 5 páginas por USD 180, 30 páginas clave por USD 700, todo el sitio por USD 20 por página, suscripción desde USD 300 al mes.",
  alternates: {
    canonical: "/es/precios",
    languages: { en: "/en/pricing", es: "/es/precios", ru: "/ru/ceny", "x-default": "/en/pricing" },
  },
  openGraph: {
    title: "Servicios y precios - EPG Global ONE",
    description: "Auditoría del sitio desde la perspectiva del cliente: piloto, páginas clave, todo el sitio y suscripción.",
    url: "/es/precios",
    siteName: "EPG Global ONE",
    locale: "es_419",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "prices.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/js/site.js" strategy="afterInteractive" />
    </>
  );
}
