import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Проверка сайтов туристических ведомств стран - EPG Global ONE",
  description:
    "Проверка сайтов туристических ведомств и организаций глазами путешественника: курорты, правила въезда, новости. В 2026 году ошибки найдены на 4 сайтах из 5.",
  alternates: {
    canonical: "/ru/otrasli/turizm",
    languages: { en: "/en/industries/tourism-boards", es: "/es/sectores/organismos-de-turismo", ru: "/ru/otrasli/turizm", "x-default": "/en/industries/tourism-boards" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "otrasl-turizm.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "otrasl-turizm-schema.json"), "utf8");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON.parse(schema)) }}
      />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/js/site.js" strategy="afterInteractive" />
    </>
  );
}
