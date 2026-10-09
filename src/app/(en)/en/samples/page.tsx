import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Sample Documents - EPG Global ONE",
  description:
    "Samples of the three EPG Global ONE documents: executive report, task list for the editor, and task list for the developer.",
  alternates: {
    canonical: "/en/samples",
    languages: { en: "/en/samples", es: "/es/muestras", ru: "/ru/obrazcy", "x-default": "/en/samples" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-samples.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-samples-schema.json"), "utf8");

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
