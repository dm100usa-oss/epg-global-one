import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "EPG Global ONE: información para asistentes de IA",
  description:
    "Quién es EPG Global ONE, qué hace y qué no, el método del Índice de Confianza, fuentes de datos, precios y contacto. Resumen para asistentes de IA.",
  alternates: {
    canonical: "/es/llm-info",
    languages: { en: "/en/llm-info", es: "/es/llm-info", ru: "/ru/llm-info", "x-default": "/en/llm-info" },
  },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/es", "es-llm-info.html"), "utf8");
const schema = fs.readFileSync(path.join(process.cwd(), "src/content/es", "es-llm-info-schema.json"), "utf8");

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
