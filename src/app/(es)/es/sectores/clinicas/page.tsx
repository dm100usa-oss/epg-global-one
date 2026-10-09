import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Auditoría de sitios web de clínicas y centros médicos - EPG Global ONE",
  description:
    "Las clínicas y los centros médicos representan más de la mitad de las empresas cuyos sitios web revisamos en 2026.",
  alternates: {
    canonical: "/es/sectores/clinicas",
    languages: { en: "/en/industries/clinics", es: "/es/sectores/clinicas", ru: "/ru/otrasli/kliniki", "x-default": "/en/industries/clinics" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-sectores-clinicas.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-sectores-clinicas-schema.json"), "utf8");

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
