import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Проверка сайтов клиник и медицинских центров - EPG Global ONE",
  description:
    "Проверка сайтов клиник и медицинских центров глазами пациента. В 2026 году мы проверили 61 сайт клиник: у 89% языковые ошибки и следы машинного перевода.",
  alternates: {
    canonical: "/ru/otrasli/kliniki",
    languages: { en: "/en/industries/clinics", es: "/es/sectores/clinicas", ru: "/ru/otrasli/kliniki", "x-default": "/en/industries/clinics" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "otrasl-kliniki.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "otrasl-kliniki-schema.json"), "utf8");

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
