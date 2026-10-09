import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Website Audits for Clinics and Medical Centers - EPG Global ONE",
  description:
    "Clinics and medical centers make up more than half of the companies whose websites we reviewed in 2026.",
  alternates: {
    canonical: "/en/industries/clinics",
    languages: { en: "/en/industries/clinics", es: "/es/sectores/clinicas", ru: "/ru/otrasli/kliniki", "x-default": "/en/industries/clinics" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-industries-clinics.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-industries-clinics-schema.json"), "utf8");

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
