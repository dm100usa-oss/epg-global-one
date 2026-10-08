import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности - EPG Global ONE",
  description:
    "Какие данные получает EPG Global ONE через сайт, зачем их использует и как их удалить.",
  alternates: {
    canonical: "/ru/konfidencialnost",
    languages: { en: "/en/privacy", es: "/es/privacidad", ru: "/ru/konfidencialnost", "x-default": "/en/privacy" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "privacy.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "privacy-schema.json"), "utf8");

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
