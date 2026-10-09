import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "About Us - EPG Global ONE",
  description:
    "EPG Global ONE (Expert Perception Group) from the USA audits websites through the customer's eyes: areas of work, how we help companies, and why website errors are costly.",
  alternates: {
    canonical: "/en/about",
    languages: { en: "/en/about", es: "/es/acerca-de", ru: "/ru/o-kompanii", "x-default": "/en/about" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-about.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-about-schema.json"), "utf8");

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
