import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EPG Global ONE - Рейтинг доверия клиентов к сайту",
  description:
    "EPG Global ONE помогает компаниям не терять клиентов из-за ошибок на сайте: проводит независимую проверку сайта глазами клиента и рассчитывает Рейтинг доверия клиентов к сайту.",
  alternates: {
    canonical: "/ru",
    languages: { en: "/en", es: "/es", ru: "/ru", "x-default": "/en" },
  },
  openGraph: {
    title: "EPG Global ONE - Рейтинг доверия клиентов к сайту",
    description: "Проверяем сайт глазами клиента и находим ошибки, которые снижают доверие к компании.",
    url: "/ru",
    siteName: "EPG Global ONE",
    locale: "ru_RU",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "home.html"), "utf8");
const schema = fs.readFileSync(path.join(dir, "schema.json"), "utf8");

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
