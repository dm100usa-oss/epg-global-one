import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Documentos de muestra - EPG Global ONE",
  description:
    "Muestras de los tres documentos de EPG Global ONE: informe para la dirección, tareas para el editor del sitio y tareas para el desarrollador web.",
  alternates: {
    canonical: "/es/muestras",
    languages: { en: "/en/samples", es: "/es/muestras", ru: "/ru/obrazcy", "x-default": "/en/samples" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-muestras.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-muestras-schema.json"), "utf8");

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
