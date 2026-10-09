import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Tarea para el desarrollador web - EPG Global ONE",
  description:
    "Errores en el funcionamiento del sitio: dónde aparecen en la página, cómo reproducir el problema, resultado actual y resultado esperado. La lista de tareas se entrega como una hoja de cálculo en la que el responsable marca los puntos completados y deja comentarios. Si se solicita, cada error puede entregarse como una tarea lista para el sistema de gestión de tareas del equipo de desarrollo.",
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
