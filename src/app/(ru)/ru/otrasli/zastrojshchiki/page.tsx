import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Проверка сайтов застройщиков, которые продают жилье иностранцам - EPG Global ONE",
  description:
    "Покупатель недвижимости за рубежом вкладывает большие деньги и внимательно читает каждое условие. По результатам проверки 8 сайтов застройщиков в 2026 году: 88% языковые ошибки и следы машинного перевода.",
  alternates: {
    canonical: "/ru/otrasli/zastrojshchiki",
    languages: { en: "/en/industries/real-estate-developers", es: "/es/sectores/desarrolladoras-inmobiliarias", ru: "/ru/otrasli/zastrojshchiki", "x-default": "/en/industries/real-estate-developers" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "otrasl-zastrojshchiki.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "otrasl-zastrojshchiki-schema.json"), "utf8");

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
