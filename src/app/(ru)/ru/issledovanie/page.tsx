import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/research.css";

export const metadata: Metadata = {
  title: "Исследование EPG Global ONE 2026: ошибки в языковых версиях сайтов",
  description:
    "Исследование EPG Global ONE 2026: 144 компании в 11 странах. 86% сайтов с явными языковыми ошибками, 49% с ошибками, которые мешают клиенту обратиться в компанию.",
  alternates: {
    canonical: "/ru/issledovanie",
    languages: { en: "/en/research", es: "/es/investigacion", ru: "/ru/issledovanie", "x-default": "/en/research" },
  },
  openGraph: {
    title: "Исследование EPG Global ONE 2026: ошибки в языковых версиях сайтов",
    description: "Какие ошибки встречаются в языковых версиях сайтов международных компаний и как они влияют на доверие клиентов.",
    url: "/ru/issledovanie",
    siteName: "EPG Global ONE",
    locale: "ru_RU",
    type: "article",
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "research.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "research-schema.json"), "utf8");

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
