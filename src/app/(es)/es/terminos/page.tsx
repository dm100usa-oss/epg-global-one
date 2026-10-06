import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Términos de servicio - EPG Global ONE",
  description:
    "Términos de servicio de EPG Global ONE: qué incluye la auditoría del sitio, pago, garantía, confidencialidad y responsabilidad.",
  alternates: {
    canonical: "/es/terminos",
    languages: { en: "/en/terms", es: "/es/terminos", ru: "/ru/usloviya", "x-default": "/en/terms" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "terms.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
