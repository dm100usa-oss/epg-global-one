import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - EPG Global ONE",
  description:
    "EPG Global ONE answers to frequently asked questions about website audits: pricing and timelines, the free quick review, deliverables, the Customer Trust in Website Score, and work with web agencies.",
  alternates: {
    canonical: "/en/faq",
    languages: { en: "/en/faq", es: "/es/preguntas-frecuentes", ru: "/ru/voprosy", "x-default": "/en/faq" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-faq.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-faq-schema.json"), "utf8");

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON.parse(schema)) }}
      />
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />

    </>
  );
}
