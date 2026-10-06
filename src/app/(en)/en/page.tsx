import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EPG Global ONE - Customer Trust in Website Score",
  description:
    "EPG Global ONE helps companies stop losing customers because of website errors: it conducts an independent website audit through the eyes of the customer and calculates the Customer Trust in Website Score (CTWS).",
  alternates: {
    canonical: "/en",
    languages: { en: "/en", es: "/es", ru: "/ru", "x-default": "/en" },
  },
  openGraph: {
    title: "EPG Global ONE - Customer Trust in Website Score",
    description: "We audit websites through the eyes of the customer and find errors that reduce trust in the company.",
    url: "/en",
    siteName: "EPG Global ONE",
    locale: "en_US",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "home.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "schema.json"), "utf8");

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
