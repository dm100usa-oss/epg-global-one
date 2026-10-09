import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Executive Report - EPG Global ONE",
  description:
    "Customer Trust in Website Score (CTWS), audit results, error types and severity, what to fix first, and the expert conclusion. Also includes pages with marked errors and a full error list.",
  alternates: {
    canonical: "/en/samples/executive-report",
    languages: { en: "/en/samples/executive-report", es: "/es/muestras/informe-para-la-direccion", ru: "/ru/obrazcy/otchet", "x-default": "/en/samples/executive-report" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "en-samples-executive-report.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "en-samples-executive-report-schema.json"), "utf8");

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
