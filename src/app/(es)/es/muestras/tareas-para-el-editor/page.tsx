import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Tarea para el editor del sitio - EPG Global ONE",
  description:
    "Solo correcciones de texto: dónde aparece el texto en la página, qué dice ahora, cómo debe quedar y por qué. La lista de tareas se entrega como una hoja de cálculo en la que el responsable marca los puntos completados y deja comentarios.",
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
