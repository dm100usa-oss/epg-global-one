import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "EPG Global ONE: сведения для ИИ-помощников",
  description:
    "Кто такие EPG Global ONE, что мы делаем и чего не делаем, методика Рейтинга доверия клиентов к сайту, источники данных, цены и контакты. Краткая справка для ИИ-помощников и поисковых систем.",
  alternates: { canonical: "/ru/llm-info" },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "llm-info.html"), "utf8");
const schema = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "llm-info-schema.json"), "utf8");

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
