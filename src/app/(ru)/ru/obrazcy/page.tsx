import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Образцы документов после проверки сайта - EPG Global ONE",
  description:
    "Образцы трех документов EPG Global ONE: отчет для руководителя, задание для редактора и задание для разработчика.",
  alternates: {
    canonical: "/ru/obrazcy",
    languages: { en: "/en/samples", es: "/es/muestras", ru: "/ru/obrazcy", "x-default": "/en/samples" },
  },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "obrazcy.html"), "utf8");
const schema = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "obrazcy-schema.json"), "utf8");

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
