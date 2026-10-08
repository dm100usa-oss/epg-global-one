import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Исследования о доверии к сайтам - EPG Global ONE",
  description:
    "Исследования о том, как ошибки и язык сайта влияют на доверие клиентов: EPG Global ONE, Стэнфордский университет, Global Lingo, CSA Research и Kantar.",
  alternates: { canonical: "/ru/issledovaniya" },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "issledovaniya.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
