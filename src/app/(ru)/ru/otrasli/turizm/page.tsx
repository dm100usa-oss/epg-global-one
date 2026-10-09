import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Проверка сайтов туристических ведомств стран - EPG Global ONE",
  description:
    "С официального сайта путешественник начинает знакомство со страной: курорты, правила въезда, новости. По результатам проверки 5 сайтов туристических ведомств в 2026 году: 4 из 5 сайтов с языковыми ошибками.",
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
