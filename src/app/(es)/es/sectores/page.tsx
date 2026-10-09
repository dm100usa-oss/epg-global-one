import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Sectores - EPG Global ONE",
  description:
    "Clínicas, hoteles y complejos turísticos, organismos de turismo, desarrolladoras inmobiliarias, empresas internacionales y agencias web: qué revisa EPG Global ONE en sus sitios.",
  alternates: {
    canonical: "/es/sectores",
    languages: { en: "/en/industries", es: "/es/sectores", ru: "/ru/otrasli", "x-default": "/en/industries" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-sectores.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-sectores-schema.json"), "utf8");

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
