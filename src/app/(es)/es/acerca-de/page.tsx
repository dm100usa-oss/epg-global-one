import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

import "../../../../styles/doc.css";

export const metadata: Metadata = {
  title: "Sobre la empresa - EPG Global ONE",
  description:
    "EPG Global ONE (Expert Perception Group), de EE. UU., revisa sitios web desde la perspectiva del cliente: áreas de trabajo, cómo ayudamos a las empresas y por qué los errores en el sitio salen caros.",
  alternates: {
    canonical: "/es/acerca-de",
    languages: { en: "/en/about", es: "/es/acerca-de", ru: "/ru/o-kompanii", "x-default": "/en/about" },
  },
};

const dir = path.join(process.cwd(), "src/content/es");
const html = fs.readFileSync(path.join(dir, "es-acerca-de.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "es-acerca-de-schema.json"), "utf8");

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
