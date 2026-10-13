import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Задание для разработчика - EPG Global ONE",
  description:
    "Образец задания для разработчика: каждая ошибка в работе сайта с местом на странице, шагами воспроизведения и ожидаемым результатом. В виде таблицы.",
  alternates: {
    canonical: "/ru/obrazcy/razrabotchik",
    languages: { en: "/en/samples/developer-task-list", es: "/es/muestras/tareas-para-el-desarrollador", ru: "/ru/obrazcy/razrabotchik", "x-default": "/en/samples/developer-task-list" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "ru-obrazcy-razrabotchik.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "ru-obrazcy-razrabotchik-schema.json"), "utf8");

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
