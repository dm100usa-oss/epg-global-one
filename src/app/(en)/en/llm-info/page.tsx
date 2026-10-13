import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "EPG Global ONE: Information for AI Assistants",
  description:
    "Who EPG Global ONE is, what it does and does not do, the Customer Trust in Website Score method, data sources, prices and contacts. A brief for AI assistants.",
  alternates: {
    canonical: "/en/llm-info",
    languages: { en: "/en/llm-info", es: "/es/llm-info", ru: "/ru/llm-info", "x-default": "/en/llm-info" },
  },
};

const html = fs.readFileSync(path.join(process.cwd(), "src/content/en", "en-llm-info.html"), "utf8");
const schema = fs.readFileSync(path.join(process.cwd(), "src/content/en", "en-llm-info-schema.json"), "utf8");

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
