import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Отчет для руководителя - EPG Global ONE",
  description:
    "Руководитель получает готовую картину состояния сайта: какие ошибки найдены, насколько они серьезны и в каком порядке их нужно устранять.",
  alternates: {
    canonical: "/ru/obrazcy/otchet",
    languages: { en: "/en/samples/executive-report", es: "/es/muestras/informe-para-la-direccion", ru: "/ru/obrazcy/otchet", "x-default": "/en/samples/executive-report" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "ru-obrazcy-otchet.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "ru-obrazcy-otchet-schema.json"), "utf8");

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
