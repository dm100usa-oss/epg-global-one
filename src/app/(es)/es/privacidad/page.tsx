import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Política de privacidad - EPG Global ONE",
  description:
    "Qué datos recibe EPG Global ONE a través del sitio, para qué los usa y cómo eliminarlos.",
  alternates: {
    canonical: "/es/privacidad",
    languages: { en: "/en/privacy", es: "/es/privacidad", ru: "/ru/konfidencialnost", "x-default": "/en/privacy" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "privacy.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
