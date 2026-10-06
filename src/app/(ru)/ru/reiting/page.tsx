import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";
import "../../../../styles/rating.css";

export const metadata: Metadata = {
  title: "Рейтинг доверия клиентов к сайту: методика EPG Global ONE",
  description:
    "Что такое Рейтинг доверия клиентов к сайту, пять критериев, уровни важности ошибок и пример расчета. Собственный инструмент EPG Global ONE.",
  alternates: {
    canonical: "/ru/reiting",
    languages: { en: "/en/trust-score", es: "/es/indice-de-confianza", ru: "/ru/reiting", "x-default": "/en/trust-score" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "rating.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "rating-schema.json"), "utf8");

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
