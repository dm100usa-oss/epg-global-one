import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Script from "next/script";
import "../../../../styles/prices.css";

export const metadata: Metadata = {
  title: "Услуги и цены - EPG Global ONE",
  description:
    "Цены EPG Global ONE на проверку сайта: пилот 5 страниц за 180 $, 30 ключевых страниц за 700 $, весь сайт 20 $ за страницу, подписка от 300 $ в месяц.",
  alternates: {
    canonical: "/ru/ceny",
    languages: { en: "/en/pricing", es: "/es/precios", ru: "/ru/ceny", "x-default": "/en/pricing" },
  },
  openGraph: {
    title: "Услуги и цены - EPG Global ONE",
    description: "Проверка сайта глазами клиента: пилот, ключевые страницы, весь сайт и подписка.",
    url: "/ru/ceny",
    siteName: "EPG Global ONE",
    locale: "ru_RU",
    type: "website",
  },
};

const dir = path.join(process.cwd(), "src/content/ru");
const html = fs.readFileSync(path.join(dir, "prices.html"), "utf8");

export default function Page() {
  return (
    <>
      <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/js/site.js" strategy="afterInteractive" />
    </>
  );
}
