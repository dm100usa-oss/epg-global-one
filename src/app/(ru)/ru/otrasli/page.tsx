import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Отрасли: для кого проверка сайта - EPG Global ONE",
  description:
    "Клиники, гостиницы и курорты, туристические ведомства, застройщики, международные компании и веб-студии: что EPG Global ONE проверяет на их сайтах.",
  alternates: { canonical: "/ru/otrasli" },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "otrasli.html"), "utf8");
const schema = fs.readFileSync(path.join(process.cwd(), "src/content/ru", "otrasli-schema.json"), "utf8");

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
