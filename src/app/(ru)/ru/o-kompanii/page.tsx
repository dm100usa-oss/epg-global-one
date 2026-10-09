import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "О компании EPG Global ONE",
  description:
    "EPG Global ONE (Expert Perception Group) из США проверяет сайты глазами клиента: направления работы, как мы помогаем компаниям и почему ошибки на сайте стоят дорого.",
  alternates: {
    canonical: "/ru/o-kompanii",
    languages: { en: "/en/about", es: "/es/acerca-de", ru: "/ru/o-kompanii", "x-default": "/en/about" },
  },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "o-kompanii.html"), "utf8");
const schema = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "o-kompanii-schema.json"), "utf8");

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
