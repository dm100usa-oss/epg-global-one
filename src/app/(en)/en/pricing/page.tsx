import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/prices.css";

export const metadata: Metadata = {
  title: "Services and Pricing - EPG Global ONE",
  description:
    "EPG Global ONE website audit pricing: 5-page pilot for $180, 30 key pages for $700, full website audit for $20 per page, subscription from $300 per month.",
  alternates: {
    canonical: "/en/pricing",
    languages: { en: "/en/pricing", es: "/es/precios", ru: "/ru/ceny", "x-default": "/en/pricing" },
  },
  openGraph: {
    title: "Services and Pricing - EPG Global ONE",
    description: "Website audit through the eyes of the customer: pilot, key pages, full website, and subscription.",
    url: "/en/pricing",
    siteName: "EPG Global ONE",
    locale: "en_US",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "prices.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "prices-schema.json"), "utf8");

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
