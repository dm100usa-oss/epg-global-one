import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Preguntas frecuentes - EPG Global ONE",
  description:
    "Preguntas frecuentes sobre auditorías de sitios web de EPG Global ONE: precios, plazos, revisión rápida gratuita y qué recibe la empresa.",
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
