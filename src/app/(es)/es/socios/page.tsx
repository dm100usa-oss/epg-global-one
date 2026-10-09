import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/partners.css";

export const metadata: Metadata = {
  title: "Para agencias web - EPG Global ONE",
  description:
    "Auditoría de versiones rusas de sitios de sus clientes para agencias web: bajo su nombre con 20% de descuento o por recomendación con 10% de comisión.",
  alternates: {
    canonical: "/es/socios",
    languages: { en: "/en/partners", es: "/es/socios", ru: "/ru/partners", "x-default": "/en/partners" },
  },
  openGraph: {
    title: "Para agencias web - EPG Global ONE",
    description: "Versión rusa de los sitios de sus clientes sin editor interno.",
    url: "/es/socios",
    siteName: "EPG Global ONE",
    locale: "es_419",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "partners.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "partners-schema.json"), "utf8");

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
