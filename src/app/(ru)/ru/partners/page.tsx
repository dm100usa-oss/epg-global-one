import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/partners.css";

export const metadata: Metadata = {
  title: "Для веб-студий - EPG Global ONE",
  description:
    "Проверка русских версий сайтов ваших клиентов для веб-студий: под вашим именем со скидкой 20% или по рекомендации с комиссией 10%.",
  alternates: {
    canonical: "/ru/partners",
    languages: { en: "/en/partners", es: "/es/socios", ru: "/ru/partners", "x-default": "/en/partners" },
  },
  openGraph: {
    title: "Для веб-студий - EPG Global ONE",
    description: "Русская версия сайтов ваших клиентов без своего редактора.",
    url: "/ru/partners",
    siteName: "EPG Global ONE",
    locale: "ru_RU",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "partners.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "partners-schema.json"), "utf8");

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
