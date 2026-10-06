import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/research.css";

export const metadata: Metadata = {
  title: "Investigación EPG Global ONE 2026: errores en versiones lingüísticas de sitios web",
  description:
    "Investigación de EPG Global ONE 2026: 144 empresas en 11 países. 86% de sitios con errores lingüísticos evidentes, 49% con errores que dificultan que el cliente se comunique con la empresa.",
  alternates: {
    canonical: "/es/investigacion",
    languages: { en: "/en/research", es: "/es/investigacion", ru: "/ru/issledovanie", "x-default": "/en/research" },
  },
  openGraph: {
    title: "Investigación EPG Global ONE 2026: errores en versiones lingüísticas de sitios web",
    description: "Qué errores aparecen en las versiones lingüísticas de sitios web de empresas internacionales y cómo influyen en la confianza de los clientes.",
    url: "/es/investigacion",
    siteName: "EPG Global ONE",
    locale: "es_419",
    type: "article",
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "research.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "research-schema.json"), "utf8");

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
