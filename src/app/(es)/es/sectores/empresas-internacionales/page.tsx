import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Auditoría de sitios web multilingües de empresas internacionales - EPG Global ONE",
  description:
    "En el sitio de una empresa internacional trabajan especialistas en marketing, traductores, desarrolladores y oficinas regionales, pero a menudo nadie revisa el sitio completo desde la perspectiva del cliente.",
  alternates: {
    canonical: "/es/sectores/empresas-internacionales",
    languages: { en: "/en/industries/international-companies", es: "/es/sectores/empresas-internacionales", ru: "/ru/otrasli/mezhdunarodnye", "x-default": "/en/industries/international-companies" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-sectores-empresas-internacionales.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-sectores-empresas-internacionales-schema.json"), "utf8");

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
