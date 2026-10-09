import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Проверка сайтов международных компаний на нескольких языках - EPG Global ONE",
  description:
    "Над сайтом международной компании работают маркетологи, переводчики, разработчики и филиалы, но сайт целиком глазами клиента часто не проверяет никто. По результатам проверки 115 сайтов международных компаний в 2026 году: 86% языковые ошибки и следы машинного перевода.",
  alternates: {
    canonical: "/ru/otrasli/mezhdunarodnye",
    languages: { en: "/en/industries/international-companies", es: "/es/sectores/empresas-internacionales", ru: "/ru/otrasli/mezhdunarodnye", "x-default": "/en/industries/international-companies" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "otrasl-mezhdunarodnye.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "otrasl-mezhdunarodnye-schema.json"), "utf8");

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
