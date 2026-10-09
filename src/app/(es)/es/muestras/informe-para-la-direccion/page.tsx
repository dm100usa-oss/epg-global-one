import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Informe para la dirección - EPG Global ONE",
  description:
    "Índice de Confianza del Cliente en el Sitio Web (CTWS), resultado de la auditoría, tipos de errores y su gravedad, qué corregir primero y la conclusión del experto. Además, incluye páginas con errores marcados y una lista completa de errores.",
  alternates: {
    canonical: "/es/muestras/informe-para-la-direccion",
    languages: { en: "/en/samples/executive-report", es: "/es/muestras/informe-para-la-direccion", ru: "/ru/obrazcy/otchet", "x-default": "/en/samples/executive-report" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-muestras-informe-para-la-direccion.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-muestras-informe-para-la-direccion-schema.json"), "utf8");

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
