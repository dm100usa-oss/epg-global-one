import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "О компании EPG Global ONE",
  description:
    "EPG Global ONE (Expert Perception Group) из США проверяет сайты глазами клиента: направления работы, как мы помогаем компаниям и почему ошибки на сайте стоят дорого.",
  alternates: { canonical: "/ru/o-kompanii" },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "o-kompanii.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
