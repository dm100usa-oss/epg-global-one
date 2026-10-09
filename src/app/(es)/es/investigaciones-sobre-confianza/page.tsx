import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Investigación sobre la confianza en los sitios web - EPG Global ONE",
  description:
    "Investigaciones sobre cómo los errores y el idioma del sitio afectan la confianza del cliente: EPG Global ONE, Universidad de Stanford, Global Lingo, CSA Research y Kantar.",
  alternates: {
    canonical: "/es/investigaciones-sobre-confianza",
    languages: { en: "/en/website-trust-research", es: "/es/investigaciones-sobre-confianza", ru: "/ru/issledovaniya", "x-default": "/en/website-trust-research" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-investigaciones-sobre-confianza.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-investigaciones-sobre-confianza-schema.json"), "utf8");

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
