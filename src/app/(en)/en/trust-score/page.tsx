import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";
import "../../../../styles/rating.css";

export const metadata: Metadata = {
  title: "Customer Trust in Website Score: EPG Global ONE Methodology",
  description:
    "What the Customer Trust in Website Score (CTWS) is, five criteria, error severity levels, and a calculation example. A proprietary EPG Global ONE tool.",
  alternates: {
    canonical: "/en/trust-score",
    languages: { en: "/en/trust-score", es: "/es/indice-de-confianza", ru: "/ru/reiting", "x-default": "/en/trust-score" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "rating.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "rating-schema.json"), "utf8");

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
