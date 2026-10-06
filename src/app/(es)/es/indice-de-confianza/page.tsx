import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";
import "../../../../styles/rating.css";

export const metadata: Metadata = {
  title: "Índice de Confianza del Cliente en el Sitio Web: metodología de EPG Global ONE",
  description:
    "Qué es el Índice de Confianza del Cliente en el Sitio Web (CTWS), cinco criterios, niveles de importancia de errores y ejemplo de cálculo. Herramienta propia de EPG Global ONE.",
  alternates: {
    canonical: "/es/indice-de-confianza",
    languages: { en: "/en/trust-score", es: "/es/indice-de-confianza", ru: "/ru/reiting", "x-default": "/en/trust-score" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "rating.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "rating-schema.json"), "utf8");

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
