import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Privacy Policy - EPG Global ONE",
  description:
    "What data EPG Global ONE receives through the website, why it uses it, and how to request deletion.",
  alternates: {
    canonical: "/en/privacy",
    languages: { en: "/en/privacy", es: "/es/privacidad", ru: "/ru/konfidencialnost", "x-default": "/en/privacy" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "privacy.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "privacy-schema.json"), "utf8");

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
