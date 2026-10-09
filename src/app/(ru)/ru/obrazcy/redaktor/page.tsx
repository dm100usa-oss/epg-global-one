import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Задание для редактора - EPG Global ONE",
  description:
    "Только исправления текста: где на странице, что написано сейчас, на что исправить и почему. Задание передается в виде таблицы, в которой исполнитель отмечает выполненное и оставляет комментарии.",
  alternates: {
    canonical: "/ru/obrazcy/redaktor",
    languages: { en: "/en/samples/editor-task-list", es: "/es/muestras/tareas-para-el-editor", ru: "/ru/obrazcy/redaktor", "x-default": "/en/samples/editor-task-list" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "ru-obrazcy-redaktor.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "ru-obrazcy-redaktor-schema.json"), "utf8");

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
