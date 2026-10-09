import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Website Audits for Real Estate Developers Selling to International Buyers - EPG Global ONE",
  description:
    "Buyers of property abroad invest large sums and read every term carefully.",
  alternates: {
    canonical: "/en/industries/real-estate-developers",
    languages: { en: "/en/industries/real-estate-developers", es: "/es/sectores/desarrolladoras-inmobiliarias", ru: "/ru/otrasli/zastrojshchiki", "x-default": "/en/industries/real-estate-developers" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-industries-real-estate-developers.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-industries-real-estate-developers-schema.json"), "utf8");

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
