import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/research.css";

export const metadata: Metadata = {
  title: "EPG Global ONE Research 2026: Errors in Website Language Versions",
  description:
    "EPG Global ONE Research 2026: 144 companies in 11 countries. 86% of websites had obvious language errors, and 49% had errors that made it harder for customers to contact the company.",
  alternates: {
    canonical: "/en/research",
    languages: { en: "/en/research", es: "/es/investigacion", ru: "/ru/issledovanie", "x-default": "/en/research" },
  },
  openGraph: {
    title: "EPG Global ONE Research 2026: Errors in Website Language Versions",
    description: "What errors appear in language versions of international company websites and how they affect customer trust.",
    url: "/en/research",
    siteName: "EPG Global ONE",
    locale: "en_US",
    type: "article",
  },
};

const dir = path.join(process.cwd(), "src/content/en");
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
