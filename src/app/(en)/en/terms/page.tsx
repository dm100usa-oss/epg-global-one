import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Terms of Service - EPG Global ONE",
  description:
    "EPG Global ONE Terms of Service: what is included in the website audit, payment, guarantee, confidentiality, and liability.",
  alternates: {
    canonical: "/en/terms",
    languages: { en: "/en/terms", es: "/es/terminos", ru: "/ru/usloviya", "x-default": "/en/terms" },
  },
};

const dir = path.join(process.cwd(), "src/content/en");
const html = fs.readFileSync(path.join(dir, "terms.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
