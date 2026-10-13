import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Task List for the Developer - EPG Global ONE",
  description:
    "Sample developer task list: each website error with its location, steps to reproduce, actual and expected result. A spreadsheet to mark progress.",
  alternates: {
    canonical: "/en/samples/developer-task-list",
    languages: { en: "/en/samples/developer-task-list", es: "/es/muestras/tareas-para-el-desarrollador", ru: "/ru/obrazcy/razrabotchik", "x-default": "/en/samples/developer-task-list" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-samples-developer-task-list.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-samples-developer-task-list-schema.json"), "utf8");

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
