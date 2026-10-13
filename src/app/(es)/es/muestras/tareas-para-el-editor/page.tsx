import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Tarea para el editor del sitio - EPG Global ONE",
  description:
    "Muestra de tareas para el editor: solo correcciones de texto - dónde está, qué dice, cómo debe quedar y por qué. Hoja para marcar avances.",
  alternates: {
    canonical: "/es/muestras/tareas-para-el-editor",
    languages: { en: "/en/samples/editor-task-list", es: "/es/muestras/tareas-para-el-editor", ru: "/ru/obrazcy/redaktor", "x-default": "/en/samples/editor-task-list" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-muestras-tareas-para-el-editor.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-muestras-tareas-para-el-editor-schema.json"), "utf8");

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
