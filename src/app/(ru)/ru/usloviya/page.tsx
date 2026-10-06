import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Условия оказания услуг - EPG Global ONE",
  description:
    "Условия оказания услуг EPG Global ONE: что входит в проверку сайта, оплата, гарантия, конфиденциальность и ответственность.",
  alternates: {
    canonical: "/ru/usloviya",
    languages: { en: "/en/terms", es: "/es/terminos", ru: "/ru/usloviya", "x-default": "/en/terms" },
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "terms.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
