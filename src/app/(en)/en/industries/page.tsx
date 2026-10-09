import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Industries - EPG Global ONE",
  description:
    "Clinics, hotels and resorts, tourism boards, real estate developers, international companies, and web agencies: what EPG Global ONE checks on their websites.",
  alternates: {
    canonical: "/en/industries",
    languages: { en: "/en/industries", es: "/es/sectores", ru: "/ru/otrasli", "x-default": "/en/industries" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-industries.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-industries-schema.json"), "utf8");

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
