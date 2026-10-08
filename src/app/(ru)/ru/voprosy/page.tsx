import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы - EPG Global ONE",
  description:
    "Ответы EPG Global ONE на частые вопросы о проверке сайтов: стоимость и сроки, бесплатная быстрая проверка, что получает компания, Рейтинг доверия клиентов к сайту, работа с веб-студиями.",
  alternates: { canonical: "/ru/voprosy" },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "voprosy.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "voprosy-schema.json"), "utf8");

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
