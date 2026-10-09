import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Website Audits for International Companies with Multilingual Websites - EPG Global ONE",
  description:
    "Marketers, translators, developers, and regional offices all work on an international company's website, but often no one checks the whole website through the customer's eyes.",
  alternates: {
    canonical: "/en/industries/international-companies",
    languages: { en: "/en/industries/international-companies", es: "/es/sectores/empresas-internacionales", ru: "/ru/otrasli/mezhdunarodnye", "x-default": "/en/industries/international-companies" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-industries-international-companies.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-industries-international-companies-schema.json"), "utf8");

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
