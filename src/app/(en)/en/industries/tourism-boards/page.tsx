import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Website Audits for National Tourism Boards - EPG Global ONE",
  description:
    "Travelers start getting to know a country on its official tourism website: destinations, entry requirements, and news.",
  alternates: {
    canonical: "/en/industries/tourism-boards",
    languages: { en: "/en/industries/tourism-boards", es: "/es/sectores/organismos-de-turismo", ru: "/ru/otrasli/turizm", "x-default": "/en/industries/tourism-boards" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-industries-tourism-boards.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-industries-tourism-boards-schema.json"), "utf8");

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
