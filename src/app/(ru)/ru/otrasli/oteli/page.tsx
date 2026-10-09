import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Проверка сайтов гостиниц и курортов - EPG Global ONE",
  description:
    "Гостиницы и курорты составляют почти четверть компаний, чьи сайты мы проверили в 2026 году. По результатам проверки 27 сайтов гостиниц и курортов в 2026 году: 93% фрагменты на английском или местном языке.",
  alternates: {
    canonical: "/ru/otrasli/oteli",
    languages: { en: "/en/industries/hotels", es: "/es/sectores/hoteles", ru: "/ru/otrasli/oteli", "x-default": "/en/industries/hotels" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "otrasl-oteli.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "otrasl-oteli-schema.json"), "utf8");

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
