import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Tarea para el desarrollador web - EPG Global ONE",
  description:
    "Muestra de tareas para el desarrollador: cada error con ubicación, pasos para reproducirlo y resultado esperado. Hoja para marcar avances.",
  alternates: {
    canonical: "/es/muestras/tareas-para-el-desarrollador",
    languages: { en: "/en/samples/developer-task-list", es: "/es/muestras/tareas-para-el-desarrollador", ru: "/ru/obrazcy/razrabotchik", "x-default": "/en/samples/developer-task-list" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-muestras-tareas-para-el-desarrollador.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-muestras-tareas-para-el-desarrollador-schema.json"), "utf8");

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
