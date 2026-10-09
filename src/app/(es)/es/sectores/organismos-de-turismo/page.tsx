import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Auditoría de sitios web de organismos nacionales de turismo - EPG Global ONE",
  description:
    "El viajero empieza a conocer un país en su sitio oficial de turismo: destinos, requisitos de entrada y noticias.",
  alternates: {
    canonical: "/es/sectores/organismos-de-turismo",
    languages: { en: "/en/industries/tourism-boards", es: "/es/sectores/organismos-de-turismo", ru: "/ru/otrasli/turizm", "x-default": "/en/industries/tourism-boards" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-sectores-organismos-de-turismo.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-sectores-organismos-de-turismo-schema.json"), "utf8");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON.parse(schema)) }}
      />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/js/site.js" strategy="afterInteractive" />
    </>
  );
}
