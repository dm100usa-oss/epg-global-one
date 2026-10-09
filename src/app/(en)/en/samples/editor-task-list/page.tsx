import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Task List for the Editor - EPG Global ONE",
  description:
    "Text corrections only: where the text appears on the page, what it says now, what it should be changed to, and why. The task list is delivered as a spreadsheet where the person responsible marks completed items and leaves comments.",
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
