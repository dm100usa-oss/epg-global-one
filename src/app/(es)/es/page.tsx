import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EPG Global ONE - Índice de Confianza del Cliente en el Sitio Web",
  description:
    "EPG Global ONE ayuda a las empresas a no perder clientes por errores en su sitio web: realiza una auditoría independiente del sitio desde la perspectiva del cliente y calcula el Índice de Confianza del Cliente en el Sitio Web (CTWS).",
  alternates: {
    canonical: "/es",
    languages: { en: "/en", es: "/es", ru: "/ru", "x-default": "/en" },
  },
  openGraph: {
    title: "EPG Global ONE - Índice de Confianza del Cliente en el Sitio Web",
    description: "Auditamos el sitio desde la perspectiva del cliente y encontramos errores que reducen la confianza en la empresa.",
    url: "/es",
    siteName: "EPG Global ONE",
    locale: "es_419",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "home.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "schema.json"), "utf8");

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
