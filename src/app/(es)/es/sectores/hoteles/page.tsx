import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Auditoría de sitios web de hoteles y complejos turísticos - EPG Global ONE",
  description:
    "Los hoteles y complejos turísticos representan casi una cuarta parte de las empresas cuyos sitios web revisamos en 2026.",
  alternates: {
    canonical: "/es/sectores/hoteles",
    languages: { en: "/en/industries/hotels", es: "/es/sectores/hoteles", ru: "/ru/otrasli/oteli", "x-default": "/en/industries/hotels" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-sectores-hoteles.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-sectores-hoteles-schema.json"), "utf8");

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
