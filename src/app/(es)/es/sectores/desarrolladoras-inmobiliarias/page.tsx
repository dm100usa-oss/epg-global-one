import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Auditoría de sitios web de empresas desarrolladoras inmobiliarias que venden a compradores extranjeros - EPG Global ONE",
  description:
    "Quien compra una propiedad en el extranjero invierte mucho dinero y lee con atención cada condición.",
  alternates: {
    canonical: "/es/sectores/desarrolladoras-inmobiliarias",
    languages: { en: "/en/industries/real-estate-developers", es: "/es/sectores/desarrolladoras-inmobiliarias", ru: "/ru/otrasli/zastrojshchiki", "x-default": "/en/industries/real-estate-developers" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-sectores-desarrolladoras-inmobiliarias.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-sectores-desarrolladoras-inmobiliarias-schema.json"), "utf8");

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
