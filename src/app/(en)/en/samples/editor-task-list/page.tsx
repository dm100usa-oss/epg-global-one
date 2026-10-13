import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Task List for the Editor - EPG Global ONE",
  description:
    "Sample editor task list: text corrections only - where the text is, what it says now, what it should say and why. A spreadsheet to mark progress.",
  alternates: {
    canonical: "/en/samples/editor-task-list",
    languages: { en: "/en/samples/editor-task-list", es: "/es/muestras/tareas-para-el-editor", ru: "/ru/obrazcy/redaktor", "x-default": "/en/samples/editor-task-list" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-samples-editor-task-list.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-samples-editor-task-list-schema.json"), "utf8");

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
