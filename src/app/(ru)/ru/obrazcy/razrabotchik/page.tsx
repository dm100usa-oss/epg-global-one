import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Задание для разработчика - EPG Global ONE",
  description:
    "Ошибки в работе сайта: где на странице, как воспроизвести, фактический и ожидаемый результат. Задание передается в виде таблицы, в которой исполнитель отмечает выполненное и оставляет комментарии. По запросу каждая ошибка передается готовой задачей для системы учета задач разработчиков.",
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
