import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Research on Website Trust - EPG Global ONE",
  description:
    "Research on how website errors and language affect customer trust: EPG Global ONE, Stanford University, Global Lingo, CSA Research and Kantar.",
  alternates: {
    canonical: "/en/website-trust-research",
    languages: { en: "/en/website-trust-research", es: "/es/investigaciones-sobre-confianza", ru: "/ru/issledovaniya", "x-default": "/en/website-trust-research" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-website-trust-research.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-website-trust-research-schema.json"), "utf8");

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
