import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/partners.css";

export const metadata: Metadata = {
  title: "For Web Agencies - EPG Global ONE",
  description:
    "Russian website version audits for your agency clients: under your brand with a 20% discount or by referral with a 10% commission.",
  alternates: {
    canonical: "/en/partners",
    languages: { en: "/en/partners", es: "/es/socios", ru: "/ru/partners", "x-default": "/en/partners" },
  },
  openGraph: {
    title: "For Web Agencies - EPG Global ONE",
    description: "Russian website versions for your clients without an in-house editor.",
    url: "/en/partners",
    siteName: "EPG Global ONE",
    locale: "en_US",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "partners.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "partners-schema.json"), "utf8");

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
