import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Website Audits for Hotels and Resorts - EPG Global ONE",
  description:
    "Hotels and resorts make up almost a quarter of the companies whose websites we reviewed in 2026.",
  alternates: {
    canonical: "/en/industries/hotels",
    languages: { en: "/en/industries/hotels", es: "/es/sectores/hoteles", ru: "/ru/otrasli/oteli", "x-default": "/en/industries/hotels" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-industries-hotels.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-industries-hotels-schema.json"), "utf8");

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
