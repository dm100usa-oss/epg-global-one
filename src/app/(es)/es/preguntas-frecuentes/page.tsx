import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Preguntas frecuentes - EPG Global ONE",
  description:
    "Respuestas de EPG Global ONE a preguntas frecuentes sobre auditorías de sitios web: precios y plazos, la revisión rápida gratuita, qué recibe la empresa, el Índice de Confianza y el trabajo con agencias web.",
  alternates: {
    canonical: "/es/preguntas-frecuentes",
    languages: { en: "/en/faq", es: "/es/preguntas-frecuentes", ru: "/ru/voprosy", "x-default": "/en/faq" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-preguntas-frecuentes.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-preguntas-frecuentes-schema.json"), "utf8");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON.parse(schema)) }}
      />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />

    </>
  );
}
